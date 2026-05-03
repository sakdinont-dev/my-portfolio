import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const projects = [
  {
    title: "Portfolio Web App",
    description:
      "A responsive, accessible portfolio built with Next.js, Tailwind CSS, and modern UI patterns to highlight your work.",
    tech: "Next.js · TypeScript · Tailwind CSS",
    href: "#",
  },
  {
    title: "Dashboard Experience",
    description:
      "A clean project dashboard with reusable cards, responsive layouts, and polished interaction details.",
    tech: "React · CSS Modules · API Integration",
    href: "#",
  },
  {
    title: "Marketing Landing Page",
    description:
      "A conversion-focused landing page with strong visuals, clear messaging, and mobile-friendly design.",
    tech: "HTML · CSS · Accessibility",
    href: "#",
  },
];

export default function MainPage() {
  return (
    <div className="space-y-8">
      <section className="rounded-3xl border border-border bg-card/90 p-8 shadow-xl shadow-black/5 backdrop-blur-xl dark:bg-zinc-950/90">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-4">
            <div>
              <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Hi, I&apos;m Your Name.
              </h1>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-muted-foreground">
                I build accessible, polished web applications with Next.js, TypeScript, and thoughtful UI design. Explore the sections below to learn about my work, experience, and how to contact me.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-border bg-card/90 p-8 shadow-xl shadow-black/5 backdrop-blur-xl dark:bg-zinc-950/90">
        <div className="space-y-6">
          <div>
            <h2 className="text-3xl font-semibold text-foreground">Welcome to my portfolio</h2>
            <p className="mt-2 max-w-3xl leading-8 text-muted-foreground">
              I am a web developer specializing in modern interfaces, fast performance, and polished user experiences. This site highlights my skills, experience, and recent projects.
            </p>
          </div>
          
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

          <div className="space-y-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h3 className="text-2xl font-semibold text-foreground">Featured Projects</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Highlighting recent work and reusable UI components built for modern portfolio experiences.
                </p>
              </div>
            </div>

            <div className="grid gap-4 lg:grid-cols-3">
              {projects.map((project) => (
                <Card key={project.title} className="border-border bg-background/80">
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.tech}</CardDescription>
                  </CardHeader>
                  <CardContent>{project.description}</CardContent>
                  <CardFooter>
                    <p className="text-sm font-medium text-primary">View details</p>
                    <a
                      href={project.href}
                      className="text-sm font-semibold text-primary transition hover:text-primary/80"
                    >
                      Open
                    </a>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
