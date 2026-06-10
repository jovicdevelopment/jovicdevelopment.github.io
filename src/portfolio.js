/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// Splash Screen

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

// Summary And Greeting Section

const illustration = {
  animated: true
};

const greeting = {
  username: "Joseph Victor",
  title: "Hi, I'm Joseph Victor",
  subTitle: emoji(
    "A Cybersecurity & Network Security Specialist 🛡️ passionate about ethical hacking, cloud security, and deploying local AI systems. CEH & Cloud Security certified with distinction. Building a safer digital Africa — one network at a time."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing",
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/jovicdevelopment",
  linkedin: "https://www.linkedin.com/in/jvictor-tech/",
  gmail: "josephjovic23@gmail.com",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  display: true
};

// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle: "CYBERSECURITY SPECIALIST WITH A FOCUS ON NETWORK DEFENSE, ETHICAL HACKING & AI SECURITY",
  skills: [
    emoji("⚡ Conduct vulnerability assessments and penetration testing using Nmap, Wireshark, and Burp Suite."),
    emoji("⚡ Design and implement secure network infrastructures including ACLs, VLANs, DNS, DHCP, and TCP/IP configurations."),
    emoji("⚡ Deploy and manage cloud security architectures with a focus on IAM, perimeter hardening, and threat monitoring."),
    emoji("⚡ Architect air-gapped local AI environments using Ollama and MCP server configurations for secure code generation."),
    emoji("⚡ Apply behavioral psychology insights to detect human-factor security risks and design security awareness programs."),
    emoji("⚡ Create cybersecurity technical content and tutorials for the East African tech community on YouTube.")
  ],

  softwareSkills: [
    {
      skillName: "Nmap",
      fontAwesomeClassname: "fas fa-network-wired",
      style: { color: "#4D4D4D" }
    },
    {
      skillName: "Wireshark",
      fontAwesomeClassname: "fas fa-fish",
      style: { color: "#1679A7" }
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux",
      style: { color: "#FCC624" }
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python",
      style: { backgroundColor: "transparent", color: "#3776AB" }
    },
    {
      skillName: "AWS / Cloud",
      fontAwesomeClassname: "fab fa-aws",
      style: { color: "#FF9900" }
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker",
      style: { color: "#1488C6" }
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt",
      style: { color: "#F05032" }
    },
    {
      skillName: "GitHub",
      fontAwesomeClassname: "fab fa-github",
      style: { color: "#181717" }
    },
    {
      skillName: "VS Code",
      fontAwesomeClassname: "fas fa-code",
      style: { color: "#007ACC" }
    },
    {
      skillName: "Cisco / Packet Tracer",
      fontAwesomeClassname: "fas fa-server",
      style: { color: "#1BA0D7" }
    }
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Daystar University",
      logo: require("./assets/images/daystarLogo.png"),
      subHeader: "Bachelor of Arts in Social Work & Psychology",
      duration: "2022 - 2026",
      desc: "Pursuing a BA with a minor in Psychology and Counseling, developing a strong foundation in behavioral science, human-centered communication, and ethical decision-making.",
      descBullets: [
        "Applied behavioral psychology insights to identify human-factor security risks in cybersecurity contexts",
        "Developed high emotional intelligence and crisis de-escalation skills applicable to technical stakeholder management"
      ]
    },
    {
      schoolName: "Cyber Shujaa Program",
      logo: require("./assets/images/cybershujaaLogo.png"),
      subHeader: "Cloud & Network Security Certification — Graduated with Distinction",
      duration: "January 2026 - April 2026",
      desc: "Advanced certification covering cloud infrastructure security, network defense strategies, and secure architecture design.",
      descBullets: [
        "Graduated with Distinction (Cohort IX)",
        "Focused on cloud monitoring, IAM, and network perimeter hardening"
      ]
    },
    {
      schoolName: "Cyber Shujaa Program",
      logo: require("./assets/images/cybershujaaLogo.png"),
      subHeader: "Certified Ethical Hacker (CEH) — Graduated with Distinction",
      duration: "April 2025 - August 2025",
      desc: "Intensive ethical hacking certification covering offensive security techniques, vulnerability assessment, and penetration testing methodologies.",
      descBullets: [
        "Graduated with Distinction",
        "Hands-on training in Nmap, Wireshark, threat modeling, and host discovery"
      ]
    },
    {
      schoolName: "Cyberpro Global",
      logo: require("./assets/images/cyberproLogo.png"),
      subHeader: "Cybersecurity Foundational Skills Certificate",
      duration: "January 2025 - April 2025",
      desc: "Foundational program covering core cybersecurity principles, risk management, and defensive security practices.",
      descBullets: [
        "Covered TCP/IP, OSI model, access control, and incident response fundamentals"
      ]
    }
  ]
};

// Your top proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Network Security & Infrastructure",
      progressPercentage: "85%"
    },
    {
      Stack: "Ethical Hacking & Penetration Testing",
      progressPercentage: "80%"
    },
    {
      Stack: "Cloud Security",
      progressPercentage: "75%"
    },
    {
      Stack: "AI & Local LLM Engineering",
      progressPercentage: "70%"
    },
    {
      Stack: "Scripting & Automation",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Network Support & Maintenance Technician",
      company: "Daystar University",
      companylogo: require("./assets/images/daystarLogo.png"),
      date: "2022 – 2025",
      desc: "Engineered, deployed, and secured standalone router environments across 15 critical network nodes, maintaining 99.9% network uptime across the university infrastructure.",
      descBullets: [
        "Conducted host discovery and active port scanning using Nmap to identify unpatched services and reinforce perimeter defenses",
        "Monitored live packet streams using Wireshark to resolve bottlenecks and prevent network latency",
        "Troubleshot and resolved over 120 technical incidents for cross-functional end-users",
        "Applied behavioral psychology insights to identify human-factor security risks and design security baseline practices"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects */

const openSource = {
  showGithubProfile: "true",
  display: true
};

// Big Projects Section

const bigProjects = {
  title: "Projects",
  subtitle: "CYBERSECURITY AND AI PROJECTS I HAVE BUILT AND DEPLOYED",
  projects: [
    {
      image: require("./assets/images/daystarLogo.png"),
      projectName: "DigiShield",
      projectDesc: "A structured cybersecurity compliance framework engineered to fortify Kenyan SMEs against digital vulnerability vectors, mapping technical controls to regional data protection acts.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/jovicdevelopment"
        }
      ]
    },
    {
      image: require("./assets/images/daystarLogo.png"),
      projectName: "Local AI Security Lab",
      projectDesc: "A fully secure, air-gapped local development ecosystem using Ollama + Qwen2.5-Coder:14b with MCP server integration for zero-leakage script generation and codebase audits.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/jovicdevelopment"
        }
      ]
    }
  ],
  display: true
};

// Achievement Section

const achievementSection = {
  title: emoji("Achievements & Certifications 🏆"),
  subtitle: "Certifications, distinctions, and milestones in my cybersecurity journey.",

  achievementsCards: [
    {
      title: "Cloud & Network Security — With Distinction",
      subtitle:
        "Cyber Shujaa Program (Cohort IX) — Issued 29 April 2026. Conducted by USIU-Africa, Serianu Ltd and Kenya Bankers Association. Cert No: CS2026-BR2604270917095402.",
      image: require("./assets/images/cloudNetworkSecurity.png"),
      imageAlt: "Cloud & Network Security Certificate",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing"
        }
      ]
    },
    {
      title: "Cisco Ethical Hacker — With Distinction",
      subtitle:
        "Cyber Shujaa Program (Cohort III) — Issued 27 August 2025. Conducted by USIU-Africa, Serianu Ltd and Kenya Bankers Association. Cert No: CS2025-AU2508240733101045.",
      image: require("./assets/images/ciscoShujaaEthicalHacker.png"),
      imageAlt: "Cisco Ethical Hacker Certificate — Cyber Shujaa",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing"
        }
      ]
    },
    {
      title: "Ethical Hacker — Cisco Networking Academy",
      subtitle:
        "Issued 14 August 2025 by Cisco Networking Academy. Covers penetration testing, social engineering, network/cloud/IoT vulnerability exploitation, and post-exploitation techniques.",
      image: require("./assets/images/ciscoEthicalHacker.png"),
      imageAlt: "Cisco Networking Academy Ethical Hacker Certificate",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing"
        }
      ]
    },
    {
      title: "Cybersecurity Foundational Skills (COP 400)",
      subtitle:
        "Cyberpro Global & Daystar University — Issued 25 July 2025. A collaborative initiative covering TCP/IP, OSI model, access control, risk management, and incident response. Cert No: COP400-2510.",
      image: require("./assets/images/cybersecurityFoundational.png"),
      imageAlt: "Cybersecurity Foundational Skills Certificate",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing"
        }
      ]
    }
  ],
  display: true
};

// Blogs Section

const blogSection = {
  title: "Content & YouTube",
  subtitle:
    "I create cybersecurity and networking content for the East African tech community, covering open-source tools, local AI deployments, and practical security labs.",
  displayMediumBlogs: "false",
  blogs: [
    {
      url: "https://www.youtube.com/@jovicdevelopment",
      title: "Local AI Security Lab Setup with Ollama & MCP",
      description:
        "A step-by-step guide on deploying a fully air-gapped local LLM environment using Ollama and Qwen2.5-Coder for secure code generation and codebase auditing."
    },
    {
      url: "https://www.youtube.com/@jovicdevelopment",
      title: "Network Reconnaissance with Nmap — Beginner to Advanced",
      description:
        "Practical walkthrough of host discovery, port profiling, and service detection using Nmap for network security assessments in East African enterprise environments."
    }
  ],
  display: true
};

// Talks Section

const talkSection = {
  title: "TALKS & COMMUNITY",
  subtitle: emoji("Sharing cybersecurity knowledge and raising digital literacy across East Africa 🌍"),
  talks: [
    {
      title: "Child Online Safety & Parental Controls for Kenyan Parents",
      subtitle: "Community awareness session on Android parental controls and digital protection for children",
      slides_url: "",
      event_url: "https://www.linkedin.com/in/jvictor-tech/"
    }
  ],
  display: true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "DISCUSSING CYBERSECURITY, AI, AND DIGITAL SAFETY IN AFRICA",
  podcast: [],
  display: false
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Open to cybersecurity roles, collaborations, and consulting opportunities. My inbox is always open.",
  number: "+254 114 977 343",
  email_address: "josephjovic23@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter",
  display: false
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
