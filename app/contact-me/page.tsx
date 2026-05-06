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
              <a href="mailto:b.sakdinont@gmail.com" className="mt-3 block text-base font-medium text-foreground transition-colors hover:text-primary">
                b.sakdinont@gmail.com
              </a>
            </div>
            <div className="rounded-3xl border border-border bg-muted/10 p-6">
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                Phone
              </p>
              <a href="tel:+66985631337" className="mt-3 block text-base font-medium text-foreground transition-colors hover:text-primary">
                098-563-1337
              </a>
            </div>
            <div className="rounded-3xl border border-border bg-muted/10 p-6 sm:col-span-2">
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                Address
              </p>
              <p className="mt-3 text-base font-medium leading-relaxed text-foreground">
                989/250 Bangpu Villa 2, Moo 7, Soi Witthayukanbin, Sukhumvit Road, Samut Prakan 10280
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
