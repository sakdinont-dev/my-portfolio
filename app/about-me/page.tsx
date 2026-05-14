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
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <Image
              src="/img/me/img1.JPEG"
              alt="Sakdinont Boonma"
              width={200}
              height={200}
              className="rounded-full object-cover"
            />
            <div className="space-y-4 flex-1">
              <h3 className="text-xl sm:text-2xl font-semibold text-foreground">
                My name is Sakdinont Boonma.
              </h3>
              <p className="max-w-5xl leading-8 text-muted-foreground">
                I enjoy turning complex problems into simple, beautiful
                experiences. My work is informed by accessibility best
                practices, strong performance, and thoughtful interaction
                design.
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
