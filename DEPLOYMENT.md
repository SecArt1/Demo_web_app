# EC2 Deployment Guide - Whole Cyber Human Initiative

## 🚀 Complete Deployment Instructions

### Prerequisites
- AWS Account with EC2 access
- Basic knowledge of SSH and command line
- Optional: Domain name for HTTPS setup

---

## Step 1: Launch EC2 Instance

1. **Go to AWS Console** → EC2 → Launch Instance
2. **Choose AMI:** Amazon Linux 2 AMI (HVM)
3. **Instance Type:** t2.micro (free tier eligible)
4. **Configure Security Group:**
   - SSH (port 22) - Your IP only
   - HTTP (port 80) - Anywhere (0.0.0.0/0)
   - HTTPS (port 443) - Anywhere (0.0.0.0/0)
5. **Key Pair:** Download and save your .pem file securely
6. **Launch Instance**

---

## Step 2: Connect to EC2 Instance

### Windows (PowerShell/Command Prompt):
```bash
ssh -i "your-key.pem" ec2-user@your-ec2-public-ip
```

### Alternative: Use AWS Systems Manager Session Manager (no SSH key needed)

---

## Step 3: Deploy Website

Once connected to your EC2 instance, run these commands:

```bash
# Download the deployment script
curl -O https://raw.githubusercontent.com/SecArt1/Demo_web_app/main/deploy-setup.sh

# Make it executable
chmod +x deploy-setup.sh

# Run the deployment script
sudo ./deploy-setup.sh
```

**The script will automatically:**
- Update system packages
- Install Apache web server
- Install Git
- Clone your website repository
- Configure Apache with optimization settings
- Set proper file permissions
- Start the web server

---

## Step 4: Access Your Website

After deployment completes, your website will be available at:
```
http://YOUR-EC2-PUBLIC-IP
```

Find your EC2 public IP in the AWS Console under EC2 → Instances.

---

## Step 5: Optional - Set Up Custom Domain & HTTPS

### A. Point Domain to EC2
1. In your domain registrar, create an A record:
   - Name: @ (or your subdomain)
   - Value: Your EC2 public IP
   - TTL: 300

### B. Set Up SSL Certificate
```bash
# Download SSL setup script
curl -O https://raw.githubusercontent.com/SecArt1/Demo_web_app/main/ssl-setup.sh

# Make it executable
chmod +x ssl-setup.sh

# Run SSL setup (will prompt for domain name)
sudo ./ssl-setup.sh
```

---

## Step 6: Update Website (Future Changes)

When you make changes to your website:

```bash
# Download update script
curl -O https://raw.githubusercontent.com/SecArt1/Demo_web_app/main/update-website.sh

# Make it executable
chmod +x update-website.sh

# Run update
sudo ./update-website.sh
```

---

## 🔧 Troubleshooting

### Website Not Loading
```bash
# Check Apache status
sudo systemctl status httpd

# Check Apache error logs
sudo tail -f /var/log/httpd/error_log

# Restart Apache
sudo systemctl restart httpd
```

### Permission Issues
```bash
# Fix file permissions
sudo chown -R apache:apache /var/www/html
sudo chmod -R 755 /var/www/html
```

### Firewall Issues
```bash
# Check if port 80 is open
sudo netstat -tlnp | grep :80

# Allow HTTP traffic (if needed)
sudo firewall-cmd --permanent --add-service=http
sudo firewall-cmd --reload
```

---

## 📊 Performance Optimization

The deployment script includes:
- **Gzip Compression** for faster loading
- **Browser Caching** for static files
- **Security Headers** for protection
- **Optimized Apache Configuration**

---

## 🔒 Security Best Practices

1. **Keep System Updated:**
   ```bash
   sudo yum update -y
   ```

2. **Monitor Logs:**
   ```bash
   sudo tail -f /var/log/httpd/access_log
   ```

3. **Regular Backups:**
   - Website files are backed up in `/var/backups/website/`
   - Consider setting up automated S3 backups

---

## 📈 Monitoring

### Basic Monitoring Commands:
```bash
# Check disk usage
df -h

# Check memory usage
free -m

# Check CPU usage
top

# Check Apache processes
ps aux | grep httpd
```

---

## 🎉 Your Website is Live!

After completing these steps, your Whole Cyber Human Initiative website will be:
- ✅ Live on the internet
- ✅ Optimized for performance
- ✅ Secured with proper headers
- ✅ Ready for SSL/HTTPS (if domain configured)
- ✅ Easy to update with future changes

**Need help?** Check the troubleshooting section or review AWS documentation.
