/**
 * Liberty Hi-Tech - Corporate Ecosystem Data
 * Contains comprehensive details for the 8 core sectors, video hub, and interactive tools.
 */

const COMPANY_DATA = {
  name: "Liberty Hi-Tech",
  tagline: "Empowering Innovation Across Industries",
  about: "Liberty Hi-Tech is a forward-thinking organization dedicated to delivering innovative, high-quality solutions across diverse industries. Our core expertise spans software development, web services, security and surveillance, smart campus automation, manpower development, aviation services, construction, and product trading. We are committed to empowering businesses and individuals with technology-driven solutions that elevate performance, enhance efficiency, and ensure security.",
  vision: "To become a global leader in integrated technology and service solutions, shaping a future driven by innovation and sustainability.",
  mission: [
    "Empower individuals and businesses with cutting-edge technology solutions.",
    "Drive growth, enhance security, and enable smarter, more efficient operations across industries.",
    "Uphold values of innovation, integrity, and excellence.",
    "Foster thriving communities in a secure and sustainable environment."
  ],
  stats: [
    { label: "Core Industries", value: "8+", icon: "layers" },
    { label: "Enterprise Solutions", value: "250+", icon: "award" },
    { label: "Global Reach", value: "15+", icon: "globe" },
    { label: "Client Satisfaction", value: "99.4%", icon: "smile" }
  ],
  services: [
    {
      id: "software-dev",
      index: "01",
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
      index: "02",
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
      index: "03",
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
      index: "04",
      title: "Smart Campus Automation",
      shortDesc: "Revolutionizing educational and corporate campuses with intelligent, technology-driven automation solutions.",
      fullDesc: "Transforming traditional educational institutions and corporate headquarters into interconnected smart environments. Our ecosystem includes complete Learning Management Systems (LMS), student and faculty portals, automated attendance with facial recognition, digital library management, and IoT smart room climate controls.",
      icon: "graduation-cap",
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
    },
    {
      id: "manpower-dev",
      index: "05",
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
      id: "aviation-services",
      index: "06",
      title: "Aviation Services",
      shortDesc: "Delivering comprehensive solutions to support the aviation sector, from logistics to operational excellence.",
      fullDesc: "Providing precision logistics, ground support equipment coordination, charter management, and operational consulting for commercial and private aviation. We ensure strict adherence to international aviation safety guidelines, rapid turnaround, and unmatched efficiency on every flight sector.",
      icon: "plane",
      badge: "Aero & Logistics",
      image: "assets/images/miami-florida-miami-international-airport-83582371.jpg",
      video: "assets/videos/air.mp4",
      features: [
        "Comprehensive Aviation Ground Support Logistics",
        "Aircraft Charter Coordination & Flight Operations",
        "Aviation Fuel, Catering & Transit Management",
        "Aviation Safety Compliance & Equipment Sourcing",
        "Crew & Passenger Handling Protocol Services"
      ],
      highlights: [
        { label: "Compliance", val: "ICAO & FAA Benchmark Standards" },
        { label: "Availability", val: "24/7 Worldwide Flight Dispatch" },
        { label: "Safety Record", val: "Zero-Incident Standards" }
      ]
    },
    {
      id: "construction-solutions",
      index: "07",
      title: "Construction Solutions",
      shortDesc: "Offering quality construction materials and innovative designs for efficient and sustainable infrastructure development.",
      fullDesc: "Delivering structural engineering excellence, modern architectural concepts, and high-durability construction materials. We partner on commercial developments, residential infrastructure, and industrial complexes with a steadfast commitment to sustainability, green building materials, and timely project delivery.",
      icon: "hard-hat",
      badge: "Infrastructure",
      image: "assets/images/photo-1486406146926-c627a92ad1ab.jpg",
      video: "assets/videos/cons.mp4",
      features: [
        "Architectural Planning & Sustainable Structural Design",
        "Premium Grade Construction Materials Procurement",
        "Commercial, Industrial & Residential Project Execution",
        "Green Building Strategies & Energy Optimization",
        "Project Management, Site Safety & Quality Assurance"
      ],
      highlights: [
        { label: "Design", val: "BIM & Modern 3D Modeling" },
        { label: "Sustainability", val: "Eco-Friendly Concrete & Steel" },
        { label: "Execution", val: "On-Time & On-Budget Delivery" }
      ]
    },
    {
      id: "product-trading",
      index: "08",
      title: "Product Trading",
      shortDesc: "Supplying high-quality products that cater to diverse industry needs with a focus on reliability and efficiency.",
      fullDesc: "Connecting global manufacturers and international buyers with seamless supply chain operations. From export-quality ready-made garments and textiles to industrial hardware, technology equipment, and specialty commodities, we maintain rigorous quality checks and end-to-end freight transparency.",
      icon: "package",
      badge: "Global Commerce",
      image: "assets/images/port-of-shanghai-global-trade-hub-economic-powerhouse.jpg",
      video: "assets/videos/trade.mp4",
      features: [
        "International Import & Export Supply Chain Management",
        "Quality Apparel & Textile Sourcing (Denim, Knitwear, Uniforms)",
        "Technology Hardware & Commercial Equipment Distribution",
        "Comprehensive Freight, Customs & Port Logistics",
        "Rigorous Quality Control & International Compliance"
      ],
      highlights: [
        { label: "Coverage", val: "Global Trade Hubs & Ports" },
        { label: "Quality", val: "100% Pre-Shipment Inspection" },
        { label: "Turnaround", val: "Optimized Sea & Air Freight" }
      ]
    }
  ],
  videos: [
    {
      id: "welcome-hero",
      title: "Liberty Hi-Tech Corporate Introduction",
      category: "Corporate Overview",
      description: "Experience how Liberty Hi-Tech is empowering innovation, shaping communities, and driving technological transformation across 8 major industries.",
      src: "assets/videos/welcome-02.mp4",
      duration: "0:45",
      badge: "Featured Intro"
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
      id: "air-reel",
      title: "Aviation Logistics & Operations",
      category: "Aviation",
      description: "Global flight support, ground equipment coordination, and seamless aviation services meeting the highest safety standards.",
      src: "assets/videos/air.mp4",
      duration: "0:40",
      badge: "Aviation"
    },
    {
      id: "trade-reel",
      title: "Global Product Trading & Supply Chain",
      category: "Commerce",
      description: "End-to-end import/export logistics, quality apparel trading, and worldwide distribution networks.",
      src: "assets/videos/trade.mp4",
      duration: "0:45",
      badge: "Trading"
    },
    {
      id: "man-reel",
      title: "Manpower & Talent Development",
      category: "Workforce",
      description: "Equipping next-generation leaders and technical professionals with hands-on enterprise skillsets.",
      src: "assets/videos/man.mp4",
      duration: "0:30",
      badge: "Manpower"
    },
    {
      id: "cons-reel",
      title: "Sustainable Construction & Engineering",
      category: "Infrastructure",
      description: "Innovative architectural design, premium sustainable materials, and modern civil construction projects.",
      src: "assets/videos/cons.mp4",
      duration: "0:55",
      badge: "Construction"
    }
  ],
  faqs: [
    {
      q: "What makes Liberty Hi-Tech unique compared to single-focus companies?",
      a: "Liberty Hi-Tech uniquely unites 8 critical industry sectors—from advanced software engineering and security to aviation, construction, and global trade—under one cohesive technology-driven ecosystem. This allows clients to benefit from cross-industry synergy, single-vendor accountability, and superior cost efficiencies."
    },
    {
      q: "How can we start a project or consultation with Liberty Hi-Tech?",
      a: "You can initiate a consultation through our Interactive Solution Estimator, submit an inquiry via our contact form, or email our enterprise advisory desk directly. Our specialists analyze your specific sector requirements and deliver a comprehensive proposal within 24 to 48 hours."
    },
    {
      q: "Are Liberty Hi-Tech's security and campus automation solutions customizable?",
      a: "Yes. Every security, surveillance, and smart campus setup is fully tailored to your physical footprint, organizational size, and compliance mandates. We provide site inspections, hardware installation, cloud software integration, and full staff training."
    },
    {
      q: "What geographic regions does Liberty Hi-Tech serve?",
      a: "We provide software and web engineering worldwide, while our physical security, campus automation, aviation support, construction, and product trading operations span regional and international hubs across Asia, the Middle East, Europe, and the Americas."
    },
    {
      q: "How does Liberty Hi-Tech ensure quality and sustainability in construction and trading?",
      a: "We adhere to ISO-grade quality control, international safety standards, and sustainable procurement practices. All construction materials undergo stringent laboratory testing, and our trading goods receive thorough pre-shipment inspections."
    }
  ]
};
