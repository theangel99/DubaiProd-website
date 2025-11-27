# Dubai Prod - Deployment Guide

## Clean URLs (Without .html Extension)

This website is configured to work with clean URLs. For example:
- `dubaiprod.com/about` instead of `dubaiprod.com/about.html`
- `dubaiprod.com/services/video-production` instead of `dubaiprod.com/services/video-production.html`

### For Apache Servers (Most Common)

The `.htaccess` file is already included in the root directory. Simply upload all files to your server and it will work automatically.

**Requirements:**
- Apache with `mod_rewrite` enabled (usually enabled by default)
- `.htaccess` files allowed in your hosting configuration

**To verify it works:**
1. Upload all files to your web hosting
2. Visit `yourdomain.com/about` (without .html)
3. If you see the About page, it's working!

### For Nginx Servers

1. Open the `nginx.conf` file included in the root directory
2. Copy the server block configuration into your Nginx config
3. Or include the file: `include /path/to/DubaiProd_website/nginx.conf;`
4. Restart Nginx: `sudo systemctl restart nginx`

### For Static Hosting (Netlify, Vercel, Cloudflare Pages)

These platforms automatically handle clean URLs for `.html` files. No additional configuration needed!

**Netlify:** Just drag and drop the folder
**Vercel:** Connect your Git repository or use Vercel CLI
**Cloudflare Pages:** Connect Git repository

### For GitHub Pages

Create a `_config.yml` file in the root with:
```yaml
permalink: pretty
```

## Local Development - Testing Clean URLs

To test clean URLs locally (without .html extension):

### ⭐ Recommended: Node.js Server (Included)
A simple Node.js server is included that simulates production URL behavior:

```bash
cd /path/to/DubaiProd_website
node server.js
```

Then visit: `http://localhost:8080/about` ✅ (clean URLs work!)

This server:
- ✅ Removes .html extensions (just like production)
- ✅ Serves all static files correctly
- ✅ Shows exactly how it will look in production
- ✅ No installation required (uses built-in Node.js)

### Alternative: Python HTTP Server (Simple, but keeps .html)
```bash
cd /path/to/DubaiProd_website
python3 -m http.server 8080
```
Then visit: `http://localhost:8080/about.html` ⚠️ (still need .html locally)

**Note**: Python's simple server doesn't support URL rewriting, so you'll still see `.html` extensions. Use the Node.js server (above) to test clean URLs.

## File Structure

```
DubaiProd_website/
├── .htaccess              # Apache clean URL configuration
├── nginx.conf             # Nginx clean URL configuration
├── index.html             # Homepage
├── about.html             # About page
├── contact.html           # Contact page
├── assets/
│   ├── css/
│   │   └── styles.css     # Main stylesheet
│   ├── js/
│   │   ├── data.js        # Website content data
│   │   └── main.js        # JavaScript functionality
│   └── images/            # Image assets (add your images here)
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
└── blog/
    ├── index.html         # Blog listing
    └── post-slug-example.html
```

## Performance Optimizations

The `.htaccess` file includes:
- ✅ Gzip compression for faster loading
- ✅ Browser caching for static assets
- ✅ Security headers (X-Frame-Options, etc.)

## Troubleshooting

**Clean URLs not working?**
1. Check if `mod_rewrite` is enabled on Apache
2. Verify `.htaccess` file is in the root directory
3. Check server error logs
4. Ensure `.htaccess` files are allowed in your hosting config

**404 errors on clean URLs?**
- Make sure the `.htaccess` file was uploaded
- Check file permissions (644 for .htaccess)
- Contact your hosting provider to enable `mod_rewrite`

## Going Live Checklist

- [ ] Replace placeholder images in `/assets/images/`
- [ ] Update contact email in footer (currently: info@dubaiprod.com)
- [ ] Update phone numbers in footer
- [ ] Add real social media links in footer
- [ ] Test contact form submission
- [ ] Set up contact form backend/API
- [ ] Test all navigation links
- [ ] Test on mobile devices
- [ ] Run Google PageSpeed Insights
- [ ] Set up analytics (Google Analytics, etc.)
- [ ] Add favicon
- [ ] Test clean URLs after deployment

## Support

For issues or questions about deployment, refer to your hosting provider's documentation or contact their support team.
