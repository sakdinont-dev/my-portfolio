import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Carousel } from "@/components/ui/carousel";

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

export default function RootPage() {
  const techStacks = [
    {
      title: "TypeScript",
      description:
        "Typesafe development for React and Next.js, improving reliability and developer confidence.",
    },
    {
      title: "React",
      description:
        "Component-driven UI with declarative rendering and reusable interface building blocks.",
    },
    {
      title: "Next.js",
      description:
        "Server-side rendering, routing, and full-stack capabilities for modern web apps.",
    },
    {
      title: "Tailwind CSS",
      description:
        "Utility-first styling for rapid UI design and consistent responsive layouts.",
    },
    {
      title: "lucide-react",
      description:
        "Lightweight icons with custom styling for polished interface details.",
    },
    {
      title: "Vercel",
      description:
        "Seamless deployment and instant previews for fast front-end delivery.",
    },
    {
      title: "GitHub",
      description:
        "Source control and collaboration tools powering code versioning and CI workflows.",
    },
  ];

  return (
    <div className="space-y-8">
      <section className="rounded-3xl border border-border bg-card/90 p-8 shadow-xl shadow-black/5 backdrop-blur-xl dark:bg-zinc-950/90">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-4">
            <div>
              <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-3xl uppercase">
                Welcome to my portfolio
              </h1>
              <p className="mt-4 max-w-4xl text-lg leading-8 text-muted-foreground">
                I build accessible, polished web applications with Next.js,
                TypeScript, and thoughtful UI design. Explore the sections below
                to learn about my work, experience, and how to contact me.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-border bg-card/90 p-8 shadow-xl shadow-black/5 backdrop-blur-xl dark:bg-zinc-950/90">
        <div className="space-y-6">
          <div>
            <h2 className="text-3xl font-semibold text-foreground">
              Tech Stack
            </h2>
            <p className="mt-2 max-w-4xl leading-8 text-muted-foreground">
              I build modern portfolio and app experiences with a strong focus
              on TypeScript, React, Next.js, Tailwind CSS, and polished UI
              components. This site also showcases iconography from lucide,
              deployment on Vercel, GitHub-based workflows, and interactive
              carousel components.
            </p>
            <div className="mt-6">
              <Carousel
                items={techStacks.map((tech) => (
                  <Card
                    key={tech.title}
                    className="min-w-[18rem] flex-shrink-0 snap-start border-border"
                  >
                    <CardHeader>
                      <CardTitle>{tech.title}</CardTitle>
                      <CardDescription>Core role in the stack</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm leading-7 text-muted-foreground">
                        {tech.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h3 className="text-2xl font-semibold text-foreground">
                  Featured Projects
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Highlighting recent work and reusable UI components built for
                  modern portfolio experiences.
                </p>
              </div>
            </div>

            <div className="grid gap-4 lg:grid-cols-3">
              {projects.map((project) => (
                <Card key={project.title} className="border-border">
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.tech}</CardDescription>
                  </CardHeader>
                  <CardContent>{project.description}</CardContent>
                  <CardFooter>
                    <p className="text-sm font-medium text-primary">
                      View details
                    </p>
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
