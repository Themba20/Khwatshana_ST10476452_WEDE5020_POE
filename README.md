# Mswenko Home & Lifestyle Store
**WEDE5020 POE | Part 3: Enhancing Functionality and SEO**

## Project overview
Mswenko Home & Lifestyle is a homeware and lifestyle store website concept serving Pretoria and Johannesburg, Gauteng. The website provides information about the store, displays a sample product catalogue, and allows visitors to make product enquiries or prepare a general contact email.

## Technologies and tools
- HTML5 for semantic page structure and forms.
- CSS3 for responsive layout, visual styling, animation and transitions.
- JavaScript for mobile navigation, dynamic product rendering, search, filtering, sorting, lightbox previews and client-side form validation.
- Git and GitHub for version control and remote repository hosting.
- Netlify (recommended) for free static website deployment.
- Google Fonts for typography.

## Website pages
| Page | Purpose |
|---|---|
| `index.html` | Home page and introduction |
| `about.html` | Store background and values |
| `products.html` | Dynamic product catalogue with search and filters |
| `enquiry.html` | Product enquiry form and on-screen acknowledgement |
| `contact.html` | General contact form that prepares an email |

## Folder structure
```text
Mswenko_Part3_Submission/
├── index.html
├── about.html
├── products.html
├── enquiry.html
├── contact.html
├── robots.txt
├── sitemap.xml
├── README.md
├── css/
│   └── style.css
├── js/
│   └── script.js
└── images/
    └── logo.svg
```

## Part 3 functionality
- Responsive mobile navigation menu.
- Product data is stored in a JavaScript array and rendered dynamically into the product catalogue.
- Search filters by product name, category and description.
- Category filtering and alphabetical sorting are available.
- Product image preview lightbox opens on click and closes using the close button, backdrop or Escape key.
- CSS transitions and entrance animations improve interaction.
- Enquiry form uses HTML5 constraints and JavaScript validation, then displays an acknowledgement. It does not confirm actual stock or pricing and does not transmit/store the form data.
- Contact form validates input and prepares a `mailto:` email after the recipient address is configured.

## Important publishing checklist
1. Replace `YOUR-PUBLISHED-DOMAIN.example` in every canonical URL, `robots.txt` and `sitemap.xml` with the real Netlify domain after deployment.
2. In `js/script.js`, replace `REPLACE-WITH-STORE-EMAIL` with the organisation's correct email address. The contact form will not open a sendable email until this is done.
3. Confirm product names, descriptions, prices and availability with the organisation. Current catalogue content is illustrative and deliberately does not invent prices or stock levels.
4. Add the real business address and map only if the organisation supplies a verified public address. No exact street address has been assumed.
5. Test all links and forms on desktop and mobile.
6. Submit the GitHub repository URL and published Netlify URL to the LMS as required.

## SEO implementation
- Each HTML page has a unique title and meta description.
- Relevant search terms are naturally included in page titles, descriptions and content.
- Semantic HTML landmarks and a clear heading hierarchy are used.
- Images have descriptive alternative text where meaningful; the decorative logo uses empty alt text.
- Navigation provides internal links between all pages.
- Responsive CSS supports mobile screens.
- `robots.txt` and `sitemap.xml` are included; update their domain before publishing.
- The logo is an optimised SVG. Avoid uploading unnecessarily large images.

## Off-page SEO and local SEO plan
- Share the published website through the organisation's official social media accounts.
- Ask legitimate local partners or suppliers to link to the website where appropriate.
- Keep the business name, service area and contact details consistent across official business listings.
- Only create a Google Business Profile if the organisation is eligible and has verified business details.

## Changelog

### Part 3 additions
- Added `js/script.js` to manage responsive navigation, dynamic product content, search, category filtering, sorting, image preview lightbox and form validation.
- Added a JavaScript product data array and DOM rendering so the product catalogue can be updated without manually duplicating product-card HTML.
- Added a search field that filters products by name, category and description, plus category and alphabetical sort controls.
- Added a lightbox dialog for larger product previews with close-button, backdrop and Escape-key support.
- Added client-side validation to the enquiry and contact forms, including required fields, email format, minimum message length and quantity limits.
- Added an enquiry confirmation message that explains that stock and pricing must still be confirmed by the store.
- Added a contact email preparation workflow. The recipient address is a clearly marked configuration placeholder and must be replaced with the store's real email address before publication.
- Added page-specific title tags, meta descriptions, keywords, canonical URL placeholders and theme metadata.
- Added `robots.txt` and `sitemap.xml` with domain placeholders that must be updated after deployment.
- Added responsive navigation, mobile layout rules, keyboard-accessible controls, skip navigation, focus styling, transitions and subtle entrance animations.
- Added an original SVG brand mark to the images folder.

### Part 2 feedback corrections
- No Part 2 lecturer feedback document was supplied with the project files available for this update. Therefore, no specific lecturer comments are claimed as completed. Add each actual feedback item here after checking the Part 2 marksheet, and record the corresponding file and correction.

## References
- Mozilla Developer Network (MDN) (n.d.) *HTML: HyperText Markup Language*. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML (Accessed: 2 November 2026).
- Mozilla Developer Network (MDN) (n.d.) *CSS: Cascading Style Sheets*. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS (Accessed: 2 November 2026).
- Mozilla Developer Network (MDN) (n.d.) *JavaScript*. Available at: https://developer.mozilla.org/en-US/docs/Web/JavaScript (Accessed: 2 November 2026).
- Google Search Central (n.d.) *SEO Starter Guide*. Available at: https://developers.google.com/search/docs/fundamentals/seo-starter-guide (Accessed: 2 November 2026).
- Netlify (n.d.) *Deploy overview*. Available at: https://docs.netlify.com/site-deploys/overview/ (Accessed: 2 November 2026).
