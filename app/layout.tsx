import type { Metadata } from "next";
import { notoSansThai } from "@/font/noto-sans-thai";
import Navigation from "@/components/navigation";
import "./globals.css";

export const metadata: Metadata = {
  title: "MYPortfolio",
  description: "A portfolio site showcasing projects, skills, and contact information.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className={`${notoSansThai.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <Navigation />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
