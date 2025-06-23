#!/bin/bash

# SSL Setup Script for HTTPS
# Run this after the main deployment script
# Make sure you have a domain name pointed to your EC2 instance

echo "🔒 Setting up SSL/HTTPS for your website..."

# Prompt for domain name
read -p "Enter your domain name (e.g., wholecyber.com): " DOMAIN_NAME

if [ -z "$DOMAIN_NAME" ]; then
    echo "❌ Domain name is required for SSL setup"
    exit 1
fi

# Install Certbot for Let's Encrypt SSL
echo "📦 Installing Certbot..."
sudo yum install -y certbot python3-certbot-apache

# Install mod_ssl for Apache
sudo yum install -y mod_ssl

# Get SSL certificate
echo "🛡️ Obtaining SSL certificate..."
sudo certbot --apache -d $DOMAIN_NAME -d www.$DOMAIN_NAME --non-interactive --agree-tos --email admin@$DOMAIN_NAME

# Set up automatic renewal
echo "⏰ Setting up automatic SSL renewal..."
sudo crontab -l 2>/dev/null | { cat; echo "0 12 * * * /usr/bin/certbot renew --quiet"; } | sudo crontab -

# Configure HTTPS redirect
sudo tee -a /etc/httpd/conf.d/website.conf > /dev/null <<EOF

# Force HTTPS redirect
<VirtualHost *:80>
    ServerName $DOMAIN_NAME
    ServerAlias www.$DOMAIN_NAME
    Redirect permanent / https://$DOMAIN_NAME/
</VirtualHost>
EOF

# Restart Apache
sudo systemctl restart httpd

echo ""
echo "🎉 SSL Setup Complete!"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "Your website is now available with HTTPS:"
echo "https://$DOMAIN_NAME"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
