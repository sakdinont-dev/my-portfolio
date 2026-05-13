"use client";

import { ExternalLink, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function ExperiencePage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const experiences = [
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
        "Email Sending",
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

  return (
    <>
      <div className="space-y-8">
        <section className="rounded-3xl border border-border bg-card/90 p-8 shadow-xl shadow-black/5 backdrop-blur-xl dark:bg-zinc-950/90">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-foreground uppercase">
              Experience & Projects
            </h2>
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
                        <span className="font-medium text-primary">
                          {item.role}
                        </span>
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
                  {item.images && item.images.length > 0 && (
                    <div className="mt-6 flex gap-4 overflow-x-auto pb-4 snap-x custom-scrollbar">
                      {item.images.map((imgSrc, idx) => (
                        <button
                          key={idx}
                          onClick={() => setSelectedImage(imgSrc)}
                          className="relative h-48 w-80 shrink-0 snap-center overflow-hidden rounded-xl border border-border bg-muted/50 cursor-pointer"
                        >
                          <Image
                            src={imgSrc}
                            alt={`${item.title} screenshot ${idx + 1}`}
                            fill
                            className="object-cover transition-transform duration-500 hover:scale-105"
                          />
                        </button>
                      ))}
                    </div>
                  )}
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

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute right-4 top-4 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
          >
            <X className="h-6 w-6 cursor-pointer hover:text-primary" />
          </button>
          <div
            className="relative h-full max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Full screen screenshot"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
