export default function ExperiencePage() {
  const experiences = [
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
  ];

  return (
    <div className="space-y-8">
      <section className="rounded-3xl border border-border bg-card/90 p-8 shadow-xl shadow-black/5 backdrop-blur-xl dark:bg-zinc-950/90">
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-foreground">Experience</h2>
          <div className="space-y-4">
            {experiences.map((item) => (
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
      </section>
    </div>
  );
}
