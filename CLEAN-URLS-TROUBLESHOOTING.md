# Clean URLs Not Working - Troubleshooting Guide

## Problem: Still seeing `.html` in URLs after uploading to server

## Most Common Issue: .htaccess File Not Uploaded

**FTP clients often hide or skip files starting with a dot (.)!**

### Solution 1: Show Hidden Files in Your FTP Client

#### FileZilla:
1. Go to **Server → Force showing hidden files**
2. Re-upload the `.htaccess` file
3. Verify it appears on the server

#### Cyberduck:
1. Go to **View → Show Hidden Files**
2. Upload `.htaccess` file
3. Check it's on the server

#### cPanel File Manager:
1. Log into cPanel
2. Open **File Manager**
3. Click **Settings** (top right)
4. Check "Show Hidden Files (dotfiles)"
5. Upload `.htaccess` to public_html (root directory)

### Solution 2: Rename and Upload, Then Rename Back

If your FTP client still won't upload `.htaccess`:

1. **Locally**: Rename `.htaccess` to `htaccess.txt`
2. **Upload** `htaccess.txt` via FTP
3. **On server**: Rename `htaccess.txt` back to `.htaccess`

### Solution 3: Create .htaccess Directly on Server

**Using cPanel File Manager:**
1. Log into cPanel
2. Go to File Manager
3. Navigate to public_html (or your domain root)
4. Click **+ File** → Name it `.htaccess`
5. Right-click `.htaccess` → **Edit**
6. Copy the content from below and paste it
7. Save

**Content to paste:**

```apache
# Dubai Prod - Clean URLs Configuration
# This file enables URLs without .html extension

# Enable rewrite engine
RewriteEngine On
RewriteBase /

# Remove trailing slashes
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_URI} (.+)/$
RewriteRule ^ %1 [R=301,L]

# Add .html extension if file exists
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME}.html -f
RewriteRule ^(.*)$ $1.html [L]

# Handle index files
RewriteCond %{THE_REQUEST} /index\.html
RewriteRule ^(.*)index\.html$ /$1 [R=301,L]

# Security headers
<IfModule mod_headers.c>
    Header set X-Frame-Options "SAMEORIGIN"
    Header set X-Content-Type-Options "nosniff"
    Header set X-XSS-Protection "1; mode=block"
</IfModule>
```

---

## Issue 2: Server Doesn't Support .htaccess

Some servers don't use Apache or have .htaccess disabled.

### Check Your Server Type

Contact your hosting support and ask:
- "Does my hosting support .htaccess files?"
- "Is mod_rewrite enabled?"
- "What web server am I using? (Apache, Nginx, LiteSpeed?)"

### If Using Nginx (Not Apache):

You need to add configuration to your Nginx server block. Contact your host or:

1. Find your Nginx config file (usually in `/etc/nginx/`)
2. Add this to your server block:

```nginx
location / {
    try_files $uri $uri.html $uri/ =404;
}

# Redirect .html to clean URLs
if ($request_uri ~ ^/(.*)\.html$) {
    return 301 /$1;
}
```

3. Reload Nginx: `sudo systemctl reload nginx`

---

## Issue 3: Hosting Doesn't Support URL Rewriting

If your hosting doesn't support URL rewriting at all, you have two options:

### Option A: Update All Links to Include .html

This means accepting that URLs will have `.html` extensions.

**Not recommended**, but quick fix:
- Links work as-is
- Just accept `/about.html` in URLs

### Option B: Switch to Better Hosting

Modern hosting providers that support .htaccess:
- **SiteGround** (recommended)
- **Bluehost**
- **HostGator**
- **A2 Hosting**
- **InMotion Hosting**

Or use free static hosting with automatic clean URLs:
- **Netlify** (recommended - drag & drop, free)
- **Vercel** (free)
- **Cloudflare Pages** (free)

---

## How to Test if .htaccess is Working

### Test 1: Check if File Exists on Server

Via FTP, check if `.htaccess` is in your root directory (usually `public_html/` or `www/` or `httpdocs/`)

### Test 2: Create a Test .htaccess

Create `.htaccess` with just this:

```apache
# TEST FILE
RewriteEngine On
```

If you get a "500 Internal Server Error" after uploading, it means:
- ✅ .htaccess IS being read
- ❌ But mod_rewrite is NOT enabled

Contact your host to enable mod_rewrite.

### Test 3: Visit Clean URL

After uploading .htaccess correctly, try visiting:
- `yourdomain.com/about` (without .html)

If it works → Success! ✅
If 404 error → .htaccess not working or mod_rewrite disabled

---

## Quick Fix for ANY Hosting: Use Netlify (Free)

If you're frustrated with your current hosting:

1. Go to [netlify.com](https://netlify.com)
2. Create free account
3. Drag your entire `DubaiProd_website` folder to Netlify
4. Done! Clean URLs work automatically

**No configuration needed. It just works.**

---

## Verify .htaccess on Your Server Right Now

**SSH into your server and run:**

```bash
cat /path/to/public_html/.htaccess
```

You should see the rewrite rules. If you get "No such file", the file wasn't uploaded.

**Via cPanel:**
1. File Manager → Settings → Show Hidden Files
2. Look for `.htaccess` in the file list
3. If not there, the file wasn't uploaded

---

## Still Not Working? Check This:

1. ✅ Is `.htaccess` in the **root web directory**? (Not in a subdirectory)
2. ✅ Are you using **Apache** web server? (Not Nginx, IIS, etc.)
3. ✅ Is **mod_rewrite enabled**? (Ask your host)
4. ✅ Is **AllowOverride** set to "All"? (Ask your host)
5. ✅ Did you upload to the **correct directory**? (public_html, www, httpdocs, etc.)

---

## Contact Your Hosting Support

If nothing works, send this to your hosting support:

```
Subject: Enable mod_rewrite and .htaccess for clean URLs

Hello,

I need to enable clean URLs (without .html extension) on my website.

Please confirm:
1. Is mod_rewrite enabled on my account?
2. Are .htaccess files allowed in my web root?
3. Is AllowOverride set to "All" in my Apache configuration?

I've uploaded an .htaccess file but URLs with .html are still showing.

Thank you!
```

---

## Recommended: Switch to Netlify

Seriously, save yourself the hassle:

1. **Free** forever for static sites
2. **Clean URLs** work automatically
3. **CDN** included (fast worldwide)
4. **HTTPS** free and automatic
5. **Continuous deployment** from Git

Upload once, never worry about server config again.

**Deploy now:** https://app.netlify.com/drop

Just drag your folder. Done in 30 seconds.
