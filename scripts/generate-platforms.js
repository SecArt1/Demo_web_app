#!/usr/bin/env node

// Script to generate platform templates for all courses
const fs = require('fs');
const path = require('path');

const courses = [
    {
        filename: 'breaking-into-cybersecurity-platform.html',
        title: 'Breaking into Cybersecurity',
        instructor: 'Christophe Foulon',
        duration: '6 hours',
        lessons: 15,
        modules: [
            {
                title: 'Getting Started',
                lessons: [
                    { title: 'Introduction to Cybersecurity', type: 'video', duration: '20 min' },
                    { title: 'Career Paths Overview', type: 'slides', duration: '25 min' },
                    { title: 'Skills Assessment', type: 'video', duration: '15 min' }
                ]
            },
            {
                title: 'Building Your Foundation',
                lessons: [
                    { title: 'Networking Fundamentals', type: 'video', duration: '35 min' },
                    { title: 'Security Principles', type: 'slides', duration: '30 min' },
                    { title: 'Risk Management Basics', type: 'video', duration: '25 min' }
                ]
            },
            {
                title: 'Hands-On Practice',
                lessons: [
                    { title: 'Lab Setup', type: 'video', duration: '20 min' },
                    { title: 'Security Tools Introduction', type: 'video', duration: '40 min' },
                    { title: 'Practical Exercises', type: 'video', duration: '45 min' }
                ]
            }
        ]
    },
    {
        filename: 'security-engineer-120-day-platform.html',
        title: 'Security Engineer 120-Day Track',
        instructor: 'Paul Cummings',
        duration: '120 days',
        lessons: 48,
        modules: [
            {
                title: 'Foundation (Days 1-30)',
                lessons: [
                    { title: 'Security Engineering Overview', type: 'video', duration: '30 min' },
                    { title: 'Infrastructure Security', type: 'slides', duration: '45 min' },
                    { title: 'Network Security Design', type: 'video', duration: '40 min' }
                ]
            },
            {
                title: 'Intermediate (Days 31-60)',
                lessons: [
                    { title: 'Application Security', type: 'video', duration: '50 min' },
                    { title: 'Cloud Security Architecture', type: 'slides', duration: '60 min' },
                    { title: 'DevSecOps Practices', type: 'video', duration: '45 min' }
                ]
            },
            {
                title: 'Advanced (Days 61-90)',
                lessons: [
                    { title: 'Security Automation', type: 'video', duration: '55 min' },
                    { title: 'Threat Modeling', type: 'slides', duration: '40 min' },
                    { title: 'Incident Response Planning', type: 'video', duration: '50 min' }
                ]
            },
            {
                title: 'Mastery (Days 91-120)',
                lessons: [
                    { title: 'Advanced Threat Detection', type: 'video', duration: '60 min' },
                    { title: 'Security Metrics and KPIs', type: 'slides', duration: '35 min' },
                    { title: 'Capstone Project', type: 'video', duration: '90 min' }
                ]
            }
        ]
    },
    {
        filename: 'ai-generalist-platform.html',
        title: 'AI Generalist Track',
        instructor: 'Alex Rhodes',
        duration: '8 hours',
        lessons: 20,
        modules: [
            {
                title: 'AI Fundamentals',
                lessons: [
                    { title: 'Introduction to AI in Cybersecurity', type: 'video', duration: '25 min' },
                    { title: 'Machine Learning Basics', type: 'slides', duration: '30 min' },
                    { title: 'AI Ethics and Security', type: 'video', duration: '20 min' }
                ]
            },
            {
                title: 'AI Applications',
                lessons: [
                    { title: 'Threat Detection with AI', type: 'video', duration: '35 min' },
                    { title: 'Automated Response Systems', type: 'slides', duration: '40 min' },
                    { title: 'AI in Incident Response', type: 'video', duration: '30 min' }
                ]
            },
            {
                title: 'Practical Implementation',
                lessons: [
                    { title: 'Setting Up AI Tools', type: 'video', duration: '45 min' },
                    { title: 'Real-world Case Studies', type: 'slides', duration: '35 min' },
                    { title: 'Building Your AI Toolkit', type: 'video', duration: '50 min' }
                ]
            }
        ]
    }
];

function generatePlatformTemplate(course) {
    const lessonsHtml = course.modules.map((module, moduleIndex) => {
        const moduleLessons = module.lessons.map((lesson, lessonIndex) => {
            const globalLessonIndex = course.modules.slice(0, moduleIndex).reduce((acc, m) => acc + m.lessons.length, 0) + lessonIndex;
            return `
                        <li class="lesson-item">
                            <a href="#" class="lesson-link${globalLessonIndex === 0 ? ' active' : ''}" data-lesson="${globalLessonIndex}">
                                <div class="lesson-icon">
                                    <i class="fas fa-${lesson.type === 'video' ? 'play' : 'file-powerpoint'}"></i>
                                </div>
                                <div class="lesson-content">
                                    <div class="lesson-title">${lesson.title}</div>
                                    <div class="lesson-duration">${lesson.duration}</div>
                                </div>
                                <div class="lesson-status">
                                    <i class="fas fa-circle" style="font-size: 0.5rem; opacity: 0.3;"></i>
                                </div>
                            </a>
                        </li>`;
        }).join('');

        return `
                <li class="module-item">
                    <div class="module-header${moduleIndex === 0 ? ' active' : ''}" data-module="${moduleIndex}">
                        ${module.title}
                        <i class="fas fa-chevron-down module-toggle"></i>
                    </div>
                    <ul class="lessons-list"${moduleIndex === 0 ? '' : ' style="display: none;"'}>
                        ${moduleLessons}
                    </ul>
                </li>`;
    }).join('');

    const firstLesson = course.modules[0]?.lessons[0];

    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${course.title} - Learning Platform</title>
    
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    
    <!-- Icons -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    
    <!-- Main Stylesheet -->
    <link rel="stylesheet" href="../../../public/assets/css/styles.css">
    
    <!-- Learning Platform Styles -->
    <style>
        :root {
            --sidebar-width: 320px;
            --header-height: 70px;
            --primary-blue: #2886c8;
            --light-blue: #6db6fe;
            --dark-blue: #053994;
            --accent-pink: #ff0099;
            --text-dark: #1f2937;
            --text-light: #6b7280;
            --bg-light: #f8fafc;
            --white: #ffffff;
            --border-light: #e5e7eb;
            --success-green: #10b981;
            --warning-orange: #f59e0b;
        }

        body {
            font-family: 'Inter', sans-serif;
            background: var(--bg-light);
            margin: 0;
            overflow-x: hidden;
        }

        /* Platform Header */
        .platform-header {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            height: var(--header-height);
            background: var(--white);
            border-bottom: 1px solid var(--border-light);
            z-index: 1000;
            display: flex;
            align-items: center;
            padding: 0 2rem;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .platform-logo {
            display: flex;
            align-items: center;
            gap: 1rem;
            margin-right: 2rem;
        }

        .platform-logo img {
            height: 40px;
        }

        .course-title-header {
            flex: 1;
            font-size: 1.1rem;
            font-weight: 600;
            color: var(--text-dark);
        }

        .header-actions {
            display: flex;
            align-items: center;
            gap: 1rem;
        }

        .progress-indicator {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            color: var(--text-light);
            font-size: 0.9rem;
        }

        .progress-bar {
            width: 100px;
            height: 6px;
            background: var(--border-light);
            border-radius: 3px;
            overflow: hidden;
        }

        .progress-fill {
            height: 100%;
            background: var(--success-green);
            transition: width 0.3s ease;
        }

        /* Sidebar */
        .course-sidebar {
            position: fixed;
            top: var(--header-height);
            left: 0;
            width: var(--sidebar-width);
            height: calc(100vh - var(--header-height));
            background: var(--white);
            border-right: 1px solid var(--border-light);
            overflow-y: auto;
            z-index: 100;
        }

        .sidebar-content {
            padding: 1.5rem;
        }

        .course-info {
            margin-bottom: 2rem;
        }

        .course-info h3 {
            font-size: 1.2rem;
            font-weight: 600;
            color: var(--text-dark);
            margin-bottom: 0.5rem;
        }

        .course-meta {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            font-size: 0.9rem;
            color: var(--text-light);
        }

        .course-meta span {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        /* Module Navigation */
        .modules-list {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .module-item {
            margin-bottom: 1rem;
        }

        .module-header {
            padding: 1rem;
            background: var(--bg-light);
            border-radius: 8px;
            font-weight: 600;
            color: var(--text-dark);
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            align-items: center;
            transition: all 0.3s ease;
        }

        .module-header:hover {
            background: var(--primary-blue);
            color: var(--white);
        }

        .module-header.active {
            background: var(--primary-blue);
            color: var(--white);
        }

        .module-toggle {
            margin-left: auto;
            transition: transform 0.3s ease;
        }

        .module-header.active .module-toggle {
            transform: rotate(180deg);
        }

        .lessons-list {
            padding: 0;
            margin: 0.5rem 0 0 0;
            list-style: none;
            background: var(--white);
            border-radius: 8px;
            border: 1px solid var(--border-light);
            overflow: hidden;
        }

        .lesson-item {
            border-bottom: 1px solid var(--border-light);
        }

        .lesson-item:last-child {
            border-bottom: none;
        }

        .lesson-link {
            display: flex;
            align-items: center;
            padding: 1rem;
            text-decoration: none;
            color: var(--text-dark);
            transition: all 0.3s ease;
            gap: 1rem;
        }

        .lesson-link:hover {
            background: var(--bg-light);
            color: var(--primary-blue);
        }

        .lesson-link.active {
            background: var(--primary-blue);
            color: var(--white);
        }

        .lesson-link.completed {
            color: var(--success-green);
        }

        .lesson-icon {
            width: 20px;
            text-align: center;
        }

        .lesson-content {
            flex: 1;
        }

        .lesson-title {
            font-weight: 500;
            margin-bottom: 0.25rem;
        }

        .lesson-duration {
            font-size: 0.8rem;
            color: var(--text-light);
        }

        .lesson-status {
            margin-left: auto;
        }

        /* Main Content Area */
        .main-content {
            margin-left: var(--sidebar-width);
            margin-top: var(--header-height);
            padding: 2rem;
            min-height: calc(100vh - var(--header-height));
        }

        .content-container {
            max-width: 1200px;
            margin: 0 auto;
        }

        /* Video Player Container */
        .video-container {
            background: var(--white);
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
            margin-bottom: 2rem;
            overflow: hidden;
        }

        .video-player {
            width: 100%;
            aspect-ratio: 16/9;
            background: #000;
        }

        .video-controls {
            padding: 1rem;
            background: var(--white);
            border-top: 1px solid var(--border-light);
        }

        .video-title {
            font-size: 1.5rem;
            font-weight: 600;
            color: var(--text-dark);
            margin-bottom: 0.5rem;
        }

        .video-meta {
            display: flex;
            gap: 2rem;
            font-size: 0.9rem;
            color: var(--text-light);
            margin-bottom: 1rem;
        }

        .video-actions {
            display: flex;
            gap: 1rem;
        }

        /* Content Tabs */
        .content-tabs {
            background: var(--white);
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
            margin-bottom: 2rem;
        }

        .tab-headers {
            display: flex;
            border-bottom: 1px solid var(--border-light);
        }

        .tab-header {
            padding: 1rem 2rem;
            background: none;
            border: none;
            cursor: pointer;
            font-weight: 500;
            color: var(--text-light);
            border-bottom: 2px solid transparent;
            transition: all 0.3s ease;
        }

        .tab-header.active {
            color: var(--primary-blue);
            border-bottom-color: var(--primary-blue);
        }

        .tab-content {
            padding: 2rem;
            display: none;
        }

        .tab-content.active {
            display: block;
        }

        /* Navigation Buttons */
        .lesson-navigation {
            display: flex;
            justify-content: space-between;
            margin-top: 2rem;
        }

        .nav-btn {
            padding: 1rem 2rem;
            border: none;
            border-radius: 8px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
        }

        .nav-btn.primary {
            background: var(--primary-blue);
            color: var(--white);
        }

        .nav-btn.secondary {
            background: var(--border-light);
            color: var(--text-dark);
        }

        .nav-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }

        .nav-btn:disabled {
            opacity: 0.5;
            cursor: not-allowed;
            transform: none;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
            .course-sidebar {
                transform: translateX(-100%);
                transition: transform 0.3s ease;
            }

            .course-sidebar.open {
                transform: translateX(0);
            }

            .main-content {
                margin-left: 0;
            }

            .platform-header {
                padding: 0 1rem;
            }

            .sidebar-toggle {
                display: block;
                background: none;
                border: none;
                font-size: 1.2rem;
                color: var(--text-dark);
                cursor: pointer;
                margin-right: 1rem;
            }
        }
    </style>
    
    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="../../../public/assets/images/favicon.ico">
</head>
<body>
    <!-- Platform Header -->
    <header class="platform-header">
        <button class="sidebar-toggle" style="display: none;">
            <i class="fas fa-bars"></i>
        </button>
        
        <div class="platform-logo">
            <img src="../../../public/assets/images/image.png" alt="Whole Cyber Human Initiative">
        </div>
        
        <div class="course-title-header" id="courseTitle">
            ${course.title}
        </div>
        
        <div class="header-actions">
            <div class="progress-indicator">
                <span id="progressText">0% Complete</span>
                <div class="progress-bar">
                    <div class="progress-fill" id="progressFill" style="width: 0%"></div>
                </div>
            </div>
            <button class="nav-btn secondary" onclick="window.location.href='../courses.html'">
                <i class="fas fa-arrow-left"></i> Back to Courses
            </button>
        </div>
    </header>

    <!-- Course Sidebar -->
    <aside class="course-sidebar" id="courseSidebar">
        <div class="sidebar-content">
            <div class="course-info">
                <h3>${course.title}</h3>
                <div class="course-meta">
                    <span><i class="fas fa-user-tie"></i> ${course.instructor}</span>
                    <span><i class="fas fa-clock"></i> ${course.duration}</span>
                    <span><i class="fas fa-play-circle"></i> ${course.lessons} Lessons</span>
                    <span><i class="fas fa-certificate"></i> Certificate Available</span>
                </div>
            </div>

            <ul class="modules-list" id="modulesList">
                ${lessonsHtml}
            </ul>
        </div>
    </aside>

    <!-- Main Content -->
    <main class="main-content">
        <div class="content-container">
            <!-- Video Container -->
            <div class="video-container" id="videoContainer">
                <video class="video-player" id="videoPlayer" controls>
                    <source src="" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
                <div class="video-controls">
                    <h2 class="video-title" id="videoTitle">${firstLesson?.title || 'Lesson Title'}</h2>
                    <div class="video-meta">
                        <span><i class="fas fa-clock"></i> <span id="videoDuration">${firstLesson?.duration || 'Duration'}</span></span>
                        <span><i class="fas fa-eye"></i> <span id="videoViews">0 views</span></span>
                        <span><i class="fas fa-calendar"></i> <span id="videoDate">June 24, 2025</span></span>
                    </div>
                    <div class="video-actions">
                        <button class="nav-btn secondary" id="markCompleteBtn">
                            <i class="fas fa-check"></i> Mark as Complete
                        </button>
                        <button class="nav-btn secondary" id="downloadBtn">
                            <i class="fas fa-download"></i> Download
                        </button>
                        <button class="nav-btn secondary" id="bookmarkBtn">
                            <i class="fas fa-bookmark"></i> Bookmark
                        </button>
                    </div>
                </div>
            </div>

            <!-- Content Tabs -->
            <div class="content-tabs">
                <div class="tab-headers">
                    <button class="tab-header active" data-tab="overview">Overview</button>
                    <button class="tab-header" data-tab="notes">Notes</button>
                    <button class="tab-header" data-tab="resources">Resources</button>
                    <button class="tab-header" data-tab="discussion">Discussion</button>
                </div>

                <div class="tab-content active" id="overview">
                    <h3>Lesson Overview</h3>
                    <div id="lessonDescription">
                        <p>Welcome to ${course.title}. This comprehensive course will guide you through essential concepts and practical skills.</p>
                    </div>
                    
                    <h4>Learning Objectives</h4>
                    <ul id="learningObjectives">
                        <li>Master core concepts and fundamentals</li>
                        <li>Develop practical skills through hands-on exercises</li>
                        <li>Build a strong foundation for career advancement</li>
                    </ul>
                </div>

                <div class="tab-content" id="notes">
                    <h3>Your Notes</h3>
                    <textarea id="notesArea" style="width: 100%; height: 300px; padding: 1rem; border: 1px solid var(--border-light); border-radius: 8px; font-family: inherit;" placeholder="Take notes during the lesson..."></textarea>
                    <button class="nav-btn primary" style="margin-top: 1rem;" onclick="saveNotes()">
                        <i class="fas fa-save"></i> Save Notes
                    </button>
                </div>

                <div class="tab-content" id="resources">
                    <h3>Additional Resources</h3>
                    <ul id="resourcesList">
                        <li><a href="#" target="_blank"><i class="fas fa-file-pdf"></i> Course Materials</a></li>
                        <li><a href="#" target="_blank"><i class="fas fa-link"></i> External Resources</a></li>
                        <li><a href="#" target="_blank"><i class="fas fa-book"></i> Reading List</a></li>
                        <li><a href="#" target="_blank"><i class="fas fa-video"></i> Supplementary Videos</a></li>
                    </ul>
                </div>

                <div class="tab-content" id="discussion">
                    <h3>Discussion</h3>
                    <p>Join the discussion about this lesson in our community forum.</p>
                    <button class="nav-btn primary">
                        <i class="fas fa-comments"></i> Open Discussion
                    </button>
                </div>
            </div>

            <!-- Lesson Navigation -->
            <div class="lesson-navigation">
                <button class="nav-btn secondary" id="prevLessonBtn" disabled>
                    <i class="fas fa-chevron-left"></i> Previous Lesson
                </button>
                <button class="nav-btn primary" id="nextLessonBtn">
                    Next Lesson <i class="fas fa-chevron-right"></i>
                </button>
            </div>
        </div>
    </main>

    <!-- JavaScript -->
    <script src="../../../public/assets/js/main.js"></script>
    <script>
        // Course Platform JavaScript
        class CoursePlatform {
            constructor() {
                this.currentLesson = 0;
                this.completedLessons = new Set();
                this.courseData = {
                    title: "${course.title}",
                    instructor: "${course.instructor}",
                    totalDuration: "${course.duration}",
                    totalLessons: ${course.lessons}
                };
                this.init();
            }

            init() {
                this.setupEventListeners();
                this.setupTabs();
                this.setupResponsive();
                this.updateProgress();
            }

            setupEventListeners() {
                document.querySelectorAll('.tab-header').forEach(tab => {
                    tab.addEventListener('click', (e) => {
                        this.switchTab(e.target.dataset.tab);
                    });
                });

                document.addEventListener('click', (e) => {
                    if (e.target.closest('.module-header')) {
                        this.toggleModule(e.target.closest('.module-header'));
                    }
                });

                document.getElementById('prevLessonBtn').addEventListener('click', () => {
                    this.previousLesson();
                });

                document.getElementById('nextLessonBtn').addEventListener('click', () => {
                    this.nextLesson();
                });

                document.getElementById('markCompleteBtn').addEventListener('click', () => {
                    this.markLessonComplete();
                });

                document.querySelectorAll('.lesson-link').forEach(link => {
                    link.addEventListener('click', (e) => {
                        e.preventDefault();
                        const lessonIndex = parseInt(e.target.closest('.lesson-link').dataset.lesson);
                        this.loadLesson(lessonIndex);
                    });
                });

                const sidebarToggle = document.querySelector('.sidebar-toggle');
                if (sidebarToggle) {
                    sidebarToggle.addEventListener('click', () => {
                        this.toggleSidebar();
                    });
                }
            }

            loadLesson(lessonIndex) {
                this.currentLesson = lessonIndex;

                document.querySelectorAll('.lesson-link').forEach(link => {
                    link.classList.remove('active');
                });
                document.querySelector(\`[data-lesson="\${lessonIndex}"]\`).classList.add('active');

                this.updateNavigationButtons();
            }

            toggleModule(moduleHeader) {
                moduleHeader.classList.toggle('active');
                const lessonsList = moduleHeader.nextElementSibling;
                if (lessonsList.style.display === 'none' || !lessonsList.style.display) {
                    lessonsList.style.display = 'block';
                } else {
                    lessonsList.style.display = 'none';
                }
            }

            switchTab(tabName) {
                document.querySelectorAll('.tab-header').forEach(header => {
                    header.classList.remove('active');
                });
                document.querySelector(\`[data-tab="\${tabName}"]\`).classList.add('active');

                document.querySelectorAll('.tab-content').forEach(content => {
                    content.classList.remove('active');
                });
                document.getElementById(tabName).classList.add('active');
            }

            markLessonComplete() {
                this.completedLessons.add(this.currentLesson);
                
                const lessonLink = document.querySelector(\`[data-lesson="\${this.currentLesson}"]\`);
                lessonLink.classList.add('completed');
                const statusIcon = lessonLink.querySelector('.lesson-status i');
                statusIcon.className = 'fas fa-check-circle';
                statusIcon.style.color = 'var(--success-green)';
                statusIcon.style.opacity = '1';

                this.updateProgress();
                
                setTimeout(() => {
                    this.nextLesson();
                }, 1000);
            }

            updateProgress() {
                const completedCount = this.completedLessons.size;
                const progressPercentage = Math.round((completedCount / this.courseData.totalLessons) * 100);
                
                document.getElementById('progressText').textContent = \`\${progressPercentage}% Complete\`;
                document.getElementById('progressFill').style.width = \`\${progressPercentage}%\`;
            }

            updateNavigationButtons() {
                const prevBtn = document.getElementById('prevLessonBtn');
                const nextBtn = document.getElementById('nextLessonBtn');
                
                prevBtn.disabled = this.currentLesson === 0;
                nextBtn.disabled = this.currentLesson >= this.courseData.totalLessons - 1;
                
                if (nextBtn.disabled) {
                    nextBtn.innerHTML = '<i class="fas fa-trophy"></i> Course Complete';
                } else {
                    nextBtn.innerHTML = 'Next Lesson <i class="fas fa-chevron-right"></i>';
                }
            }

            previousLesson() {
                if (this.currentLesson > 0) {
                    this.loadLesson(this.currentLesson - 1);
                }
            }

            nextLesson() {
                if (this.currentLesson < this.courseData.totalLessons - 1) {
                    this.loadLesson(this.currentLesson + 1);
                }
            }

            toggleSidebar() {
                const sidebar = document.getElementById('courseSidebar');
                sidebar.classList.toggle('open');
            }

            setupTabs() {
                // Tab functionality is handled in setupEventListeners
            }

            setupResponsive() {
                const checkScreenSize = () => {
                    const sidebarToggle = document.querySelector('.sidebar-toggle');
                    if (window.innerWidth <= 1024) {
                        sidebarToggle.style.display = 'block';
                    } else {
                        sidebarToggle.style.display = 'none';
                        document.getElementById('courseSidebar').classList.remove('open');
                    }
                };

                window.addEventListener('resize', checkScreenSize);
                checkScreenSize();
            }
        }

        function saveNotes() {
            const notes = document.getElementById('notesArea').value;
            localStorage.setItem(\`course_notes_\${coursePlatform.currentLesson}\`, notes);
            alert('Notes saved successfully!');
        }

        let coursePlatform;
        document.addEventListener('DOMContentLoaded', function() {
            coursePlatform = new CoursePlatform();
        });
    </script>
</body>
</html>`;
}

// Generate templates for each course
courses.forEach(course => {
    const template = generatePlatformTemplate(course);
    const platformsDir = path.join(__dirname, 'src', 'pages', 'platforms');
    
    // Create platforms directory if it doesn't exist
    if (!fs.existsSync(platformsDir)) {
        fs.mkdirSync(platformsDir, { recursive: true });
    }
    
    fs.writeFileSync(path.join(platformsDir, course.filename), template);
    console.log(`Generated ${course.filename}`);
});

console.log('All platform templates generated successfully!');
