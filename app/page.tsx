import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Carousel } from "@/components/ui/carousel";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function RootPage() {
  const techStacks = [
    {
      title: "TypeScript",
      type: "Programming Language",
      description:
        "Typesafe development for React and Next.js, improving reliability and developer confidence.",
    },
    {
      title: "React",
      type: "Frontend Library",
      description:
        "Component-driven UI with declarative rendering and reusable interface building blocks.",
    },
    {
      title: "Nextjs",
      type: "Framework",
      description:
        "Server-side rendering, routing, and full-stack capabilities for modern web apps.",
    },
    {
      title: "TailwindCSS",
      type: "CSS Framework",
      description:
        "Utility-first styling for rapid UI design and consistent responsive layouts.",
    },
    {
      title: "lucideIcon",
      type: "Icon Library",
      description:
        "Lightweight icons with custom styling for polished interface details.",
    },
    {
      title: "Vercel",
      type: "Deployment Platform",
      description:
        "Seamless deployment and instant previews for fast front-end delivery.",
    },
    {
      title: "GitHub",
      type: "Version Control",
      description:
        "Source control and collaboration tools powering code versioning and CI workflows.",
    },
  ];

  const getLogo = (title: string) => {
    const logos: Record<string, string> = {
      TypeScript: "https://cdn.simpleicons.org/typescript/3178C6",
      React: "https://cdn.simpleicons.org/react/61DAFB",
      Nextjs: "https://cdn.simpleicons.org/nextdotjs/000000",
      TailwindCSS: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
      lucideIcon: "https://cdn.simpleicons.org/lucide/000000",
      Vercel: "https://cdn.simpleicons.org/vercel/000000",
      GitHub: "https://cdn.simpleicons.org/github/000000",
    };
    return logos[title] || null;
  };

  return (
    <div className="space-y-8">
      <section className="rounded-3xl border border-border bg-card/90 p-6 sm:p-8 shadow-xl shadow-black/5 backdrop-blur-xl dark:bg-zinc-950/90">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-4">
            <div>
              <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl uppercase">
                Welcome to my portfolio
              </h1>
              <p className="mt-4 max-w-5xl text-lg leading-8 text-muted-foreground">
                I build accessible, polished web applications with Next.js,
                TypeScript, and thoughtful UI design. Explore the sections below
                to learn about my work, experience, and how to contact me.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-border bg-card/90 p-6 sm:p-8 shadow-xl shadow-black/5 backdrop-blur-xl dark:bg-zinc-950/90">
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-foreground flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
              Tech Stack
              <div>
                <Link
                  href="https://github.com/sakdinont-dev/my-portfolio.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary transition-colors hover:bg-primary/20"
                >
                  Repository
                  <ExternalLink className="h-3.5 w-3.5" />
                </Link>
              </div>
            </h2>
            <p className="mt-2 max-w-5xl leading-8 text-muted-foreground">
              I build modern portfolio and app experiences with a strong focus
              on TypeScript, React, Next.js, Tailwind CSS, and polished UI
              components. This site also showcases iconography from lucide,
              deployment on Vercel, GitHub-based workflows, and interactive
              carousel components.
            </p>
            <div className="mt-6">
              <Carousel
                className="max-w-5xl px-4"
                items={techStacks.map((stack) => (
                  <Card
                    key={stack.title}
                    className="mx-auto w-full max-w-3xl border-border"
                  >
                    <CardHeader>
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <CardTitle>{stack.title}</CardTitle>
                        {getLogo(stack.title) && (
                          <img
                            src={getLogo(stack.title) as string}
                            alt={stack.title}
                            width={40}
                            height={40}
                            className={`rounded-full border border-border bg-muted/10 p-2 ${
                              [
                                "Nextjs",
                                "Vercel",
                                "GitHub",
                                "lucideIcon",
                              ].includes(stack.title)
                                ? "dark:invert"
                                : ""
                            }`}
                          />
                        )}
                      </div>
                      <CardDescription>{stack.type}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm leading-7 text-muted-foreground">
                        {stack.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              />
            </div>
          </div>

          {/* <div className="space-y-6">
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
          </div> */}
        </div>
      </section>
    </div>
  );
}
