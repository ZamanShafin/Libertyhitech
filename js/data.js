/**
 * Liberty Hi-Tech - Corporate Ecosystem Data
 * Contains comprehensive details for Core Sectors, Cyber Security, Post Graduation Training, and Solutions.
 */

const COMPANY_DATA = {
  name: "Liberty Hi-Tech",
  tagline: "Empowering Innovation Across Industries",
  about: "Liberty Hi-Tech is a forward-thinking technology organization delivering high-impact solutions across core domains: Cyber Security & Defense, Post Graduation Training, Software Development, Web Engineering, Security & Surveillance, Smart Campus Automation, and Manpower Development. We empower enterprises and professionals with advanced technology, certified talent, and mission-critical digital systems.",
  vision: "To become a premier technology powerhouse and human capital accelerator, driving continuous innovation, defense-grade security, and sustainable industry transformation.",
  mission: [
    "Safeguard enterprise digital ecosystems with advanced cyber defense and threat mitigation.",
    "Accelerate technical careers and corporate capabilities through specialized postgraduate training.",
    "Engineer resilient, cloud-native custom software and high-conversion web solutions.",
    "Automate educational and enterprise campuses with smart IoT and AI-driven surveillance.",
    "Develop skilled global manpower aligned with modern industry benchmarks."
  ],
  stats: [
    { label: "Core Verticals", value: "7+", icon: "layers" },
    { label: "Enterprise Solutions", value: "250+", icon: "award" },
    { label: "Graduates & Trainees", value: "5,000+", icon: "graduation-cap" },
    { label: "Client Satisfaction", value: "99.4%", icon: "smile" }
  ],
  services: [
    {
      id: "cyber-security",
      index: "01",
      title: "Cyber Security & Defense",
      shortDesc: "Delivering military-grade cybersecurity protocols, zero-trust architectures, vulnerability assessments, and 24/7 SOC monitoring.",
      fullDesc: "Protecting mission-critical digital infrastructure and enterprise data with comprehensive security intelligence. We provide 24/7 Security Operations Center (SOC) monitoring, threat detection, penetration testing, vulnerability assessments, zero-trust network access (ZTNA), ransomware mitigation, and regulatory compliance audits to secure your organization against evolving global cyber threats.",
      icon: "shield-alert",
      badge: "Cyber Defense",
      image: "assets/images/what-is-cybersecurity-1024x631.jpg",
      video: "assets/videos/sec.mp4",
      features: [
        "24/7 Managed Detection & Incident Response (MDR / SOC)",
        "Enterprise Penetration Testing & Vulnerability Audits",
        "Zero-Trust Network Architecture & Identity Access Management",
        "Cloud Security Posture (CSPM) & Endpoint Protection",
        "Disaster Recovery, Ransomware Shield & Forensic Analysis"
      ],
      highlights: [
        { label: "Defense Level", val: "Military-Grade Zero-Trust" },
        { label: "Monitoring", val: "24/7/365 Real-Time SOC" },
        { label: "Compliance", val: "ISO 27001 & NIST Standards" }
      ]
    },
    {
      id: "postgrad-training",
      index: "02",
      title: "Post Graduate Training",
      shortDesc: "Specialized postgraduate training programs, hands-on enterprise labs, and career acceleration certifications for tech graduates.",
      fullDesc: "Empowering university graduates and working professionals with advanced, industry-aligned technical skillsets. Our postgraduate training ecosystem features hands-on laboratory simulations, real-world project portfolios, mentorship from senior tech architects, and direct hiring placement networks in Software Engineering, Cloud Architecture, AI/ML, and Cyber Defense.",
      icon: "graduation-cap",
      badge: "Post-Grad Academy",
      image: "assets/images/postgraduate-training.jpg",
      video: "assets/videos/postgrad-training.mp4",
      features: [
        "Advanced Postgraduate Specialization & Technical Bootcamps",
        "Hands-On Enterprise Lab Projects & Real-World Case Studies",
        "1-on-1 Mentorship from Senior Industry Practitioners",
        "Direct Corporate Placement & Global Hiring Pipelines",
        "Recognized Professional Certifications & Diplomas"
      ],
      highlights: [
        { label: "Curriculum", val: "Enterprise Industry-Aligned" },
        { label: "Mentorship", val: "Senior Industry Architects" },
        { label: "Placement", val: "Direct Enterprise Pipelines" }
      ]
    },
    {
      id: "manpower-dev",
      index: "03",
      title: "Manpower Development",
      shortDesc: "Providing training and resources to develop skilled professionals ready to meet industry demands.",
      fullDesc: "Bridging the global industry talent gap through customized corporate training, technical certifications, and leadership bootcamps. We equip candidates with modern IT competencies, management capabilities, and practical operational expertise aligned with high-growth market requirements.",
      icon: "users",
      badge: "Talent & Training",
      image: "assets/images/depositphotos_58115991-stock-photo-training-and-development.jpg",
      video: "assets/videos/man.mp4",
      features: [
        "Corporate Workforce Upskilling & Tech Bootcamps",
        "Certified Professional Development Programs",
        "Vocational & Specialized Technical Training",
        "Leadership, Soft Skills & Team Alignment Workshops",
        "Talent Acquisition & Strategic Placement Support"
      ],
      highlights: [
        { label: "Curriculum", val: "Industry-Verified Modules" },
        { label: "Mentors", val: "Senior Industry Practitioners" },
        { label: "Placement", val: "Direct Enterprise Pipelines" }
      ]
    },
    {
      id: "software-dev",
      index: "04",
      title: "Software Development",
      shortDesc: "Crafting tailored software solutions that meet the unique needs of businesses, driving productivity and innovation.",
      fullDesc: "We architect, build, and deploy enterprise-grade custom software applications tailored to streamline complex business workflows. From robust enterprise resource planning (ERP) platforms and AI-assisted automation to high-concurrency microservices, our software engineering team delivers scalable, secure, and modern digital ecosystems.",
      icon: "code",
      badge: "Core Technology",
      image: "assets/images/Futuro del Desarrollo de Software.webp",
      video: "assets/videos/soft.mp4",
      features: [
        "Custom Enterprise Software & ERP/CRM Systems",
        "Cloud-Native Architecture & Scalable Microservices",
        "Cross-Platform Mobile & Desktop Engineering",
        "Legacy System Modernization & API Integration",
        "Intelligent Process Automation & AI Tooling"
      ],
      highlights: [
        { label: "Architecture", val: "Microservices & Cloud-Native" },
        { label: "Security", val: "Enterprise Tier Encryption" },
        { label: "Deployment", val: "CI/CD & Kubernetes" }
      ]
    },
    {
      id: "web-services",
      index: "05",
      title: "Web Services & Platforms",
      shortDesc: "Developing dynamic and responsive websites that enhance online presence and user engagement.",
      fullDesc: "Our digital engineering studio designs high-impact, lightning-fast web applications, e-commerce platforms, and interactive corporate portals. Blending intuitive UI/UX with modern frameworks, we ensure seamless responsiveness across all screen sizes and search engine dominance.",
      icon: "globe",
      badge: "Digital Experience",
      image: "assets/images/web-services.jpg",
      video: "assets/videos/Web.mp4",
      features: [
        "Dynamic Web Applications & Interactive Portals",
        "Next-Gen Responsive Web Architecture",
        "High-Conversion UI/UX Research & Design",
        "E-Commerce & High-Volume Transactional Engines",
        "Search Optimization (SEO) & Performance Engineering"
      ],
      highlights: [
        { label: "Performance", val: "Sub-second Page Loads" },
        { label: "Responsiveness", val: "100% Mobile & Desktop" },
        { label: "UX Standards", val: "WCAG 2.1 Compliant" }
      ]
    },
    {
      id: "security-surveillance",
      index: "06",
      title: "Security & Surveillance",
      shortDesc: "Implementing cutting-edge surveillance systems to ensure safety and peace of mind for businesses and communities.",
      fullDesc: "Protecting human lives and corporate assets with intelligent surveillance infrastructure. We integrate state-of-the-art 4K optical cameras, AI-powered computer vision for anomaly detection, biometric access control, perimeter sensors, and 24/7 centralized monitoring dashboards.",
      icon: "shield-check",
      badge: "Asset Protection",
      image: "assets/images/4K-Cameras.jpg",
      video: "assets/videos/sec-1.mp4",
      features: [
        "AI-Powered Smart CCTV & Thermal 4K Surveillance",
        "Biometric Access Management & Perimeter Security",
        "Centralized Command Center & Video Management Systems",
        "Automated Threat Detection & Anomaly Recognition",
        "Industrial & Commercial Facility Security Audits"
      ],
      highlights: [
        { label: "Resolution", val: "Up to 4K Ultra HD & Night Vision" },
        { label: "Analytics", val: "AI-Driven Real-time Detection" },
        { label: "Reliability", val: "24/7 Redundant Power Backup" }
      ]
    },
    {
      id: "smart-campus",
      index: "07",
      title: "Smart Campus Automation",
      shortDesc: "Revolutionizing educational and corporate campuses with intelligent, technology-driven automation solutions.",
      fullDesc: "Transforming traditional educational institutions and corporate headquarters into interconnected smart environments. Our ecosystem includes complete Learning Management Systems (LMS), student and faculty portals, automated attendance with facial recognition, digital library management, and IoT smart room climate controls.",
      icon: "layout-grid",
      badge: "Campus IoT",
      image: "assets/images/student-and-hr-management.png",
      video: "assets/videos/LMS.mp4",
      features: [
        "Comprehensive Learning Management Systems (LMS)",
        "Automated Student & Staff Lifecycle Management",
        "Facial Recognition & Smart Card Attendance Gates",
        "Smart Classroom IoT & Interactive Audio-Visual Systems",
        "Institutional Fee, Examination & Grading Portals"
      ],
      highlights: [
        { label: "Capacity", val: "50,000+ Concurrent Students" },
        { label: "Integration", val: "Cloud LMS & Mobile Apps" },
        { label: "Efficiency", val: "70% Reduction in Admin Overhead" }
      ]
    }
  ],
  videos: [
    {
      id: "welcome-hero",
      title: "Liberty Hi-Tech Corporate Introduction",
      category: "Corporate Overview",
      description: "Experience how Liberty Hi-Tech is empowering innovation, shaping communities, and driving technological transformation across core sectors.",
      src: "assets/videos/welcome-02.mp4",
      duration: "0:45",
      badge: "Featured Intro"
    },
    {
      id: "cyber-reel",
      title: "Cyber Security & Threat Defense",
      category: "Cyber Defense",
      description: "Zero-trust network architectures, vulnerability assessments, and 24/7 SOC managed defenses in action.",
      src: "assets/videos/sec.mp4",
      duration: "0:45",
      badge: "Cyber Security"
    },
    {
      id: "postgrad-reel",
      title: "Post Graduation Training & Career Pathways",
      category: "Post-Grad Academy",
      description: "Equipping graduates with advanced hands-on enterprise technology skills and direct industry placement pipelines.",
      src: "assets/videos/postgrad-training.mp4",
      duration: "0:40",
      badge: "Training"
    },
    {
      id: "soft-reel",
      title: "Software Development & Cloud Innovation",
      category: "Technology",
      description: "A showcase of custom software solutions, enterprise platforms, and scalable digital architectures built for high performance.",
      src: "assets/videos/soft.mp4",
      duration: "0:50",
      badge: "Software"
    },
    {
      id: "web-reel",
      title: "Web Services & Digital Experiences",
      category: "Digital Platforms",
      description: "Discover modern responsive websites, interactive client portals, and seamless user experiences crafted for enterprise clients.",
      src: "assets/videos/Web.mp4",
      duration: "0:40",
      badge: "Web"
    },
    {
      id: "sec-reel",
      title: "Advanced Security & AI Surveillance",
      category: "Security",
      description: "Explore 4K intelligent surveillance, facial recognition systems, and comprehensive facility protection mechanisms in action.",
      src: "assets/videos/sec-1.mp4",
      duration: "0:45",
      badge: "Surveillance"
    },
    {
      id: "lms-reel",
      title: "Smart Campus & LMS Automation",
      category: "Campus Automation",
      description: "Revolutionizing modern schools, universities, and corporate campuses with automated student portals and smart infrastructure.",
      src: "assets/videos/LMS.mp4",
      duration: "0:35",
      badge: "Smart Campus"
    },
    {
      id: "man-reel",
      title: "Manpower & Talent Development",
      category: "Workforce",
      description: "Equipping next-generation leaders and technical professionals with hands-on enterprise skillsets.",
      src: "assets/videos/man.mp4",
      duration: "0:30",
      badge: "Manpower"
    }
  ],
  faqs: [
    {
      q: "What makes Liberty Hi-Tech unique compared to single-focus companies?",
      a: "Liberty Hi-Tech unites advanced cybersecurity, postgraduate vocational training, software development, web engineering, physical AI surveillance, smart campus automation, and workforce development under one cohesive technology-driven ecosystem."
    },
    {
      q: "How can students or organizations enroll in Post Graduation Training?",
      a: "You can submit an application via our contact form or contact our training admissions desk. We offer specialized tracks in software development, cybersecurity, cloud architecture, and data engineering with structured mentorship and placement support."
    },
    {
      q: "What cybersecurity services does Liberty Hi-Tech provide?",
      a: "We offer end-to-end cyber defense including 24/7 Security Operations Center (SOC) monitoring, penetration testing, vulnerability assessment, zero-trust network implementation, incident response, and regulatory compliance audits (ISO 27001 / NIST)."
    },
    {
      q: "Are Liberty Hi-Tech's security and campus automation solutions customizable?",
      a: "Yes. Every security, surveillance, and smart campus setup is fully tailored to your physical footprint, organizational size, and compliance mandates. We provide site inspections, hardware installation, cloud software integration, and full staff training."
    },
    {
      q: "What geographic regions does Liberty Hi-Tech serve?",
      a: "We provide cybersecurity, postgraduate training, and software/web engineering worldwide with regional hubs and facility deployments across Bangladesh and global partner networks."
    }
  ]
};
