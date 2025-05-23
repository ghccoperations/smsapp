const msalConfig = {
  auth: {
    clientId: "928af24b-6c71-4471-ace8-3ff28c4003f7",
    authority: "https://login.microsoftonline.com/78bdb3b-86c6-4271-9e57-7dee76ab743b",  // <== no /v2.0 or extra path
    redirectUri: window.location.href
  },
  cache: {
      cacheLocation: 'sessionStorage', // Configures cache location. "sessionStorage" is more secure, but "localStorage" gives you SSO.
      storeAuthStateInCookie: false, // set this to true if you have to support IE
  },
  system: {
      loggerOptions: {
          loggerCallback: (level, message, containsPii) => {
              if (containsPii) {
                  return;
              }
              switch (level) {
                  case msal.LogLevel.Error:
                      console.error(message);
                      return;
                  case msal.LogLevel.Info:
                      console.info(message);
                      return;
                  case msal.LogLevel.Verbose:
                      console.debug(message);
                      return;
                  case msal.LogLevel.Warning:
                      console.warn(message);
                      return;
              }
          },
      },
  },
};

/**
 * Scopes you add here will be prompted for user consent during sign-in.
 * By default, MSAL.js will add OIDC scopes (openid, profile, email) to any login request.
 * For more information about OIDC scopes, visit: 
 * https://learn.microsoft.com/en-us/entra/identity-platform/permissions-consent-overview#openid-connect-scopes
 */
const loginRequest = {
    scopes: ["User.Read"],
};



const msalInstance = new msal.PublicClientApplication(msalConfig);

document.addEventListener("DOMContentLoaded", () => {
  const button = document.createElement("button");
  button.id = "loginBtn";
  button.innerText = "Log In with Microsoft";
  button.style = "margin-top:20px;padding:10px 20px;font-size:16px;";
  document.body.appendChild(button);

  button.addEventListener("click", () => {
    msalInstance.loginPopup({ prompt: "select_account" }).then(response => {
      const account = response.account;
      const emailDomain = account.username.split("@")[1];
      if (emailDomain.toLowerCase() !== "ghcc.org") {
        document.body.innerHTML = "<h2>Access denied</h2><p>This app is for GHCC employees only.</p>";
      } else {
        document.body.innerHTML = `<h2>Welcome, ${account.username}</h2>`;
      }
    }).catch(error => {
      console.error("MSAL Login Error:", error);
      document.body.innerHTML = "<p>Login failed or cancelled. Please refresh the page to try again.</p>";
    });
  });
});
