"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

type CarouselProps = {
  items: React.ReactNode[];
  className?: string;
};

const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
  ({ items, className, ...props }, ref) => {
    const [activeIndex, setActiveIndex] = React.useState(0);

    const prevSlide = () =>
      setActiveIndex((current) =>
        current === 0 ? items.length - 1 : current - 1,
      );

    const nextSlide = () =>
      setActiveIndex((current) =>
        current === items.length - 1 ? 0 : current + 1,
      );

    return (
      <div ref={ref} className={cn("relative", className)} {...props}>
        <div className="overflow-hidden rounded-3xl">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {items.map((item, index) => (
              <div key={index} className="min-w-full shrink-0 px-2 py-4">
                {item}
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          aria-label="Previous slide"
          onClick={prevSlide}
          className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card/90 text-foreground shadow-sm transition hover:bg-card dark:bg-zinc-950/90"
        >
          <ChevronLeft className="h-5 w-5 cursor-pointer hover:text-primary" />
        </button>

        <button
          type="button"
          aria-label="Next slide"
          onClick={nextSlide}
          className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card/90 text-foreground shadow-sm transition hover:bg-card dark:bg-zinc-950/90"
        >
          <ChevronRight className="h-5 w-5 cursor-pointer" />
        </button>

        <div className="mt-4 flex justify-center gap-2">
          {items.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "h-2.5 w-2.5 rounded-full transition-colors cursor-pointer",
                index === activeIndex
                  ? "bg-foreground"
                  : "bg-muted-foreground/50 hover:bg-muted-foreground",
              )}
            />
          ))}
        </div>
      </div>
    );
  },
);

Carousel.displayName = "Carousel";

export { Carousel };
