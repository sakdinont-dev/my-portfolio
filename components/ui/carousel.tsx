"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type CarouselProps = {
  items: React.ReactNode[];
  variant?: "default" | "fade";
  className?: string;
};

const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
  ({ items, variant = "default", className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex gap-4 overflow-x-auto pb-4 pr-4 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-slate-400/50 scrollbar-track-transparent",
        variant === "fade" && "animate-in fade-in duration-500",
        className,
      )}
      {...props}
    >
      {items.map((item, index) => (
        <div key={index} className="flex-shrink-0 snap-start">
          {item}
        </div>
      ))}
    </div>
  ),
);

Carousel.displayName = "Carousel";

export { Carousel };
