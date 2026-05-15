"use client";

import { ExternalLink, X, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { experiences } from "@/data/experience";

export default function ExperiencePage() {
  const [imageList, setImageList] = useState<{
    images: string[];
    index: number;
  } | null>(null);

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
                      <div className="w-fit">
                        <Link
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex shrink-0 items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary transition-colors hover:bg-primary/20"
                        >
                          Repository
                          <ExternalLink className="h-3.5 w-3.5" />
                        </Link>
                      </div>
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
                          onClick={() =>
                            setImageList({ images: item.images!, index: idx })
                          }
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

      {/* Image Modal */}
      {imageList && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={() => setImageList(null)}
        >
          <button
            className="absolute right-4 top-4 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70 z-50"
            onClick={(e) => {
              e.stopPropagation();
              setImageList(null);
            }}
          >
            <X className="h-6 w-6 cursor-pointer hover:text-primary" />
          </button>

          {imageList.images.length > 1 && (
            <button
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white transition-colors hover:bg-black/70 z-50"
              onClick={(e) => {
                e.stopPropagation();
                setImageList({
                  ...imageList,
                  index:
                    (imageList.index - 1 + imageList.images.length) %
                    imageList.images.length,
                });
              }}
            >
              <ChevronLeft className="h-5 w-5 cursor-pointer hover:text-primary" />
            </button>
          )}

          <div
            className="relative h-full max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-lg flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={imageList.images[imageList.index]}
              alt={`Full screen screenshot ${imageList.index + 1}`}
              fill
              className="object-contain"
            />
          </div>

          {imageList.images.length > 1 && (
            <button
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white transition-colors hover:bg-black/70 z-50"
              onClick={(e) => {
                e.stopPropagation();
                setImageList({
                  ...imageList,
                  index: (imageList.index + 1) % imageList.images.length,
                });
              }}
            >
              <ChevronRight className="h-5 w-5 cursor-pointer hover:text-primary" />
            </button>
          )}

          {imageList.images.length > 1 && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-4 py-2 text-sm text-white font-medium z-50 tracking-widest">
              {imageList.index + 1} / {imageList.images.length}
            </div>
          )}
        </div>
      )}
    </>
  );
}
