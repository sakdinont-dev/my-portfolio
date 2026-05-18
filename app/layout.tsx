import type { Metadata } from "next";
import { notoSansThai } from "@/font/noto-sans-thai";
import Navigation from "@/components/navigation";
import { ThemeProvider } from "@/lib/theme/theme-provider";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio - Sakdinont Boonma",
  description:
    "A portfolio site showcasing projects, skills, and contact information.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className={`${notoSansThai.variable} h-full antialiased`}>
      <body className="min-h-screen bg-background text-foreground font-sans">
        <ThemeProvider>
          <Navigation />
          <main className="px-6 py-8 sm:px-10 lg:px-16">
            <div className="mx-auto max-w-6xl">{children}</div>
          </main>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
