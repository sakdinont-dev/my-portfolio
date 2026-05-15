import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Carousel } from "@/components/ui/carousel";
import { ExternalLink } from "lucide-react";
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
        "Lightweight and open-source icons for a polished interface design.",
    },
    {
      title: "Vercel",
      type: "Cloud Platform",
      description:
        "Seamless deployment and instant previews for fast front-end delivery.",
    },
    {
      title: "GitHub",
      type: "Version Control",
      description:
        "Source control and collaboration platform powering code versioning and CI/CD workflows.",
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
              <p className="mt-4 max-w-5xl text-lg sm:text-xl leading-relaxed text-muted-foreground">
                I am a passionate Software Developer dedicated to crafting
                high-performance, user-centric web applications. This portfolio
                serves as a showcase of my technical journey, featuring my
                projects, professional experience, and the skills I have honed
                along the way. Feel free to explore my work and reach out for
                collaboration.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-border bg-card/90 p-6 sm:p-8 shadow-xl shadow-black/5 backdrop-blur-xl dark:bg-zinc-950/90">
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
              Portfolio Tech Stack
              <div className="cursor-pointer">
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
            <p className="mt-4 max-w-5xl text-base sm:text-lg leading-relaxed text-muted-foreground">
              This website was built from the ground up using modern web
              technologies to ensure optimal performance for user experience.
              Below are the core tools and frameworks powering this site.
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
        </div>
      </section>
    </div>
  );
}
