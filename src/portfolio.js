/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "VURE SATHVIK",
  title: "Hey, I'm Sathvik!",
  subTitle: emoji(
    "Welcome to my Portfolio. I am an aspiring Software Engineer with expertise in modern full-stack development, AI/ML, and scalable systems. Let's build something legendary 🚀"
  ),
  resumeLink:
    "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/VURE-SATHVIK-22",
  linkedin: "https://linkedin.com/in/vure-sathvik",
  gmail: "vuresathvik22@gmail.com",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "SOFTWARE ENGINEER SPECIALIZING IN FULL-STACK DEVELOPMENT & AI/ML",
  skills: [
    emoji(
      "⚡ Develop robust web applications using React.js, Node.js, and Spring Boot"
    ),
    emoji("⚡ Design self-healing RAG pipelines and integrate LLMs using LangChain"),
    emoji(
      "⚡ Architect scalable cloud solutions and CI/CD pipelines with AWS and Docker"
    )
  ],
  softwareSkills: [
    { skillName: "Java", fontAwesomeClassname: "fab fa-java" },
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "React.js", fontAwesomeClassname: "fab fa-react" },
    { skillName: "Node.js", fontAwesomeClassname: "fab fa-node" },
    { skillName: "SQL Database", fontAwesomeClassname: "fas fa-database" },
    { skillName: "AWS", fontAwesomeClassname: "fab fa-aws" },
    { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Vignan Institute of Technology and Science",
      logo: require("./assets/images/vignanLogo.png"), // Using official logo
      subHeader: "B.Tech in Information Technology | GPA: 8.8 / 10",
      duration: "2023 - 2027",
      desc: "Coursework: Data Structures & Algorithms, OOP, System Design, Design Patterns, Operating Systems, DBMS, Computer Networks.",
      descBullets: [
        "Solved 500+ coding problems across multiple platforms."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    { Stack: "Backend/Cloud", progressPercentage: "90%" },
    { Stack: "Frontend", progressPercentage: "85%" },
    { Stack: "AI / ML", progressPercentage: "80%" }
  ],
  displayCodersrank: false 
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineering Intern",
      company: "Chakravyuha Dynamics Pvt. Ltd. (Remote)",
      companylogo: require("./assets/images/cdplLogo.png"),
      date: "March 2026 – May 2026",
      desc: "Built 5+ production web pages with modular React.js components. Set up end-to-end CI/CD pipelines via Vercel maintaining 99.9% uptime.",
      descBullets: [
        "Collaborated with a 3-engineer team to design and ship 3 new site sections.",
        "Reduced page load times by 25% and reduced deployment cycle times by 30%."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME IMPACTFUL PROJECTS I HAVE BUILT",
  projects: [
    {
      image: require("./assets/images/rag_pipeline.png"),
      projectName: "Self-Healing RAG Pipeline",
      projectDesc: "Engineered a self-healing RAG pipeline using LangGraph, Pinecone, and FastAPI. Automated retrieval-validation-retry loops reduced hallucinations by 30%.",
      footerLink: [
        {
          name: "View Source",
          url: "https://github.com/VURE-SATHVIK-22/Self-Healing-RAG-Pipeline"
        }
      ]
    },
    {
      image: require("./assets/images/code_review_ai.png"),
      projectName: "CodeReview AI",
      projectDesc: "AI-powered code review platform to analyze source code quality, detect vulnerabilities, and generate automated suggestions. Built with Java, Spring Boot, React, and Redis.",
      footerLink: [
        {
          name: "View Source",
          url: "https://github.com/VURE-SATHVIK-22/CodeReview-AI"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements & Certifications 🏆"),
  subtitle:
    "Certifications and Hackathons.",

  achievementsCards: [
    {
      title: "Artificial Intelligence Fundamentals",
      subtitle: "IBM SkillsBuild",
      image: "https://images.credly.com/images/82b908e1-fdcd-4785-9d32-97f11ccbcf08/image.png",
      imageAlt: "AI Fundamentals",
      footerLink: [
        {
          name: "View Credential",
          url: "https://www.credly.com/badges/7b421657-3a57-4c90-bde3-0b1b8e52dca4"
        }
      ]
    },
    {
      title: "Introduction to Data Science",
      subtitle: "Cisco",
      image: "https://images.credly.com/images/b38a42e0-dc58-4ce2-b6c0-28d978e8aaad/image.png",
      imageAlt: "Data Science",
      footerLink: [
        {
          name: "View Credential",
          url: "https://www.credly.com/badges/85557226-2759-4e44-9444-5b7208938708"
        }
      ]
    },
    {
      title: "AWS Educate Getting Started with Networking",
      subtitle: "Amazon Web Services Training and Certification",
      image: "https://images.credly.com/images/f5095707-7683-4886-940c-3e8e4a2085ca/blob",
      imageAlt: "AWS Networking",
      footerLink: [
        {
          name: "View Credential",
          url: "https://www.credly.com/badges/7f57d206-deb5-44b7-a08e-f536d36ea786"
        }
      ]
    },
    {
      title: "AWS Educate Getting Started with Storage",
      subtitle: "Amazon Web Services Training and Certification",
      image: "https://images.credly.com/images/3b1b42e6-dfc2-492b-90df-8058096cb93d/blob",
      imageAlt: "AWS Storage",
      footerLink: [
        {
          name: "View Credential",
          url: "https://www.credly.com/badges/f10d5ecc-4f91-4c62-a725-9dcd7f764beb"
        }
      ]
    },
    {
      title: "AWS Educate Getting Started with Compute",
      subtitle: "Amazon Web Services Training and Certification",
      image: "https://images.credly.com/images/7b08cc0e-064b-407d-b70e-323509c3e474/blob",
      imageAlt: "AWS Compute",
      footerLink: [
        {
          name: "View Credential",
          url: "https://www.credly.com/badges/5877fb9d-1f2b-4077-b85e-4479360aa0bc"
        }
      ]
    },
    {
      title: "Customer Engagement: Communication & Personality Dynamics",
      subtitle: "IBM SkillsBuild",
      image: "https://images.credly.com/images/590b167d-83f8-4a54-b83d-fcb9b5200c88/twitter_thumb_201604_Customer_Engagement-_Communication_and_Personality_Dynamics.png",
      imageAlt: "Customer Engagement",
      footerLink: [
        {
          name: "View Credential",
          url: "https://www.credly.com/badges/8ab12516-e4dc-4ccc-9304-aec492fdcf8f"
        }
      ]
    },
    {
      title: "Customer Engagement: Problem Solving & Process Controls",
      subtitle: "IBM SkillsBuild",
      image: "https://images.credly.com/images/351a77ac-8c57-4dde-b479-6fa153ed6ce7/Customer_Engagement-_Problem_Solving_and_Process_Controls.png",
      imageAlt: "Problem Solving",
      footerLink: [
        {
          name: "View Credential",
          url: "https://www.credly.com/badges/76ea90f1-2db0-4f9e-b5bf-05ec323d32ae"
        }
      ]
    },
    {
      title: "Hackathon Finalist",
      subtitle: "Top 6 of 700+ teams (4,000+ participants) in National Hackathon. Top 5 of 200+ in Vignan Hackathon.",
      image: "https://logo.clearbit.com/devpost.com",
      imageAlt: "Hackathon Logo",
      footerLink: []
    },
    {
      title: "AI & Data Engineering Bootcamps",
      subtitle: "Completed AI Engineer Bootcamp and Data Engineer Bootcamp on Udemy.",
      image: "https://logo.clearbit.com/udemy.com",
      imageAlt: "Bootcamp Logo",
      footerLink: []
    },
    {
      title: "Hackathon Participant",
      subtitle: "Participated in Hackathon at GITAM Deemed University (May 2024).",
      image: "https://logo.clearbit.com/gitam.edu",
      imageAlt: "Gitam Hackathon",
      footerLink: []
    },
    {
      title: "Hackathon Participant",
      subtitle: "Participated in Hackathon at BV Raju Institute of Technology (BVRIT) (May 2024).",
      image: "https://logo.clearbit.com/bvrit.ac.in",
      imageAlt: "BVRIT Hackathon",
      footerLink: []
    },
    {
      title: "Ideathon Organizer",
      subtitle: "Vice President of NextGen Innovators Club. Played a key role in organizing an Ideathon, encouraging students to innovate (Nov 2024 - Present).",
      image: "https://img.icons8.com/color/256/innovation.png",
      imageAlt: "Ideathon Organizer",
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: "",

  talks: [
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "",

  podcast: [
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-8688059009",
  email_address: "vuresathvik22@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
