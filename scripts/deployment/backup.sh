#!/bin/bash

# Backup script for Whole Cyber Human Initiative
# This script creates backups of the website and database

echo "💾 Starting backup process..."

# Configuration
BACKUP_DIR="/var/backups/whole-cyber"
DATE=$(date +%Y%m%d-%H%M%S)
SITE_DIR="/var/www/whole-cyber-human-initiative"

# Create backup directory
mkdir -p "$BACKUP_DIR"

echo "📦 Creating backup: backup-$DATE.tar.gz"

# Create compressed backup
tar -czf "$BACKUP_DIR/backup-$DATE.tar.gz" \
    -C "$SITE_DIR" \
    public/ \
    --exclude='*.log' \
    --exclude='temp/' \
    --exclude='.git/'

# Keep only last 30 backups
echo "🧹 Cleaning up old backups..."
cd "$BACKUP_DIR"
ls -t backup-*.tar.gz | tail -n +31 | xargs rm -f

echo "✅ Backup completed successfully!"
echo "📁 Backup location: $BACKUP_DIR/backup-$DATE.tar.gz"

# Display backup size
BACKUP_SIZE=$(du -h "$BACKUP_DIR/backup-$DATE.tar.gz" | cut -f1)
echo "📊 Backup size: $BACKUP_SIZE"
