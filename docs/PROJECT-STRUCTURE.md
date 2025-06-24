# Whole Cyber Human Initiative - Professional Project Structure

## 🎯 Overview
This document outlines the professional-grade project structure for the Whole Cyber Human Initiative website. The structure follows modern web development best practices with clear separation of concerns, scalability, and maintainability.

## 🏗️ Directory Structure

```
whole-cyber-human-initiative/
├── .git/                          # Git version control
├── .gitignore                     # Git ignore patterns
├── README.md                      # Project overview and setup
├── LICENSE                        # Project license
├── info.txt                       # Project information
│
├── 📁 src/                        # Source code and development files
│   ├── 📁 pages/                  # Main application pages
│   │   ├── index.html            # Homepage
│   │   ├── courses.html          # Course catalog page
│   │   ├── 📁 courses/           # Individual course pages
│   │   │   ├── ai-generalist.html
│   │   │   ├── ot-cyber-essentials.html
│   │   │   ├── ot-cyber-platform.html
│   │   │   ├── security-engineer-60-day.html
│   │   │   ├── security-engineer-90-day.html
│   │   │   ├── security-engineer-120-day.html
│   │   │   ├── whole-cyber-certified-security-engineer.html
│   │   │   ├── community-challenge.html
│   │   │   ├── cpf-coaching-track-1.html
│   │   │   ├── cpf-coaching-track-2.html
│   │   │   ├── cpf-coaching-track-3.html
│   │   │   ├── job-interviews.html
│   │   │   ├── budgeting-for-tech-career.html
│   │   │   ├── understanding-it-cyber-roles.html
│   │   │   ├── breaking-into-cybersecurity.html
│   │   │   └── breaking-into-cybersecurity-leadership.html
│   │   └── 📁 platforms/         # Learning platform pages
│   │       └── (Future platform pages)
│   ├── 📁 components/            # Reusable HTML components
│   │   ├── header.html
│   │   ├── footer.html
│   │   ├── navigation.html
│   │   └── course-card.html
│   └── 📁 templates/             # Page templates
│       └── course-platform.html # Learning platform template
│
├── 📁 public/                     # Static assets served to users
│   └── 📁 assets/                # All static assets
│       ├── 📁 css/               # Stylesheets
│       │   └── styles.css        # Main stylesheet
│       ├── 📁 js/                # JavaScript files
│       │   ├── main.js          # Main JavaScript
│       │   └── course-config.js # Course configuration
│       ├── 📁 images/            # Images and graphics
│       │   ├── image.png        # Main logo
│       │   ├── favicon.ico      # Website favicon
│       │   └── (other images)
│       └── 📁 media/             # Video and audio files
│           ├── 📁 videos/        # Course videos
│           ├── 📁 audio/         # Audio content
│           └── 📁 documents/     # PDFs and other documents
│
├── 📁 config/                     # Configuration files
│   ├── 📁 environments/          # Environment-specific configs
│   │   ├── development.json     # Development environment
│   │   ├── staging.json         # Staging environment
│   │   └── production.json      # Production environment
│   └── 📁 deployment/            # Deployment configurations
│       ├── apache.conf          # Apache configuration
│       ├── nginx.conf           # Nginx configuration
│       └── ssl.conf             # SSL configuration
│
├── 📁 scripts/                    # Automation scripts
│   ├── 📁 build/                 # Build scripts
│   │   ├── minify-css.js        # CSS minification
│   │   ├── minify-js.js         # JavaScript minification
│   │   └── optimize-images.js   # Image optimization
│   ├── 📁 deployment/            # Deployment scripts
│   │   ├── deploy-setup.sh      # Initial deployment setup
│   │   ├── ssl-setup.sh         # SSL certificate setup
│   │   └── update-website.sh    # Website update script
│   └── 📁 utilities/             # Utility scripts
│       ├── generate-sitemap.js  # Sitemap generation
│       ├── validate-html.js     # HTML validation
│       └── course-generator.py  # Course page generation
│
├── 📁 tests/                      # Test files
│   ├── 📁 unit/                  # Unit tests
│   │   ├── 📁 js/                # JavaScript unit tests
│   │   └── 📁 css/               # CSS unit tests
│   ├── 📁 integration/           # Integration tests
│   │   ├── 📁 pages/             # Page integration tests
│   │   └── 📁 components/        # Component integration tests
│   └── 📁 e2e/                   # End-to-end tests
│       ├── 📁 user-flows/        # User flow tests
│       └── 📁 cross-browser/     # Cross-browser tests
│
├── 📁 docs/                       # Documentation
│   ├── PROJECT-STRUCTURE.md     # This file - project structure
│   ├── 📁 architecture/          # Architecture documentation
│   │   ├── overview.md          # System overview
│   │   ├── components.md        # Component architecture
│   │   └── data-flow.md         # Data flow diagrams
│   ├── 📁 deployment/            # Deployment documentation
│   │   └── DEPLOYMENT.md        # Deployment guide
│   ├── 📁 api/                   # API documentation
│   │   ├── endpoints.md         # API endpoints
│   │   └── authentication.md    # Authentication guide
│   └── 📁 user/                  # User documentation
│       ├── course-management.md # Course management guide
│       └── platform-usage.md    # Platform usage guide
│
└── 📁 temp/                       # Temporary files (gitignored)
    ├── 📁 builds/                # Temporary build files
    ├── 📁 logs/                  # Application logs
    └── 📁 cache/                 # Cache files
```

## 🎯 Key Principles

### 1. Separation of Concerns
- **src/**: Source code and development files
- **public/**: Static assets served to users  
- **config/**: Configuration files
- **scripts/**: Automation and build scripts
- **tests/**: All testing files
- **docs/**: Documentation

### 2. Scalability
- Modular component structure
- Reusable templates
- Environment-specific configurations
- Automated build and deployment processes

### 3. Maintainability  
- Clear naming conventions
- Logical file organization
- Comprehensive documentation
- Version control best practices

### 4. Performance
- Optimized asset organization
- Minification and compression scripts
- CDN-ready structure
- Efficient caching strategies

## 📁 Asset Organization

### CSS Architecture
```
public/assets/css/
├── styles.css          # Main stylesheet (all styles combined)
├── components/         # Component-specific styles
│   ├── header.css
│   ├── footer.css
│   ├── navigation.css
│   ├── course-card.css
│   └── course-platform.css
├── pages/             # Page-specific styles
│   ├── home.css
│   ├── courses.css
│   └── course-info.css
└── utilities/         # Utility classes
    ├── responsive.css
    ├── animations.css
    └── helpers.css
```

### JavaScript Architecture
```
public/assets/js/
├── main.js            # Main application JavaScript
├── course-config.js   # Course configuration data
├── components/        # Component-specific JavaScript
│   ├── navigation.js
│   ├── course-filter.js
│   ├── course-platform.js
│   └── modal.js
├── pages/            # Page-specific JavaScript
│   ├── home.js
│   ├── courses.js
│   └── course-info.js
└── utils/            # Utility functions
    ├── helpers.js
    ├── api.js
    └── validation.js
```

## 🔧 Development Workflow

### 1. Local Development
```bash
# Serve files locally (using Python or Node.js)
python -m http.server 8000
# or
npx http-server public/

# Watch for file changes (if build system implemented)
npm run watch

# Build for production
npm run build
```

### 2. Testing
```bash
# Run all tests
npm run test

# Run specific test suites
npm run test:unit
npm run test:integration
npm run test:e2e

# Validate HTML
npm run validate:html

# Check accessibility
npm run a11y:check
```

### 3. Deployment
```bash
# Deploy to staging
npm run deploy:staging

# Deploy to production  
npm run deploy:production

# Quick update using existing script
./scripts/deployment/update-website.sh
```

## ⚙️ Configuration Management

### Environment Files
- `config/environments/development.json`: Development settings
- `config/environments/staging.json`: Staging environment settings  
- `config/environments/production.json`: Production environment settings

### Course Configuration
- `public/assets/js/course-config.js`: Client-side course configuration and metadata

## 🔗 Asset Path References

### In HTML Files (Updated Paths)
```html
<!-- CSS -->
<link rel="stylesheet" href="../../public/assets/css/styles.css">
<!-- From src/pages/ files -->

<link rel="stylesheet" href="../../../public/assets/css/styles.css">  
<!-- From src/pages/courses/ files -->

<!-- JavaScript -->
<script src="../../public/assets/js/main.js"></script>
<!-- From src/pages/ files -->

<script src="../../../public/assets/js/main.js"></script>
<!-- From src/pages/courses/ files -->

<!-- Images -->
<img src="../../public/assets/images/image.png" alt="Logo">
<!-- From src/pages/ files -->

<img src="../../../public/assets/images/image.png" alt="Logo">
<!-- From src/pages/courses/ files -->
```

### In CSS Files
```css
/* Images from CSS */
background-image: url('/public/assets/images/backgrounds/hero.jpg');

/* Icons */
.icon::before {
  content: url('/public/assets/images/icons/arrow.svg');
}
```

## 🚀 Build Process

### 1. CSS Processing
- Compile SCSS/SASS (if implemented)
- Concatenate CSS files
- Minify CSS for production
- Generate source maps for debugging

### 2. JavaScript Processing  
- Transpile ES6+ (if needed)
- Concatenate JavaScript files
- Minify JavaScript for production
- Generate source maps

### 3. Image Optimization
- Compress images without quality loss
- Generate responsive image variants
- Convert to modern formats (WebP, AVIF)

### 4. HTML Processing
- Minify HTML for production
- Inline critical CSS above the fold
- Optimize loading performance

## 🔒 Security Considerations

### 1. File Structure Security
- Sensitive configuration files outside public directory
- Proper .gitignore configuration to exclude secrets
- Environment variables for sensitive data

### 2. Asset Security
- Content Security Policy (CSP) headers
- Subresource Integrity (SRI) for external resources
- Secure HTTPS serving of all assets

## 🛠️ Maintenance Guidelines

### 1. Regular Tasks
- Update dependencies monthly
- Run security audits quarterly  
- Monitor performance metrics
- Implement automated backup procedures

### 2. Code Quality
- Consistent naming conventions (kebab-case for files)
- Regular code reviews for all changes
- Automated testing for critical functionality
- Keep documentation up to date

## 🔄 Migration Status

### ✅ Completed Migrations
1. ✅ Moved HTML files from root to `src/pages/`
2. ✅ Moved course pages to `src/pages/courses/`  
3. ✅ Moved assets from `assets/` to `public/assets/`
4. ✅ Moved deployment scripts to `scripts/deployment/`
5. ✅ Moved documentation to `docs/deployment/`
6. ✅ Created professional directory structure

### 🔄 Next Steps Required
1. 🔄 Update asset references in all HTML files
2. 🔄 Update CSS file paths in HTML files
3. 🔄 Update JavaScript file paths in HTML files  
4. 🔄 Update image paths in HTML and CSS files
5. 🔄 Create build automation scripts
6. 🔄 Implement testing framework
7. 🔄 Add performance monitoring
8. 🔄 Create deployment automation

### 📋 Path Update Requirements

**Files needing path updates:**
- `src/pages/index.html` - Update all asset paths
- `src/pages/courses.html` - Update all asset paths  
- All files in `src/pages/courses/` - Update all asset paths
- `src/templates/course-platform.html` - Update all asset paths

**Path Changes:**
- CSS: `assets/css/` → `public/assets/css/`
- JS: `assets/js/` → `public/assets/js/`  
- Images: `assets/photos/` → `public/assets/images/`

## 📊 Project Statistics

### Current Structure
- **Total Pages**: 20+ HTML files
- **Course Pages**: 16 individual course info pages
- **Assets**: CSS, JavaScript, Images organized in public/
- **Scripts**: Deployment and utility scripts organized
- **Documentation**: Comprehensive docs structure

### File Organization Benefits
- ✅ Clean separation of concerns
- ✅ Scalable architecture
- ✅ Professional development structure  
- ✅ Easy maintenance and updates
- ✅ Clear documentation and guidelines

This professional structure provides a solid foundation for the Whole Cyber Human Initiative website, ensuring scalability, maintainability, and following industry best practices for web development projects.
