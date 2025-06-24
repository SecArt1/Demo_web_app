// Course Configuration Template
// Copy this file and customize it for each course

const courseConfig = {
    // Basic Course Information
    title: "OT Cyber for Non-Electrical Engineers Essentials",
    instructor: "Paul Cummings",
    description: "Master operational technology cybersecurity fundamentals designed specifically for non-electrical engineers.",
    totalDuration: "4 hours 30 minutes",
    difficulty: "Beginner",
    language: "English",
    certificateAvailable: true,
    
    // Course Structure
    modules: [
        {
            id: 1,
            title: "Introduction to OT Cybersecurity",
            description: "Fundamentals of operational technology security",
            lessons: [
                {
                    id: 1,
                    title: "What is OT Cybersecurity?",
                    type: "video", // "video" or "slides"
                    duration: "15 min",
                    videoUrl: "assets/videos/ot-intro.mp4", // For video lessons
                    slidesUrl: "", // For presentation lessons
                    description: "Introduction to operational technology cybersecurity basics and why it's different from IT security.",
                    objectives: [
                        "Understand the difference between OT and IT",
                        "Learn basic OT concepts and terminology",
                        "Identify common OT security challenges"
                    ],
                    resources: [
                        {
                            title: "OT vs IT Security Comparison Chart",
                            url: "assets/resources/ot-vs-it-chart.pdf",
                            type: "PDF"
                        },
                        {
                            title: "NIST Cybersecurity Framework Guide",
                            url: "https://www.nist.gov/cyberframework",
                            type: "External Link"
                        }
                    ],
                    quiz: {
                        enabled: true,
                        questions: [
                            {
                                question: "What does OT stand for in cybersecurity?",
                                options: [
                                    "Operational Technology",
                                    "Optimal Technology", 
                                    "Online Technology",
                                    "Organized Technology"
                                ],
                                correct: 0
                            }
                        ]
                    }
                },
                {
                    id: 2,
                    title: "OT Security Framework Overview",
                    type: "slides",
                    duration: "20 min",
                    videoUrl: "",
                    slidesUrl: "assets/presentations/ot-framework.pdf",
                    description: "Overview of OT security frameworks and industry standards.",
                    objectives: [
                        "Learn about major OT security frameworks",
                        "Understand compliance requirements",
                        "Identify framework implementation strategies"
                    ],
                    resources: [
                        {
                            title: "IEC 62443 Standard Overview",
                            url: "assets/resources/iec-62443-overview.pdf",
                            type: "PDF"
                        }
                    ],
                    quiz: {
                        enabled: false
                    }
                }
            ]
        },
        {
            id: 2,
            title: "Industrial Control Systems",
            description: "Understanding ICS components and security",
            lessons: [
                {
                    id: 3,
                    title: "SCADA Systems Deep Dive",
                    type: "video",
                    duration: "25 min",
                    videoUrl: "assets/videos/scada-systems.mp4",
                    slidesUrl: "",
                    description: "Comprehensive look at SCADA systems, their architecture, and security considerations.",
                    objectives: [
                        "Understand SCADA system architecture",
                        "Identify common SCADA vulnerabilities",
                        "Learn SCADA protection strategies"
                    ],
                    resources: [
                        {
                            title: "SCADA Security Best Practices",
                            url: "assets/resources/scada-security-guide.pdf",
                            type: "PDF"
                        }
                    ],
                    quiz: {
                        enabled: true,
                        questions: [
                            {
                                question: "What is the primary purpose of a SCADA system?",
                                options: [
                                    "Data analysis",
                                    "Supervisory control and data acquisition",
                                    "Network security",
                                    "User authentication"
                                ],
                                correct: 1
                            }
                        ]
                    }
                },
                {
                    id: 4,
                    title: "PLC Security Fundamentals",
                    type: "slides",
                    duration: "30 min",
                    videoUrl: "",
                    slidesUrl: "assets/presentations/plc-security.pdf",
                    description: "Understanding Programmable Logic Controllers and their security implications.",
                    objectives: [
                        "Learn PLC basics and operation",
                        "Understand PLC security vulnerabilities", 
                        "Implement PLC protection measures"
                    ],
                    resources: [
                        {
                            title: "PLC Programming Security Guide",
                            url: "assets/resources/plc-programming-security.pdf",
                            type: "PDF"
                        }
                    ],
                    quiz: {
                        enabled: false
                    }
                }
            ]
        },
        {
            id: 3,
            title: "OT Risk Assessment",
            description: "Conducting security assessments in OT environments",
            lessons: [
                {
                    id: 5,
                    title: "OT Risk Assessment Methodology",
                    type: "video",
                    duration: "35 min",
                    videoUrl: "assets/videos/ot-risk-assessment.mp4",
                    slidesUrl: "",
                    description: "Step-by-step approach to conducting risk assessments in operational technology environments.",
                    objectives: [
                        "Learn OT risk assessment frameworks",
                        "Understand asset identification processes",
                        "Master threat modeling for OT systems"
                    ],
                    resources: [
                        {
                            title: "OT Risk Assessment Template",
                            url: "assets/resources/ot-risk-template.xlsx",
                            type: "Excel"
                        },
                        {
                            title: "SANS OT Risk Assessment Guide",
                            url: "assets/resources/sans-ot-risk-guide.pdf",
                            type: "PDF"
                        }
                    ],
                    quiz: {
                        enabled: true,
                        questions: [
                            {
                                question: "What is the first step in OT risk assessment?",
                                options: [
                                    "Threat identification",
                                    "Asset inventory",
                                    "Vulnerability scanning",
                                    "Impact analysis"
                                ],
                                correct: 1
                            }
                        ]
                    }
                }
            ]
        }
    ],
    
    // Course Settings
    settings: {
        autoAdvance: false, // Auto-advance to next lesson after completion
        allowSkipping: false, // Allow skipping lessons without completion
        showQuizzes: true, // Enable/disable quizzes
        trackProgress: true, // Track user progress
        enableNotes: true, // Allow students to take notes
        enableDiscussion: true, // Enable discussion features
        downloadableResources: true, // Allow resource downloads
        certificateThreshold: 80 // Minimum completion percentage for certificate
    },
    
    // Customization Options
    branding: {
        primaryColor: "#2886c8",
        secondaryColor: "#6db6fe", 
        accentColor: "#ff0099",
        logoUrl: "assets/photos/image.png"
    }
};

// Export for use in the platform
if (typeof module !== 'undefined' && module.exports) {
    module.exports = courseConfig;
}
