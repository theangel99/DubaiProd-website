# Dubai Prod - Premium Digital Agency Website

A modern, premium dark-themed website for Dubai Prod - a global PR & digital agency. Built with pure HTML5, CSS3, and vanilla JavaScript (no frameworks).

## Project Overview

This is a complete redesign of the Dubai Prod agency website featuring:
- Premium dark theme with modern design
- Fully responsive (mobile, tablet, desktop)
- Smooth animations and interactions
- CMS-ready architecture
- Static files that can be hosted anywhere

## Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern CSS with custom properties, Flexbox, Grid
- **Vanilla JavaScript (ES6)** - No frameworks or libraries
- **No build tools required** - Just open in a browser

## Project Structure

```
/
├── index.html              # Home page
├── about.html              # About us
├── contact.html            # Contact page
├── services/
│   ├── index.html         # Services overview
│   ├── social-media.html
│   ├── video-production.html
│   ├── 3d-cgi.html
│   ├── seo.html
│   ├── web-development.html
│   ├── ads-management.html
│   ├── pr-media.html
│   └── branding.html
├── blog/
│   ├── index.html         # Blog listing with filters
│   └── post-slug-example.html  # Blog post template
├── assets/
│   ├── css/
│   │   └── styles.css     # Main stylesheet
│   ├── js/
│   │   ├── data.js        # Structured data (services, blog posts, etc.)
│   │   └── main.js        # Interactions and animations
│   └── img/               # Images (placeholder directory)
└── README.md
```

## Getting Started

### ⭐ Recommended: Test with Clean URLs (No .html)

Use the included Node.js server to test exactly how your site will look in production:

```bash
cd /Users/rokveber/Developer/DubaiProd_website
node server.js
```

Then visit:
- **Homepage**: http://localhost:8080
- **About**: http://localhost:8080/about ✅ (no .html!)
- **Services**: http://localhost:8080/services
- **Contact**: http://localhost:8080/contact

This shows you **exactly** how URLs will work in production.

### Alternative: Simple Local Server (keeps .html)

```bash
# Using Python 3
python3 -m http.server 8080

# Using PHP
php -S localhost:8080
```

Then visit `http://localhost:8080/about.html` ⚠️ (need .html with these servers)

## Features

### Design & UX
- ✅ Premium dark theme (#05070B - #111827 color palette)
- ✅ Electric blue accent color (#6366F1)
- ✅ Generous white space and clear visual hierarchy
- ✅ Smooth scroll animations (Intersection Observer)
- ✅ Hover effects and micro-interactions
- ✅ Sticky navigation with scroll effects
- ✅ Mobile-first responsive design

### Pages & Sections

#### Home Page
- Hero with strong value proposition
- Animated client logo carousel
- Key metrics/stats with number animations
- Services overview grid
- About preview
- Featured case studies
- Client testimonials
- Latest blog posts
- Final CTA section

#### About Page
- Company story and global journey
- Mission & vision
- 5-step approach/process
- Core values
- Team members grid

#### Services Overview
- Grid of all 8 services
- Benefits of integrated marketing approach

#### Individual Service Pages
Each service page includes:
- Hero section with clear positioning
- Problem/challenge section
- Process/approach (5 steps)
- Deliverables list
- FAQ section
- CTA

#### Blog
- Listing page with category filters
- JavaScript-powered filtering
- Blog post template with proper article structure
- Related articles section

#### Contact
- Contact form with validation
- Contact information
- Multiple office locations
- FAQ section

### CMS-Ready Architecture

All structured content is stored in `/assets/js/data.js`:
- Navigation items
- Services (8 services with full details)
- Case studies (6 case studies)
- Testimonials (5 testimonials)
- Team members (6 team members)
- Blog posts (8 blog posts)
- Client logos
- Key metrics

**How it works:**
1. Content is defined as JavaScript objects in `data.js`
2. `main.js` reads this data and populates HTML elements
3. To switch to a CMS: Replace the data source in `data.js` with API calls
4. The HTML structure and JavaScript logic remain the same

Example migration to a CMS:
```javascript
// Current (static data):
const services = siteData.services;

// Future (CMS API):
const services = await fetch('/api/services').then(r => r.json());
```

## JavaScript Functionality

### Core Features (main.js)
- Mobile navigation toggle
- Smooth scrolling for anchor links
- Header scroll effects (sticky, transparent to solid)
- Scroll-triggered animations (fade-in on viewport entry)
- Number animations for metrics
- Client logo infinite carousel
- Dynamic content population from data.js
- Blog category filtering
- Contact form validation

### Customization

#### Colors
Edit CSS custom properties in `/assets/css/styles.css`:
```css
:root {
  --color-bg-primary: #05070B;
  --color-accent-primary: #6366F1;
  /* ... */
}
```

#### Content
Edit data in `/assets/js/data.js`:
```javascript
const siteData = {
  services: [...],
  blogPosts: [...],
  // ...
}
```

#### Typography
Change font families in `/assets/css/styles.css`:
```css
:root {
  --font-primary: -apple-system, BlinkMacSystemFont, 'Segoe UI', ...;
  --font-heading: -apple-system, BlinkMacSystemFont, 'Segoe UI', ...;
}
```

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

Uses modern CSS features:
- CSS Custom Properties
- CSS Grid
- Flexbox
- Intersection Observer API

## Accessibility

- Semantic HTML5 elements
- Proper heading hierarchy
- Alt text placeholders for images
- Color contrast meets WCAG AA standards
- Keyboard navigation support
- ARIA labels for interactive elements

## SEO

Each page includes:
- Unique `<title>` tag
- Meta description
- Open Graph tags (for social sharing)
- Semantic HTML structure
- Clean URLs

## Performance

- No external dependencies
- Minimal JavaScript
- CSS-only animations where possible
- Optimized for fast load times

## Future Enhancements

To connect to a CMS:
1. Keep the HTML structure as-is
2. Replace `data.js` content with API calls
3. Update `main.js` to fetch from your CMS endpoints
4. Add loading states and error handling

Recommended CMS options:
- **Headless CMS**: Contentful, Strapi, Sanity
- **Traditional**: WordPress with REST API
- **Static Site Generators**: Use this as a base for Next.js, Gatsby, etc.

## Deployment

This static site can be deployed to:
- **Netlify** (drag & drop or Git integration)
- **Vercel** (zero config)
- **GitHub Pages** (free hosting)
- **AWS S3 + CloudFront**
- **Any web server** (Apache, Nginx, etc.)

### Quick Deploy to Netlify
1. Create a Netlify account
2. Drag the entire project folder to Netlify
3. Done! Your site is live.

## License

This project was created for Dubai Prod. All rights reserved.

## Support

For questions or issues:
- Email: info@dubaiprod.com
- Phone: +971 (54) 333-35-87

---

Built with ❤️ by Dubai Prod Team
