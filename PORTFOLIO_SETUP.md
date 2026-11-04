# Portfolio update — setup notes

This update keeps the existing GitHub Pages Cayman remote theme and the blue-to-green gradient identity.

## Files included
- `README.md` — portfolio page content and sections
- `_config.yml` — Cayman theme and hero section
- `assets/css/style.scss` — responsive styling, fixed navigation and light colour palette
- `assets/js/portfolio.js` — project filters and contact-form behavior
- `assets/projects/` — project preview images sourced from the supplied project archives/reports
- `photo.jpg`, `image/photo.jpg` — original profile images retained

## Before publishing

### 1. Add your resume PDF
The navigation currently uses a **Request Resume** email link because an actual resume PDF was not included with the website files. To make it a direct download:

1. Add your final resume PDF to `assets/`.
2. Name it `Akshada_Rane_Resume.pdf`.
3. In `_config.yml`, change both `mailto:` resume links to:
   `/assets/Akshada_Rane_Resume.pdf`
4. Add `download` to the corresponding `<a>` element if you want the browser to download it.

### 2. Verify certifications
The original repository README listed:
- AWS Certified Cloud Practitioner (CLF-C02)
- Microsoft Power BI Data Analyst (PL-300)

The new page carries those entries forward. Confirm that the certification names/status/dates are accurate and add credential URLs before publishing.

### 3. LinkedIn
A LinkedIn profile URL was not supplied in the website files. Add your actual profile URL to the contact section when ready.

### 4. Contact form behavior
GitHub Pages is a static hosting service and does not process/store form submissions by itself. The included form validates the fields and opens the visitor's default email app with a pre-filled message addressed to `akshadarane10@gmail.com`. It does not send or store anything automatically.

If you want a fully hosted form that submits without opening the visitor's email app, connect a form service such as Formspree and replace the form handler/action with its endpoint.

## Uploading to GitHub
Copy the contents of this folder into the root of your existing `portfolio.github.io` repository, preserving the folder structure. Commit and push to `main`. Do not upload the outer ZIP file itself.

GitHub Pages will rebuild the site after the commit. Check the **Actions** tab if the website does not update after a few minutes.
