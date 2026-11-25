# Mpearl Clinical Laboratory & Diagnostics

A static React site for browsing laboratory tests, health screening packages and ultrasound scans in Surulere, Lagos. The appointment form prepares a WhatsApp message for the visitor to review and send.

## Local development

Use Node.js 24 and npm.

```sh
npm ci
npm run dev
npm test
```

## Build and deploy

```sh
npm run build
npm run preview
```

The production files are in `dist/`. The build includes separate HTML pages for Home, Services, Health Packages, About, FAQs, Appointments, and Visit. Publish the full directory on a static host to keep the page links working.

When you are ready to publish on [GitHub Pages](https://github.com/seunosinowo/mpearl_3/settings/pages), select **GitHub Actions** as the Pages source and run **Deploy to GitHub Pages** from the Actions tab. The workflow runs only when started manually.
