# Mpearl Clinical Laboratory & Diagnostics

A static React site for browsing laboratory tests, health screening packages and ultrasound scans in Surulere, Lagos. The appointment form prepares a WhatsApp message for the visitor to review and send.

## Local development

Use Node.js 24 and npm.

```sh
npm install
npm run dev
npm test
```

## Build and deploy

```sh
npm run build
npm run preview
```

The production files are in `dist/`. Publish that directory on a static host.

For [GitHub Pages](https://github.com/seunosinowo/mpearl_3/settings/pages), go to **Settings > Pages** and select **GitHub Actions** as the source. Once enabled, the deployment workflow runs on pushes to `main` and can also be run manually from the Actions tab.
