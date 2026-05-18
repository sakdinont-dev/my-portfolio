import Image from "next/image";
import { skills, tools } from "@/data/about-me";

export default function AboutMePage() {
  return (
    <div className="space-y-8">
      <section className="rounded-3xl border border-border bg-card/90 p-6 sm:p-8 shadow-xl shadow-black/5 backdrop-blur-xl dark:bg-zinc-950/90">
        <div className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground uppercase">
            About Me
          </h2>
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 rounded-3xl border border-border bg-muted/10 p-6 sm:p-10 relative overflow-hidden">
            <div className="relative shrink-0 group">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-purple-500/40 rounded-full opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
              <Image
                src="/img/me/img5.jpg"
                alt="Sakdinont Boonma"
                width={220}
                height={220}
                className="relative z-10 rounded-full object-cover ring-4 ring-background shadow-xl transition-transform duration-500 aspect-square"
              />
            </div>

            <div className="space-y-5 flex-1 text-center sm:text-left flex flex-col justify-center relative z-10">
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                Hi, I&apos;m{" "}
                <span className="text-primary">Sakdinont Boonma</span>.
              </h3>
              <p className="text-base sm:text-lg leading-relaxed text-muted-foreground max-w-3xl">
                I am a developer passionate about building applications and
                solving complex problems. I am eager to contribute to a
                professional development team, deliver high-quality software
                solutions, and further refine my technical expertise.
              </p>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-3xl border border-border bg-muted/10 p-6">
              <h3 className="mb-6 text-xl font-semibold text-foreground">
                Skills
              </h3>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                {skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-border bg-card/50 p-4 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md dark:bg-card/30"
                  >
                    {skill.icon ? (
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className={`h-8 w-8 transition-transform group-hover:scale-110 ${
                          skill.invert ? "dark:invert" : ""
                        }`}
                      />
                    ) : skill.LucideIcon ? (
                      <skill.LucideIcon className="h-8 w-8 text-foreground/80 transition-transform group-hover:scale-110" />
                    ) : null}
                    <span className="text-xs font-medium text-center text-foreground/80">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-border bg-muted/10 p-6">
              <h3 className="mb-6 text-xl font-semibold text-foreground">
                Tools
              </h3>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                {tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-border bg-card/50 p-4 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md dark:bg-card/30"
                  >
                    {tool.icon ? (
                      <img
                        src={tool.icon}
                        alt={tool.name}
                        className={`h-8 w-8 transition-transform group-hover:scale-110 ${
                          tool.invert ? "dark:invert" : ""
                        }`}
                      />
                    ) : tool.LucideIcon ? (
                      <tool.LucideIcon className="h-8 w-8 text-foreground/80 transition-transform group-hover:scale-110" />
                    ) : null}
                    <span className="text-xs font-medium text-center text-foreground/80">
                      {tool.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
