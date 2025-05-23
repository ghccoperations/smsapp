import { PublicClientApplication } from 'https://alcdn.msauth.net/browser/2.38.0/js/msal-browser.min.js';

const msalConfig = {
  auth: {
    clientId: "928af24b-6c71-4471-ace8-3ff28c4003f7",
    authority: "https://login.microsoftonline.com/78bdbb3b-86c6-4271-9e57-7dee76ab743b",
    redirectUri: window.location.href
  }
};

const msalInstance = new PublicClientApplication(msalConfig);

msalInstance.loginPopup().then(response => {
  const account = response.account;
  const emailDomain = account.username.split("@")[1];
  if (emailDomain.toLowerCase() !== "ghcc.org") {
    document.body.innerHTML = "<h2>Access denied</h2><p>This app is for GHCC employees only.</p>";
  } else {
    document.body.innerHTML += `<p>Welcome, ${account.username}</p>`;
  }
}).catch(error => {
  console.error(error);
  document.body.innerHTML = "<p>Login failed or cancelled. Please refresh the page to try again.</p>";
});
