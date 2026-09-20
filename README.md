# PAIA Lab Website

Website of the Perception, AI, and Autonomy Lab (PAIA Lab), Department of Electrical and
Computer Engineering, The University of Texas Rio Grande Valley.

Published with GitHub Pages: https://paia-lab.github.io

## Structure

| Path | Purpose |
| --- | --- |
| `index.html` | Home: hero, welcome, news highlights, research topics, acknowledgements |
| `research.html` | Research topics, keywords, and the three research directions |
| `people.html` | Principal investigator and lab members |
| `publications.html` | Publication list |
| `projects.html` | Project cards with abstracts |
| `news.html` | News archive |
| `openings.html` | Open positions for prospective students |
| `navbar.html`, `footer.html` | Shared fragments injected by `static/navbar.js` |
| `style/stylesheet.css` | Site styles |
| `style/navbar.css` | Navigation bar styles |
| `static/navbar.js` | Loads the shared navbar/footer and marks the active page |
| `images/` | Brand, campus, people, project, research, and funder logos |

Bootstrap, jQuery, and Google Fonts are loaded from CDNs; there is no build step.

## Local preview

```bash
python -m http.server 8000
```

Then open http://localhost:8000.
