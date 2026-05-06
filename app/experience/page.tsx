import { ExternalLink } from "lucide-react";
import Link from "next/link";

export default function ExperiencePage() {
  const experiences = [
    {
      title: "Bed Sensor Intelligence Project",
      role: "Business Analyst",
      period: "Group Project",
      details:
        "Developed an intelligent bed sensor system for hospitals. Gathered user requirements from doctors, nurses, and specialist IoT developers. Built the front-end using Vue.js with Quasar Framework, and the back-end using NestJS. Implemented an AI model using Python and TensorFlow for predicting patient postures. Followed Scrum methodology with task backlog and sprint planning.",
      link: "https://gitlab.com/8bit-bed-sensor",
      skills: ["Vue.js", "Quasar", "NestJS", "Python", "TensorFlow", "IoT", "Scrum"],
    },
    {
      title: "Cafe Management System (CS Boot Camp 2024)",
      role: "Full-stack Developer",
      period: "Boot Camp",
      details:
        "Developed a full-stack website cafe management system covering Customer View and Purchase, Staff, and Owner workflows. Worked as a team to design database schema, implemented front-end using Vue.js and Vuetify, back-end using NestJS and SQLite. Applied SDLC with feature planning and analyzed backend data to visualize sales trends and improve business decisions.",
      link: "https://gitlab.com/cs-bootcamp-dcoffee",
      skills: ["Vue.js", "Vuetify", "NestJS", "SQLite", "SDLC"],
    },
    {
      title: "Cafe Management System",
      role: "Developer",
      period: "First Project",
      details:
        "First group project after learning about software development. Created a basic cafe management system with menu ordering and stock management using Java Swing. Designed wireframes in Figma, implemented in Java, and learned to use Git for version control in a team.",
      link: "https://gitlab.com/65160195/project-cafe-management-system",
      skills: ["Java Swing", "Figma", "Git"],
    },
  ];

  return (
    <div className="space-y-8">
      <section className="rounded-3xl border border-border bg-card/90 p-8 shadow-xl shadow-black/5 backdrop-blur-xl dark:bg-zinc-950/90">
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-foreground">Experience & Projects</h2>
          <div className="space-y-6">
            {experiences.map((item) => (
              <article
                key={item.title}
                className="group relative rounded-3xl border border-border bg-muted/10 p-6 transition-colors hover:bg-muted/20"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="space-y-1">
                    <h3 className="text-xl font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                      <span className="font-medium text-primary">{item.role}</span>
                      <span>&bull;</span>
                      <span>{item.period}</span>
                    </div>
                  </div>
                  {item.link && (
                    <Link
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex shrink-0 items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary transition-colors hover:bg-primary/20"
                    >
                      Repository
                      <ExternalLink className="h-3.5 w-3.5" />
                    </Link>
                  )}
                </div>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  {item.details}
                </p>
                {item.skills && (
                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg bg-background px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm ring-1 ring-inset ring-border"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
