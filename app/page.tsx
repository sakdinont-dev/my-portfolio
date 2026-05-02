"use client";

import { useState } from "react";

const tabs = [
  { id: "home", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "about", label: "About Me" },
  { id: "contact", label: "Contact Me" },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-10 px-6 py-10 sm:px-10 lg:px-16">
        <section className="rounded-3xl border border-border bg-card/90 p-8 shadow-xl shadow-black/5 backdrop-blur-xl dark:bg-zinc-950/90">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="space-y-4">
              <p className="inline-flex rounded-full border border-primary/40 bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
                Portfolio
              </p>
              <div>
                <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                  Hi, I&apos;m Your Name.
                </h1>
                <p className="mt-4 max-w-2xl text-lg leading-8 text-muted-foreground">
                  I build accessible, polished web applications with Next.js, TypeScript, and thoughtful UI design. Explore the sections below to learn about my work, experience, and how to contact me.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 rounded-3xl border border-border bg-background/80 p-4 text-sm text-muted-foreground shadow-sm dark:bg-zinc-950/90">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                    activeTab === tab.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted/10 text-foreground hover:bg-muted"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-border bg-card/90 p-8 shadow-xl shadow-black/5 backdrop-blur-xl dark:bg-zinc-950/90">
          {activeTab === "home" && (
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-foreground">Home</h2>
              <p className="max-w-3xl leading-8 text-muted-foreground">
                Welcome to my portfolio. I am a web developer specializing in modern interfaces, fast performance, and polished user experiences. This site highlights my skills, experience, and recent projects.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-border bg-muted/10 p-6">
                  <h3 className="text-lg font-semibold text-foreground">What I do</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    Build scalable web apps using React, Next.js, and TypeScript with a focus on accessibility and maintainability.
                  </p>
                </div>
                <div className="rounded-3xl border border-border bg-muted/10 p-6">
                  <h3 className="text-lg font-semibold text-foreground">Why work with me</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    I deliver thoughtful design and reliable code that keeps users engaged while teams move quickly.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "experience" && (
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-foreground">Experience</h2>
              <div className="space-y-4">
                {[
                  {
                    role: "Frontend Engineer",
                    company: "Tech Startup",
                    period: "2024 - Present",
                    details: "Built dashboard UI components with responsive charts, forms, and performance optimizations for enterprise users.",
                  },
                  {
                    role: "Web Developer",
                    company: "Digital Agency",
                    period: "2022 - 2024",
                    details: "Delivered marketing sites and client landing pages with strong conversion focus and fast load times.",
                  },
                  {
                    role: "UI Developer",
                    company: "Product Studio",
                    period: "2020 - 2022",
                    details: "Created reusable component libraries and design system patterns for internal teams.",
                  },
                ].map((item) => (
                  <article key={`${item.role}-${item.company}`} className="rounded-3xl border border-border bg-muted/10 p-6">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">{item.role}</h3>
                        <p className="text-sm text-muted-foreground">{item.company}</p>
                      </div>
                      <p className="text-sm font-medium text-primary">{item.period}</p>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-muted-foreground">{item.details}</p>
                  </article>
                ))}
              </div>
            </div>
          )}

          {activeTab === "about" && (
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-foreground">About Me</h2>
              <p className="max-w-3xl leading-8 text-muted-foreground">
                I enjoy turning complex problems into simple, beautiful experiences. My work is informed by accessibility best practices, strong performance, and thoughtful interaction design.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-border bg-muted/10 p-6">
                  <h3 className="text-lg font-semibold text-foreground">Skills</h3>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    <li>React / Next.js</li>
                    <li>TypeScript</li>
                    <li>Tailwind CSS</li>
                    <li>Accessibility</li>
                    <li>API Integration</li>
                  </ul>
                </div>
                <div className="rounded-3xl border border-border bg-muted/10 p-6">
                  <h3 className="text-lg font-semibold text-foreground">Tools</h3>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    <li>Vercel</li>
                    <li>GitHub</li>
                    <li>Figma</li>
                    <li>Prisma</li>
                    <li>Supabase</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === "contact" && (
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-foreground">Contact Me</h2>
              <p className="max-w-3xl leading-8 text-muted-foreground">
                Let&apos;s build something great together. Reach out if you want to collaborate on a project, need help building a web app, or want to ask a question.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-border bg-muted/10 p-6">
                  <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Email</p>
                  <p className="mt-3 text-base font-medium text-foreground">you@example.com</p>
                </div>
                <div className="rounded-3xl border border-border bg-muted/10 p-6">
                  <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">LinkedIn</p>
                  <p className="mt-3 text-base font-medium text-foreground">linkedin.com/in/your-profile</p>
                </div>
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
