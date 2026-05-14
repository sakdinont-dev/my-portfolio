export type Experience = {
  title: string;
  role: string;
  period: string;
  details: string;
  link?: string;
  skills: string[];
  images: string[];
};

export const experiences: Experience[] = [
  {
    title: "Netka EnTrust - E-form System",
    role: "Software Developer",
    period: "Internship",
    details:
      "Designed and developed an electronic form system (E-form) to replace traditional paper-based workflows. Conducted requirement gathering to understand internal business processes. Developed dynamic and responsive forms with validation logic to ensure data integrity. Focused on improving operational efficiency and streamlining data collection for organizational reporting.",
    skills: [
      "React",
      "Next.js",
      "PostgreSQL",
      "FormEngine",
      "Requirement Analysis",
      "ReChart",
      "UI/UX Design",
      "SMTP",
      "Figma",
      "Scrum",
    ],
    images: [
      "/img/experience/Internship/State Diagram.png",
      "/img/experience/Internship/image1.png",
      "/img/experience/Internship/image3.png",
      "/img/experience/Internship/image4.png",
      "/img/experience/Internship/ef_designer.png",
      "/img/experience/Internship/image2.png",
    ],
  },
  {
    title: "Bed Sensor Intelligence Project",
    role: "Full-stack Developer / Project Manager",
    period: "Group Final Project",
    details:
      "Developed an intelligent bed sensor system for hospitals. Gathered user requirements from doctors, nurses, and specialist IoT developers. Built the front-end using Vue.js with Quasar Framework, and the back-end using NestJS. Implemented an AI model using Python and TensorFlow for predicting patient postures. Followed Scrum methodology with task backlog and sprint planning.",
    link: "https://gitlab.com/8bit-bed-sensor",
    skills: [
      "Vue.js",
      "Quasar",
      "NestJS",
      "MySQL",
      "Deep Learning",
      "IoT",
      "Scrum",
    ],
    images: [
      "/img/experience/FinalProject/1.png",
      "/img/experience/FinalProject/2.png",
      "/img/experience/FinalProject/3.png",
      "/img/experience/FinalProject/4.png",
      "/img/experience/FinalProject/5.png",
      "/img/experience/FinalProject/6.png",
      "/img/experience/FinalProject/7.png",
      "/img/experience/FinalProject/8.png",
    ],
  },
  {
    title: "Cafe Management System (CS Boot Camp 2024)",
    role: "Full-stack Developer",
    period: "Project Boot Camp",
    details:
      "Developed a full-stack website cafe management system covering Customer View and Purchase, Staff, and Owner workflows. Worked as a team to design database schema, implemented front-end using Vue.js and Vuetify, back-end using NestJS and SQLite. Applied SDLC with feature planning and analyzed backend data to visualize sales trends and improve business decisions.",
    link: "https://gitlab.com/cs-bootcamp-dcoffee",
    skills: [
      "Vue.js",
      "Vuetify",
      "NestJS",
      "SQLite",
      "Figma",
      "Data Analysis",
    ],
    images: [
      "/img/experience/Figma/image (3).png",
      "/img/experience/Figma/image (4).png",
      "/img/experience/CSBootCamp/image (3).png",
      "/img/experience/CSBootCamp/Screenshot 2025-07-06 152946.png",
      "/img/experience/CSBootCamp/Screenshot 2025-07-06 154938.png",
      "/img/experience/CSBootCamp/Screenshot 2025-07-06 160937.png",
    ],
  },
];
