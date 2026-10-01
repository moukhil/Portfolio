const profileData = {
  name: "Shaik Moukhil",
  role: "Java Full Stack Developer",
  taglines: [
    "Java Full Stack Developer",
    "Spring Boot & REST API Specialist",
    "React & Node.js Developer",
    "B.Tech CSE (Data Science) @ Lords"
  ],
  bio: "Aspiring Java Full Stack Developer with hands-on experience building responsive web applications and RESTful solutions using Java, Spring Boot, JavaScript, React.js, Node.js, Express.js, MySQL, and MongoDB. Strong foundation in object-oriented programming, scalable database design, and end-to-end full-stack architecture.",
  email: "shaikmoukhil@gmail.com",
  phone: "+91 6301915182",
  location: "Hyderabad, Telangana, India",
  availability: "Open to Full-Time Roles & Internships",
  resumeUrl: "/Shaik_Moukhil_Resume.pdf",
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/moukhil-shaik",
    github: "https://github.com/moukhil",
    leetcode: "https://leetcode.com/u/moukhil_shaik/",
    email: "mailto:shaikmoukhil@gmail.com",
    phone: "tel:+916301915182"
  },
  stats: [
    { label: "CGPA (B.Tech)", value: "8.14", desc: "Lords Institute (CS & DS)" },
    { label: "Full-Stack Projects", value: "3+", desc: "Production & Hackathon Grade" },
    { label: "Hackathon Award", value: "1st Place", desc: "E-Printing Platform" },
    { label: "Core Technologies", value: "12+", desc: "Java, Spring Boot, React, Node" }
  ]
};

const initialProjects = [
  {
    id: "proj-1",
    title: "Secure File Transfer",
    subtitle: "QR-Based File Sharing System with Role-Based Access Control",
    category: "Full Stack (MERN)",
    description: "Developed a full-stack Secure File Transfer System using React.js, Node.js, Express.js, and MongoDB, enabling authenticated users to securely upload, share, and access files through QR-based file transfer with JWT authentication and role-based access control.",
    highlights: [
      "User registration, login, and secure JWT authentication with RBAC",
      "QR code generation & camera scanning for rapid contactless file access",
      "Admin approval dashboard, file upload management, inbox & notifications",
      "Deployed on Vercel (frontend), Render (backend), and MongoDB Atlas (database)"
    ],
    technologies: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "JWT", "QR Code API"],
    liveDemo: "https://secure-file-transfer-qr-frontend.vercel.app/",
    github: "https://github.com/moukhil/secure-file-transfer-qr",
    featured: true,
    badge: "Featured MERN Project",
    image: "https://images.unsplash.com/photo-1618060932014-4deda4932554?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "proj-2",
    title: "E-Printing Application",
    subtitle: "Hackathon-Winning Document Printing & Order Management Platform",
    category: "Full Stack (MERN)",
    description: "Developed a full-stack E-Printing platform using React.js, Node.js, Express.js, and MongoDB, enabling users to upload documents, customize print options, manage carts, and place print orders through a responsive web interface.",
    highlights: [
      "Awarded 1st Place at University Hackathon (Sep 2025)",
      "Secure REST APIs for authentication, document handling, and cart/order lifecycle",
      "Customizable print settings (color/grayscale, paper size, binding options)",
      "Dedicated admin dashboard to monitor print queues and manage order fulfillment"
    ],
    technologies: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "REST APIs", "Multer"],
    liveDemo: "https://e-printing-frontend.vercel.app/",
    github: "https://github.com/moukhil/e-printing",
    featured: true,
    badge: "🏆 Hackathon Winner",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "proj-3",
    title: "Food Recipe Management",
    subtitle: "Enterprise Recipe Platform with Spring Boot & MySQL",
    category: "Java & Spring Boot",
    description: "Engineered a full-stack recipe management system with React.js and Spring Boot, providing recipe search, detailed recipe views, recipe creation, and popular recipe recommendations.",
    highlights: [
      "Implemented RESTful APIs with Spring Data JPA and MySQL for persistent data storage",
      "High-performance recipe search, filtering by ingredients and cuisine",
      "Optimized frontend-backend communication and deployed on Vercel and Render",
      "Clean layered architecture: Controller, Service, Repository, and Model"
    ],
    technologies: ["Java", "Spring Boot", "React.js", "Tailwind CSS", "MySQL", "Maven", "Spring Data JPA", "Hibernate"],
    liveDemo: "https://food-recipe-topaz.vercel.app/",
    github: "https://github.com/moukhil/food-recipe",
    featured: true,
    badge: "Java Enterprise",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80"
  }
];

const skillsData = [
  {
    category: "Programming Languages",
    icon: "Code2",
    skills: [
      { name: "Java", level: 90, tag: "Primary" },
      { name: "JavaScript", level: 85, tag: "Modern ES6+" },
      { name: "C", level: 75, tag: "Procedural & Algorithms" }
    ]
  },
  {
    category: "Backend Technologies",
    icon: "Server",
    skills: [
      { name: "Spring Boot", level: 88, tag: "REST APIs & JPA" },
      { name: "REST APIs", level: 90, tag: "Design & Security" },
      { name: "Node.js", level: 85, tag: "Runtime & Asynchronous" },
      { name: "Express.js", level: 85, tag: "Middleware & Routing" }
    ]
  },
  {
    category: "Frontend Technologies",
    icon: "Layout",
    skills: [
      { name: "React.js", level: 88, tag: "Hooks & Components" },
      { name: "HTML5", level: 95, tag: "Semantic Markup" },
      { name: "CSS3", level: 90, tag: "Responsive Flex/Grid" },
      { name: "Tailwind CSS", level: 90, tag: "Modern Utility UI" }
    ]
  },
  {
    category: "Databases & Storage",
    icon: "Database",
    skills: [
      { name: "MySQL", level: 85, tag: "RDBMS, SQL & Schema" },
      { name: "MongoDB", level: 88, tag: "NoSQL, Aggregation, Mongoose" }
    ]
  },
  {
    category: "Core Java Engineering",
    icon: "Cpu",
    skills: [
      { name: "OOP (Object-Oriented)", level: 92, tag: "Solid Principles" },
      { name: "Collections Framework", level: 90, tag: "Lists, Sets, Maps" },
      { name: "Multithreading & Concurrency", level: 80, tag: "Threads & Sync" },
      { name: "Exception Handling", level: 90, tag: "Custom Exceptions" },
      { name: "JDBC", level: 85, tag: "Database Connectivity" }
    ]
  },
  {
    category: "Tools & CS Fundamentals",
    icon: "Wrench",
    skills: [
      { name: "Git & GitHub", level: 90, tag: "Version Control" },
      { name: "Postman", level: 88, tag: "API Testing & Docs" },
      { name: "Maven", level: 82, tag: "Build Automation" },
      { name: "VS Code & MySQL Workbench", level: 90, tag: "Dev Environments" },
      { name: "Data Structures & Algorithms", level: 82, tag: "Problem Solving" },
      { name: "DBMS, OS & Computer Networks", level: 85, tag: "Core Concepts" }
    ]
  }
];

const educationData = [
  {
    institution: "Lords Institute of Engineering & Technology",
    location: "Hyderabad, India",
    degree: "Bachelor of Technology, Computer Science & Data Science",
    period: "2023 - 2026",
    score: "CGPA: 8.14",
    status: "Currently Pursuing (Final Year)",
    highlights: [
      "Specialization in Computer Science and Data Science",
      "Hands-on coursework: DSA, DBMS, Web Development, Object-Oriented Software Engineering",
      "Led technical development in campus hackathons"
    ]
  },
  {
    institution: "Crescent Junior College",
    location: "Hyderabad, India",
    degree: "Intermediate (MPC - Mathematics, Physics, Chemistry)",
    period: "2020 - 2022",
    score: "GPA: 8.95",
    status: "Completed",
    highlights: ["Strong foundation in Higher Mathematics and Analytical Sciences"]
  },
  {
    institution: "Little Star High School",
    location: "Hyderabad, India",
    degree: "Secondary School Certificate (SSC)",
    period: "Completed 2020",
    score: "GPA: 9.0",
    status: "Completed",
    highlights: ["Academic excellence with a 9.0/10.0 GPA"]
  }
];

const experienceData = [
  {
    role: "Machine Learning Intern",
    company: "MANAC INFOTECH PRIVATE LIMITED",
    location: "Hyderabad, India",
    period: "Nov 2024 – Jan 2025",
    type: "Internship",
    description: "Gained practical experience in data processing, model evaluation, and machine learning pipelines while collaborating with senior engineers on real-world datasets.",
    skillsGained: ["Data Preprocessing", "Python", "ML Algorithms", "Feature Engineering"]
  }
];

const achievementsData = [
  {
    title: "Hackathon Winner – E-Printing Application",
    issuer: "Hackathon Certificate",
    date: "Sep 2025",
    description: "Won 1st place in a high-intensity hackathon by conceptualizing, developing, and deploying a full-stack E-Printing Application utilizing React.js, Node.js, Express.js, and MongoDB."
  }
];

module.exports = {
  profileData,
  initialProjects,
  skillsData,
  educationData,
  experienceData,
  achievementsData
};
