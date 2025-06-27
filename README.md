# Whole Cyber Human Initiative - Professional Website
## 🎯 OverviewThe Whole Cyber Human Initiative is a Service-Disabled Veteran Owned Non-profit organization dedicated to providing minimal to no-cost logical cybersecurity education with true return on investment. This repository contains the complete website built with modern web development practices.**Founded by:** Retired Navy Veteran Paul Cummings, Leah McLean, Chris Foulon, and Alex Rhodes## 🏗️ Project StructureThis project follows a professional-grade structure with clear separation of concerns:```├── 📁 src/                        # Source code and pages│   ├── 📁 pages/                  # Website pages│   │   ├── index.html            # Homepage│   │   ├── courses.html          # Course catalog│   │   └── 📁 courses/           # Individual course pages (16 courses)│   ├── 📁 components/            # Reusable components│   └── 📁 templates/             # Page templates├── 📁 public/                     # Static assets served to users│   └── 📁 assets/                # CSS, JavaScript, images, media├── 📁 config/                     # Configuration files├── 📁 scripts/                    # Build and deployment scripts├── 📁 docs/                       # Project documentation└── 📁 tests/                      # Testing files```See [PROJECT-STRUCTURE.md](docs/PROJECT-STRUCTURE.md) for detailed documentation.## 🚀 Quick Start### Local Development1. **Clone the repository:**   ```bash   git clone [repository-url]   cd whole-cyber-human-initiative   ```2. **Serve locally:**   ```bash   # Using Python   python -m http.server 8000   # or using Node.js   npx http-server src/pages/ -p 8000   ```3. **Open in browser:**   ```   http://localhost:8000   ```### Project Setup1. **Update asset paths** (if needed):   ```powershell   # Run the asset path update script   powershell -ExecutionPolicy Bypass -File "scripts\utilities\update-course-asset-paths.ps1"   ```2. **Build for production:**   ```bash   ./scripts/build/build.sh   ```## 📚 Course CatalogThe website features a comprehensive course catalog with 15+ courses:### 🆓 Free Courses- **Foundation Course**: Understanding IT/Cyber Roles- **OT Cyber Essentials** (OTCE3) - Closed Beta- **Security Engineer Certifications** (60/90/120 day programs)- **Job Interview Mastery** by Ken Underhill### 💼 Coaching Programs  - **CPF Coaching Tracks** 1, 2, and 3 ($2 each)- **Budgeting for Tech Career 101** ($1)### 🎯 Specialty Courses- **AI Generalist Certification** (Membership)- **Community Challenges** ($50 - English & German)### 🏆 Certifications- Whole Cyber Certified Security Engineer- Whole Cyber Certified AI Generalist## 🛠️ Development### File Organization- **Pages**: All HTML pages are in `src/pages/`- **Assets**: CSS, JS, images in `public/assets/`- **Courses**: Individual course pages in `src/pages/courses/`- **Templates**: Reusable templates in `src/templates/`### Asset ReferencesAll asset paths follow the pattern:```html<!-- From src/pages/ --><link rel="stylesheet" href="../../public/assets/css/styles.css"><!-- From src/pages/courses/ --><link rel="stylesheet" href="../../../public/assets/css/styles.css">```### Key Features- ✅ **Responsive Design**: Mobile-first, modern UI- ✅ **Course Filtering**: Filter courses by category- ✅ **Learning Platform**: Integrated course platform template- ✅ **Professional Structure**: Scalable, maintainable codebase- ✅ **Performance Optimized**: Fast loading, optimized assets## 🚢 Deployment### Production Deployment1. **Build the project:**   ```bash   ./scripts/build/build.sh   ```2. **Deploy to server:**   ```bash   ./scripts/deployment/update-website.sh   ```3. **Configure SSL:**   ```bash   ./scripts/deployment/ssl-setup.sh   ```### Server Configuration- **Apache**: Use `config/deployment/apache.conf`- **SSL**: Automated with Let's Encrypt- **Permissions**: Set correct `www-data` permissionsSee [DEPLOYMENT.md](docs/deployment/DEPLOYMENT.md) for detailed deployment instructions.## 🧪 Testing### Manual Testing- Cross-browser compatibility- Mobile responsiveness  - Course navigation flow- Asset loading verification

### Automated Testing (Planned)
```bash
npm run test           # Run all tests
npm run test:unit      # Unit tests
npm run test:e2e       # End-to-end tests
```

## 📋 Course Management

### Adding New Courses

1. **Create course info page:**
   ```bash
   cp src/templates/course-info-template.html src/pages/courses/new-course.html
   ```

2. **Update course catalog:**
   - Add course card to `src/pages/courses.html`
   - Update course configuration

3. **Create learning platform:**
   ```bash
   cp src/templates/course-platform.html src/pages/courses/new-course-platform.html
   ```

### Course Platform Features

- 📹 **Video Integration**: Support for video lessons
- 📊 **Slide Presentations**: PowerPoint/PDF slide viewer  
- 📝 **Progress Tracking**: Lesson completion tracking
- 💬 **Discussion**: Course discussion integration
- 📚 **Resources**: Downloadable resources and materials
- 🏆 **Certificates**: Course completion certificates

## 🤝 Contributing

### Development Guidelines

1. **Follow the project structure** outlined in `docs/PROJECT-STRUCTURE.md`
2. **Update asset paths** when moving files
3. **Test across browsers** and devices
4. **Document changes** in comments and documentation
5. **Maintain accessibility** standards

### Code Style

- **HTML**: Semantic, valid HTML5
- **CSS**: BEM methodology, mobile-first
- **JavaScript**: Modern ES6+, commented
- **Files**: kebab-case naming convention

## 🔧 Maintenance

### Regular Tasks

- **Update dependencies** monthly
- **Security audits** quarterly
- **Performance monitoring** ongoing
- **Content updates** as needed
- **Backup procedures** automated

### Monitoring

- **Website uptime**: Monitor server availability
- **Performance**: Page load speeds, Core Web Vitals
- **Security**: SSL certificates, vulnerability scans
- **Analytics**: Course enrollment, user engagement

## 📊 Project Statistics

- **Total Pages**: 20+ HTML pages
- **Course Pages**: 16 individual course pages
- **Assets Organized**: CSS, JS, Images in `/public/assets/`
- **Professional Structure**: ✅ Complete
- **Mobile Responsive**: ✅ Fully responsive
- **Performance Optimized**: ✅ Fast loading

## 📞 Support & Contact

- **Website**: [wholecyberhumaninitiative.org](https://wholecyberhumaninitiative.org)
- **Email**: courses@wholecyberhumaninitiative.org
- **Discord**: Join our learning community
- **LinkedIn**: Follow for updates

## 📄 License

This project is licensed under the terms specified in the [LICENSE](LICENSE) file.

## 🙏 Acknowledgments

- **Paul Cummings** - Founder, Course Instructor
- **Ken Underhill** - Job Interview Course Instructor  
- **Gregor Lyttek** - German Community Challenge Instructor
- **Development Team** - Website design and implementation
- **Community** - Beta testers and feedback providers

---

**Built with ❤️ for the cybersecurity community**

*A Service-Disabled Veteran Owned Non-profit Organization*
