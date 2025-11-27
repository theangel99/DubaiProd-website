#!/bin/bash

# Dubai Prod - Quick Start Script
# Launches local development server with clean URLs

echo ""
echo "╔════════════════════════════════════════════════════════╗"
echo "║       Dubai Prod - Starting Development Server        ║"
echo "╚════════════════════════════════════════════════════════╝"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null
then
    echo "❌ Node.js is not installed."
    echo ""
    echo "Please install Node.js from: https://nodejs.org/"
    echo "or use Homebrew: brew install node"
    echo ""
    exit 1
fi

# Start the server
echo "Starting server..."
node server.js
