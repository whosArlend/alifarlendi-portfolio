/**
 * Portfolio content
 */

export const siteConfig = {
  name: "Alif Arlendi",

  tagline: "Web Developer & Security Analyst",

  intro:
    "Computer Engineering student passionate about building modern web applications and improving cybersecurity through vulnerability assessment and secure software development.",

  email: "alifarlendi123@gmail.com",

  github: "https://github.com/whosArlend",

  linkedin: "https://linkedin.com/in/alif-arlendi",
}

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
]

export const aboutContent = {
  heading: "About",

  paragraphs: [
    "I'm a Computer Engineering student with a strong passion for web development and cybersecurity.",

    "My experience includes developing responsive web applications and performing vulnerability assessments using industry-standard security tools. I enjoy building secure, scalable, and user-friendly software while continuously expanding my knowledge of offensive and defensive security.",

    "Currently, I'm focusing on full-stack web development, penetration testing, and security engineering while creating projects that solve real-world problems and strengthen my technical expertise.",
  ],
}

export const skillsContent = {
  heading: "Skills",

  groups: [
    {
      title: "Programming Languages",

      items: [
        "JavaScript",
        "TypeScript",
        "PHP",
        "Python",
        "SQL",
        "Bash",
      ],
    },

    {
      title: "Web Development",

      items: [
        "HTML5",
        "CSS3",
        "React",
        "Node.js",
        "Tailwind CSS",
        "REST API",
        "Vite",
      ],
    },

    {
      title: "Cybersecurity",

      items: [
        "Web Application Security",
        "Vulnerability Assessment",
        "Penetration Testing",
        "OWASP Top 10",
        "Burp Suite",
        "Nmap",
        "Wireshark",
        "Metasploit Framework",
        "OpenVAS",
        "Nuclei",
        "SQLMap",
      ],
    },

    {
      title: "Tools & Platforms",

      items: [
        "Git",
        "Docker",
        "Linux",
        "Kali Linux",
        "MySQL",
        "PostgreSQL",
        "Maltego",
        "theHarvester",
      ],
    },
  ],
}

export const projectsContent = {
  heading: "Projects",

  items: [
    {
      title: "KataFinder",

      description:
        "A web application that helps players find Indonesian words for Roblox word-chain games through a simple, fast, and responsive search experience.",

      tech: [
        "React",
        "JavaScript",
        "Tailwind CSS",
        "Vite",
      ],

      github: "https://github.com/whosArlend/katafinder",

      live: "#",
    },

    {
      title: "TEKSPACE Room Reservation System",

      description:
        "A web-based room reservation and management system designed for campus environments, enabling students and lecturers to efficiently book, manage, and monitor room availability through an intuitive interface.",

      tech: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Vite",
      ],

      github: "https://github.com/whosArlend/TA_SBD_KEL18",

      live: "#",
    },

    {
      title: "Personal Portfolio",

      description:
        "A minimalist monochrome portfolio website showcasing my projects, technical skills, certifications, and professional experience.",

      tech: [
        "React",
        "JavaScript",
        "Vite",
        "Tailwind CSS",
      ],

      github: "https://github.com/whosArlend/alifarlendi-portfolio",

      live: "#",
    },
  ],
}

export const experienceContent = {
  heading: "Experience",

  items: [
    {
      role: "Web Developer Intern",

      company: "Faculty of Economics and Business",

      period: "2022",

      description:
        "Developed and maintained a web-based room reservation system, improving the efficiency of room booking, reservation management, and overall user experience.",
    },

    {
      role: "Web Developer Intern",

      company: "Faculty of Economics and Business",

      period: "2024 — 2025",

      description:
        "Built and maintained a web-based correspondence management system that simplified the management of incoming and outgoing letters while improving efficiency and accessibility for users.",
    },

    {
      role: "IT Security Intern",

      company: "Department of Industry and Trade of Central Java Province",

      period: "2026",

      description:
        "Conducted vulnerability assessments on government web applications using tools such as Burp Suite, Nmap, and Kali Linux. Documented security findings and provided remediation recommendations based on OWASP Top 10.",
    },
  ],
}

export const certificationsContent = {
  heading: "Certifications",

  items: [
    {
      title: "Website Hacking / Penetration Testing",
      issuer: "zSecurity (Udemy)",
      year: "2026",
    },

    {
      title: "Ethical Hacker",
      issuer: "Cisco Networking Academy",
      year: "2026",
    },
  ],
}