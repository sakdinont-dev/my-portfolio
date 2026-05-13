import Image from "next/image";

export default function AboutMePage() {
  return (
    <div className="space-y-8">
      <section className="rounded-3xl border border-border bg-card/90 p-8 shadow-xl shadow-black/5 backdrop-blur-xl dark:bg-zinc-950/90">
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-foreground uppercase">
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
              <h3 className="text-2xl font-semibold text-foreground">
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
      </section>
    </div>
  );
}
