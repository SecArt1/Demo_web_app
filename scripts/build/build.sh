#!/bin/bash

# Build script for Whole Cyber Human Initiative
# This script prepares the project for production deployment

echo "🚀 Starting build process for Whole Cyber Human Initiative..."

# Create build directory
mkdir -p temp/builds/$(date +%Y%m%d-%H%M%S)
BUILD_DIR="temp/builds/$(date +%Y%m%d-%H%M%S)"

echo "📁 Build directory: $BUILD_DIR"

# Copy source files to build directory
echo "📋 Copying source files..."
cp -r src/ "$BUILD_DIR/"
cp -r public/ "$BUILD_DIR/"
cp -r docs/ "$BUILD_DIR/"
cp README.md "$BUILD_DIR/"
cp LICENSE "$BUILD_DIR/"

# Minify CSS (if minifier is available)
if command -v cleancss &> /dev/null; then
    echo "🎨 Minifying CSS..."
    cleancss -o "$BUILD_DIR/public/assets/css/styles.min.css" "$BUILD_DIR/public/assets/css/styles.css"
fi

# Minify JavaScript (if minifier is available)
if command -v uglifyjs &> /dev/null; then
    echo "📦 Minifying JavaScript..."
    uglifyjs "$BUILD_DIR/public/assets/js/main.js" -o "$BUILD_DIR/public/assets/js/main.min.js"
    uglifyjs "$BUILD_DIR/public/assets/js/course-config.js" -o "$BUILD_DIR/public/assets/js/course-config.min.js"
fi

# Optimize images (if imageoptim is available)
if command -v imageoptim &> /dev/null; then
    echo "🖼️ Optimizing images..."
    imageoptim "$BUILD_DIR/public/assets/images/"
fi

# Generate sitemap
echo "🗺️ Generating sitemap..."
cat > "$BUILD_DIR/public/sitemap.xml" << EOF
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>https://wholecyberhumaninitiative.org/</loc>
        <lastmod>$(date +%Y-%m-%d)</lastmod>
        <changefreq>weekly</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://wholecyberhumaninitiative.org/courses.html</loc>
        <lastmod>$(date +%Y-%m-%d)</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.9</priority>
    </url>
</urlset>
EOF

# Generate robots.txt
echo "🤖 Generating robots.txt..."
cat > "$BUILD_DIR/public/robots.txt" << EOF
User-agent: *
Allow: /
Sitemap: https://wholecyberhumaninitiative.org/sitemap.xml
EOF

echo "✅ Build completed successfully!"
echo "📦 Build artifacts location: $BUILD_DIR"
echo ""
echo "🚀 Ready for deployment!"
echo "   - Upload contents of $BUILD_DIR/public/ to your web server"
echo "   - Ensure proper permissions are set"
echo "   - Test the deployment"
