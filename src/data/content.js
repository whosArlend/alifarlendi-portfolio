/**
 * Portfolio content — edit this file to customize your site.
 * All placeholder values are marked with [EDIT: ...].
 */

export const siteConfig = {
  name: "[EDIT: Your Name]",
  tagline: "Web Developer & Security Analyst",
  intro:
    "[EDIT: One-line intro — e.g. Building secure web applications and analyzing vulnerabilities.]",
  email: "[EDIT: your.email@example.com]",
  github: "[EDIT: https://github.com/yourusername]",
  linkedin: "[EDIT: https://linkedin.com/in/yourusername]",
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
    "Computer Engineering student with a passion for building web applications and securing digital systems.",
    "My background spans full-stack web development and IT security, with a focus on vulnerability assessment and security analysis. I enjoy bridging the gap between development and defense — writing clean code while thinking like an attacker.",
    "[EDIT: Add a personal sentence about your goals, interests, or what you're currently working on.]",
  ],
}

export const skillsContent = {
  heading: "Skills",
  groups: [
    {
      title: "Development",
      items: [
        "React",
        "Vue",
        "Flask",
        "FastAPI",
        "JavaScript",
        "PHP",
        "MySQL",
        "Docker",
        "Git",
      ],
    },
    {
      title: "Security",
      items: [
        "Burp Suite",
        "Nmap",
        "Wireshark",
        "Kali Linux",
        "OWASP Top 10",
        "Vulnerability Assessment",
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
        "[EDIT: Short description — e.g. A kata search and discovery tool for martial arts practitioners.]",
      tech: ["React", "JavaScript", "[EDIT: add more]"],
      github: "[EDIT: https://github.com/yourusername/katafinder]",
      live: "[EDIT: https://katafinder.example.com or leave as #]",
    },
    {
      title: "Attack Defense Platform",
      description:
        "Capstone project — a full-stack platform for simulating and monitoring network attack/defense scenarios with integrated IDS/IPS.",
      tech: ["Docker", "Flask", "React", "PostgreSQL", "Snort IDS/IPS"],
      github: "[EDIT: https://github.com/yourusername/attack-defense-platform]",
      live: "[EDIT: https://your-capstone.example.com or leave as #]",
    },
    {
      title: "[EDIT: Project Name]",
      description: "[EDIT: Short project description.]",
      tech: ["[EDIT: Tech 1]", "[EDIT: Tech 2]"],
      github: "[EDIT: https://github.com/yourusername/project]",
      live: "#",
    },
  ],
}

export const experienceContent = {
  heading: "Experience",
  items: [
    {
      role: "Web Development Intern",
      company: "[EDIT: Company Name]",
      period: "[EDIT: Jan 2024 — Jun 2024]",
      description:
        "[EDIT: Brief description — e.g. Built and maintained client-facing web applications using React and REST APIs.]",
    },
    {
      role: "IT Security Intern",
      company: "[EDIT: Company Name]",
      period: "[EDIT: Jul 2024 — Dec 2024]",
      description:
        "[EDIT: Brief description — e.g. Conducted vulnerability assessments, performed penetration tests, and documented findings.]",
    },
  ],
}

export const certificationsContent = {
  heading: "Certifications",
  items: [
    {
      title: "Website Hacking / Penetration Testing",
      issuer: "zSecurity (Udemy)",
      year: "[EDIT: 2024]",
    },
    {
      title: "OverTheWire — Natas",
      issuer: "OverTheWire",
      year: "[EDIT: 2024]",
    },
    {
      title: "Hack The Box",
      issuer: "Hack The Box Academy",
      year: "[EDIT: 2024]",
    },
    {
      title: "[EDIT: Certification Name]",
      issuer: "[EDIT: Issuer]",
      year: "[EDIT: Year]",
    },
  ],
}
