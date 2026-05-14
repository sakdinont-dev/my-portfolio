"use client";

import { ExternalLink, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { experiences } from "@/data/experience";

export default function ExperiencePage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <div className="space-y-8">
        <section className="rounded-3xl border border-border bg-card/90 p-6 sm:p-8 shadow-xl shadow-black/5 backdrop-blur-xl dark:bg-zinc-950/90">
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-semibold text-foreground uppercase">
              Experience & Projects
            </h2>
            <div className="space-y-6">
              {experiences.map((item) => (
                <article
                  key={item.title}
                  className="group relative rounded-3xl border border-border bg-muted/10 p-5 sm:p-6 transition-colors hover:bg-muted/20"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="space-y-1">
                      <h3 className="text-lg sm:text-xl font-semibold text-foreground">
                        {item.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                        <span className="font-medium text-primary">
                          {item.role}
                        </span>
                        <span>&bull;</span>
                        <span>{item.period}</span>
                      </div>
                    </div>
                    {item.link && (
                      <Link
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex shrink-0 items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary transition-colors hover:bg-primary/20"
                      >
                        Repository
                        <ExternalLink className="h-3.5 w-3.5" />
                      </Link>
                    )}
                  </div>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">
                    {item.details}
                  </p>
                  {item.images && item.images.length > 0 && (
                    <div className="mt-6 flex gap-4 overflow-x-auto pb-4 snap-x custom-scrollbar">
                      {item.images.map((imgSrc, idx) => (
                        <button
                          key={idx}
                          onClick={() => setSelectedImage(imgSrc)}
                          className="relative h-40 w-64 sm:h-48 sm:w-80 shrink-0 snap-center overflow-hidden rounded-xl border border-border bg-muted/50 cursor-pointer"
                        >
                          <Image
                            src={imgSrc}
                            alt={`${item.title} screenshot ${idx + 1}`}
                            fill
                            className="object-cover transition-transform duration-500 hover:scale-105"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                  {item.skills && (
                    <div className="mt-6 flex flex-wrap gap-2">
                      {item.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-lg bg-background px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm ring-1 ring-inset ring-border"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute right-4 top-4 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
          >
            <X className="h-6 w-6 cursor-pointer hover:text-primary" />
          </button>
          <div
            className="relative h-full max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Full screen screenshot"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
