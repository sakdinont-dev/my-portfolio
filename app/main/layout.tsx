import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Portfolio",
  description: "A portfolio site showcasing projects, skills, and contact information.",
};

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}