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
  return (
    <div className="px-6 py-8 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        {children}
      </div>
    </div>
  );
}