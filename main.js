import { PublicClientApplication } from 'https://alcdn.msauth.net/browser/2.38.0/js/msal-browser.min.js';

const msalConfig = {
  auth: {
    clientId: "928af24b-6c71-4471-ace8-3ff28c4003f7",
    redirectUri: window.location.href
  }
};

const msalInstance = new PublicClientApplication(msalConfig);

msalInstance.loginPopup().then(response => {
  document.body.innerHTML += `<p>Welcome, ${response.account.username}</p>`;
}).catch(error => {
  console.error(error);
  document.body.innerHTML += "<p>Login failed. Please refresh and try again.</p>";
});
