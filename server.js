#!/usr/bin/env node

/**
 * Simple Node.js server with clean URL support
 * Simulates Apache .htaccess behavior for local testing
 *
 * Usage: node server.js
 * Then visit: http://localhost:8080/about (without .html)
 */

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8080;
const ROOT_DIR = __dirname;

// MIME types
const mimeTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.eot': 'application/vnd.ms-fontobject'
};

const server = http.createServer((req, res) => {
  let filePath = req.url;

  // Remove query strings
  filePath = filePath.split('?')[0];

  // Remove trailing slash
  if (filePath.endsWith('/') && filePath !== '/') {
    filePath = filePath.slice(0, -1);
  }

  // Default to index.html for root
  if (filePath === '/' || filePath === '') {
    filePath = '/index.html';
  }

  // Try to add .html if file doesn't exist and doesn't have extension
  let fullPath = path.join(ROOT_DIR, filePath);

  if (!fs.existsSync(fullPath) && !path.extname(filePath)) {
    fullPath = path.join(ROOT_DIR, filePath + '.html');
  }

  // Check if file exists
  fs.access(fullPath, fs.constants.F_OK, (err) => {
    if (err) {
      // 404 - File not found
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end('<h1>404 - Page Not Found</h1><p>The requested page does not exist.</p>');
      console.log(`❌ 404: ${req.url} -> ${fullPath}`);
      return;
    }

    // Determine content type
    const ext = path.extname(fullPath);
    const contentType = mimeTypes[ext] || 'application/octet-stream';

    // Read and serve file
    fs.readFile(fullPath, (err, content) => {
      if (err) {
        res.writeHead(500);
        res.end('Internal Server Error');
        console.error(`❌ Error reading file: ${fullPath}`);
      } else {
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(content);
        console.log(`✅ ${req.url} -> ${fullPath}`);
      }
    });
  });
});

server.listen(PORT, () => {
  console.log(`
╔════════════════════════════════════════════════════════╗
║          Dubai Prod - Local Development Server        ║
╚════════════════════════════════════════════════════════╝

✅ Server running at: http://localhost:${PORT}

📱 Test clean URLs:
   • http://localhost:${PORT}/about
   • http://localhost:${PORT}/contact
   • http://localhost:${PORT}/services/video-production

🛑 Stop server: Press Ctrl+C

Note: This server simulates .htaccess behavior for local testing.
In production, your web server will handle this automatically.

`);
});
