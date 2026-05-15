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
    title: "Netka EnTrust - E-Form System",
    role: "Software Developer",
    period: "Internship",
    details:
      "Designed and developed a customizable electronic form system (e-form) using the FormEngine library. Implemented multi-step approval workflows featuring user assignments and automated email notifications. Developed interactive dashboards using Recharts to visualize form submission results and integrated a comprehensive audit logging system to track all user activities and ensure e-form data integrity.",
    skills: [
      "React",
      "Next.js",
      "PostgreSQL",
      "FormEngine",
      "Requirement Analysis",
      "Recharts",
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
      "Developed an intelligent bed sensor system for hospitals. As the Project Manager, we collaboratively gathered user requirements and I lead the development process using Scrum methodology with task backlogs and sprint planning. Built the front-end with Vue.js and Quasar Framework, and the back-end with NestJS. Implemented an AI model using Python and TensorFlow LSTM to predict 5 distinct patient postures (out of bed, sitting, center, left, right) and integrated a real-time notification system to alert nurses and relatives when a patient is in danger.",
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
    period: "Group Project (Boot Camp)",
    details:
      "Collaborated in a Full-stack development of cafe management system covering Customer View and Purchase, Staff, and Owner. As a team, we designed a database schema, implemented the front-end using Vue.js and Vuetify, and the back-end using NestJS and SQLite. Applied SDLC with feature planning and analyzed backend data to visualize sales trends and improve business decisions. Login Authentication and Stock Management modules. Designed and developed the system architecture to support multi-branch operations with granular role-based user, ensuring secure and efficient data authorization across different user levels and locations.",
    link: "https://gitlab.com/cs-bootcamp-dcoffee",
    skills: ["Vue.js", "Vuetify", "NestJS", "SQLite", "Figma", "Data Analysis"],
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
