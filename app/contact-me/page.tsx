export default function ContactMePage() {
  return (
    <div className="space-y-8">
      <section className="rounded-3xl border border-border bg-card/90 p-8 shadow-xl shadow-black/5 backdrop-blur-xl dark:bg-zinc-950/90">
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-foreground">Contact Me</h2>
          <p className="max-w-3xl leading-8 text-muted-foreground">
            Let&apos;s build something great together. Reach out if you want to
            collaborate on a project, need help building a web app, or want to
            ask a question.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-border bg-muted/10 p-6">
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                Email
              </p>
              <p className="mt-3 text-base font-medium text-foreground">
                you@example.com
              </p>
            </div>
            <div className="rounded-3xl border border-border bg-muted/10 p-6">
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                LinkedIn
              </p>
              <p className="mt-3 text-base font-medium text-foreground">
                linkedin.com/in/your-profile
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
