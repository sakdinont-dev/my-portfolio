"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme-button";
import { LanguagesToggle } from "./languages-button";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about-me", label: "About Me" },
  { href: "/experience", label: "Experience" },
  { href: "/contact-me", label: "Contact Me" },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <div className="sticky top-0 z-50 border-b border-border bg-[#EEEEEE]/55 text-slate-900 dark:bg-[#121212]/95 dark:text-slate-100 px-6 py-4 backdrop-blur-xl backdrop-saturate-150 shadow-sm shadow-black/5 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <div>
            <p className="text-md font-medium font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Portfolio
            </p>
            <p className="mt-1 text-2xl font-semibold text-foreground">
              Software Developer
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <nav className="flex gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-md transition-colors",
                  pathname === item.href
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <ThemeToggle />
          <LanguagesToggle />
        </div>
      </div>
    </div>
  );
}
