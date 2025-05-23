# GHCC Messaging App (PWA)

This is a private Progressive Web App (PWA) for GHCC internal messaging and notifications, designed to be accessed by employees only using Microsoft 365 login.

## 🚀 Features

- Secure login via Microsoft 365 (MSAL.js)
- Works on mobile and desktop
- Can be installed like a native app
- Hosted on GitHub Pages (free)

## 🔐 Setup

1. Register an Azure AD App in Microsoft Entra ID
2. Replace `YOUR_CLIENT_ID_HERE` in `main.js` with your real Azure App Client ID
3. Push this repo to GitHub
4. Go to `Settings > Pages` in GitHub, and enable Pages from the `main` branch `/root`
5. Share the GitHub Pages link with your team

## 📁 Files

- `index.html` – entry point
- `manifest.json` – PWA metadata
- `service-worker.js` – offline support
- `main.js` – Microsoft login
- `icon.png` – app icon

