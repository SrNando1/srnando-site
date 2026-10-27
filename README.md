# SrNando: portfolio and studio site

The website of **SrNando**, the independent web and SaaS studio of Fernando Gonçalves (Lisbon, Portugal). It presents the services offered, the projects built so far and how to get in touch.

**Live site:** [srnandocompany.vercel.app](https://srnandocompany.vercel.app)

## Pages

| Page | File | Content |
|---|---|---|
| Home | `index.html` | Introduction, what I do, recent work |
| Portfolio | `portfolio.html` | Selected projects with stack and live links |
| Services | `servicos.html` | Services offered |
| About | `sobre.html` | About the studio |
| Contact | `contactos.html` | Contact form |
| Get a Quote | `budget.html` | Project request form (project type, features, timeframe, details) |
| Suggestions | `suggestions.html` | Form for new project ideas and feature requests |
| Community | `community.html` | Telegram community for each project |

## Featured projects

- **CriptoRadar:** crypto-tracking SaaS (React, Supabase). [Source](https://github.com/SrNando1/cripto-radar) · [Live](https://cripto-radar.vercel.app)
- **AccidentReport:** incident-investigation system for web and Android (React Native, Node.js, MySQL). [Source](https://github.com/SrNando1/AccidentReport)
- **SummaryAI:** AI text summarizer for Android (Kotlin, Node.js). [Source](https://github.com/SrNando1/APP-ResumeAI)
- **Flappy Plane:** Android game in Unity 6. [Source](https://github.com/SrNando1/flappy-plane)

## Tech

A deliberately simple static site: **plain HTML, CSS and a few lines of JavaScript**, with no framework and no build step.

- One stylesheet per page, with shared colours defined as CSS variables
- `script.js` highlights the current page in the navigation
- Forms are handled by [FormSubmit](https://formsubmit.co), so there is no backend to maintain
- Responsive layout
- Hosted on Vercel

## Running locally

No install needed. Serve the folder with any static server:

```bash
python -m http.server 8000     # then open http://localhost:8000
```

or open `index.html` directly in the browser. The forms only deliver email from the deployed domain: FormSubmit asks the owner to confirm the address on first use.

## Structure

```
index.html, portfolio.html, servicos.html, sobre.html,
contactos.html, budget.html, suggestions.html, community.html
*.css        one stylesheet per page (index, portfolio, serviços, sobre, contactos, budget)
script.js    active-link highlighting
img/         logo, project thumbnails and photos
```

## License

All rights reserved. The site's content, text and images are not licensed for reuse.
