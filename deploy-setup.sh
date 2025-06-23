#!/bin/bash

# EC2 Deployment Setup Script for Whole Cyber Human Initiative Website
# Run this script on your EC2 instance after connecting via SSH

echo "🚀 Setting up web server for Whole Cyber Human Initiative..."

# Update system packages
echo "📦 Updating system packages..."
sudo yum update -y

# Install Apache web server
echo "🌐 Installing Apache web server..."
sudo yum install -y httpd

# Install Git
echo "📋 Installing Git..."
sudo yum install -y git

# Start Apache service
echo "▶️ Starting Apache service..."
sudo systemctl start httpd
sudo systemctl enable httpd

# Clone your repository
echo "📥 Cloning website repository..."
cd /var/www/html
sudo git clone https://github.com/SecArt1/Demo_web_app.git temp-repo

# Move files to web root
echo "📁 Moving files to web root..."
sudo mv temp-repo/* .
sudo mv temp-repo/.* . 2>/dev/null || true
sudo rm -rf temp-repo

# Set proper permissions
echo "🔒 Setting file permissions..."
sudo chown -R apache:apache /var/www/html
sudo chmod -R 755 /var/www/html

# Configure Apache for Single Page Application
echo "⚙️ Configuring Apache..."
sudo tee /etc/httpd/conf.d/website.conf > /dev/null <<EOF
<Directory "/var/www/html">
    Options Indexes FollowSymLinks
    AllowOverride All
    Require all granted
    
    # Enable compression
    <IfModule mod_deflate.c>
        AddOutputFilterByType DEFLATE text/plain
        AddOutputFilterByType DEFLATE text/html
        AddOutputFilterByType DEFLATE text/xml
        AddOutputFilterByType DEFLATE text/css
        AddOutputFilterByType DEFLATE application/xml
        AddOutputFilterByType DEFLATE application/xhtml+xml
        AddOutputFilterByType DEFLATE application/rss+xml
        AddOutputFilterByType DEFLATE application/javascript
        AddOutputFilterByType DEFLATE application/x-javascript
    </IfModule>
    
    # Cache static files
    <IfModule mod_expires.c>
        ExpiresActive on
        ExpiresByType text/css "access plus 1 year"
        ExpiresByType application/javascript "access plus 1 year"
        ExpiresByType image/png "access plus 1 year"
        ExpiresByType image/jpg "access plus 1 year"
        ExpiresByType image/jpeg "access plus 1 year"
        ExpiresByType image/gif "access plus 1 year"
        ExpiresByType image/svg+xml "access plus 1 year"
    </IfModule>
</Directory>

# Security headers
Header always set X-Content-Type-Options nosniff
Header always set X-Frame-Options DENY
Header always set X-XSS-Protection "1; mode=block"
Header always set Referrer-Policy "strict-origin-when-cross-origin"
Header always set Content-Security-Policy "default-src 'self' 'unsafe-inline' 'unsafe-eval' https: data:; img-src 'self' https: data:;"
EOF

# Restart Apache to apply changes
echo "🔄 Restarting Apache..."
sudo systemctl restart httpd

# Check Apache status
echo "✅ Checking Apache status..."
sudo systemctl status httpd --no-pager

# Get instance public IP
INSTANCE_IP=$(curl -s http://169.254.169.254/latest/meta-data/public-ipv4)

echo ""
echo "🎉 Deployment Complete!"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "Your website is now live at:"
echo "http://$INSTANCE_IP"
echo ""
echo "To set up SSL (HTTPS), run the SSL setup script next."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
