import { Network, Database, type LucideIcon } from "lucide-react";

export type Logo = {
  name: string;
  icon?: string;
  LucideIcon?: LucideIcon;
  invert: boolean;
};

export const skills: Logo[] = [
  {
    name: "React",
    icon: "https://cdn.simpleicons.org/react/61DAFB",
    invert: false,
  },
  {
    name: "Next.js",
    icon: "https://cdn.simpleicons.org/nextdotjs/000000",
    invert: true,
  },
  {
    name: "TypeScript",
    icon: "https://cdn.simpleicons.org/typescript/3178C6",
    invert: false,
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
    invert: false,
  },
  { name: "REST API", LucideIcon: Network, invert: false },
  {
    name: "Python",
    icon: "https://cdn.simpleicons.org/python/3670A0",
    invert: false,
  },
  {
    name: "Go",
    icon: "https://cdn.simpleicons.org/go/00ADD8",
    invert: false,
  },
  {
    name: "NestJS",
    icon: "https://cdn.simpleicons.org/nestjs/EF3E28",
    invert: false,
  },
  {
    name: "Node.js",
    icon: "https://cdn.simpleicons.org/nodedotjs/339933",
    invert: false,
  },
  {
    name: "SQL",
    LucideIcon: Database,
    invert: false,
  },
  {
    name: "Drizzle",
    icon: "https://cdn.simpleicons.org/drizzle/C5F74F",
    invert: false,
  },
];

export const tools: Logo[] = [
  {
    name: "Vercel",
    icon: "https://cdn.simpleicons.org/vercel/000000",
    invert: true,
  },
  {
    name: "GitHub",
    icon: "https://cdn.simpleicons.org/github/000000",
    invert: true,
  },
  {
    name: "Figma",
    icon: "https://cdn.simpleicons.org/figma/F24E1E",
    invert: false,
  },
  {
    name: "Lucidchart",
    icon: "/img/logo/lucidchart.png",
    invert: false,
  },
  {
    name: "Miro",
    icon: "https://cdn.simpleicons.org/miro/000000",
    invert: true,
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.simpleicons.org/postgresql/446D94",
    invert: false,
  },
  {
    name: "MySQL",
    icon: "https://cdn.simpleicons.org/mysql/4479A1",
    invert: false,
  },
  {
    name: "Postman",
    icon: "https://cdn.simpleicons.org/postman/FF6C37",
    invert: false,
  },
  {
    name: "Drizzle",
    icon: "https://cdn.simpleicons.org/drizzle/C5F74F",
    invert: false,
  },
];
