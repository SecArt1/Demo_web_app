#!/bin/bash

# Website Update Script
# Run this script to update your website with the latest changes from GitHub

echo "🔄 Updating Whole Cyber Human Initiative website..."

# Navigate to web root
cd /var/www/html

# Backup current files
echo "💾 Creating backup..."
sudo mkdir -p /var/backups/website
sudo cp -r /var/www/html/* /var/backups/website/ 2>/dev/null || true
echo "Backup created in /var/backups/website/"

# Pull latest changes from GitHub
echo "📥 Pulling latest changes from GitHub..."
sudo git pull origin main

# Set proper permissions
echo "🔒 Setting file permissions..."
sudo chown -R apache:apache /var/www/html
sudo chmod -R 755 /var/www/html

# Clear Apache cache
echo "🧹 Clearing web server cache..."
sudo systemctl reload httpd

# Get instance IP or domain
if command -v dig > /dev/null; then
    DOMAIN=$(dig +short -x $(curl -s http://169.254.169.254/latest/meta-data/public-ipv4) | sed 's/\.$//')
fi

if [ -z "$DOMAIN" ]; then
    INSTANCE_IP=$(curl -s http://169.254.169.254/latest/meta-data/public-ipv4)
    WEBSITE_URL="http://$INSTANCE_IP"
else
    WEBSITE_URL="https://$DOMAIN"
fi

echo ""
echo "✅ Website updated successfully!"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "Your updated website is live at:"
echo "$WEBSITE_URL"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
