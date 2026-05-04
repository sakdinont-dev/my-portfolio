"use client";

import * as React from "react";
import Image, { type ImageProps } from "next/image";

import { cn } from "@/lib/utils";

type DisplayImageProps = Omit<ImageProps, "src"> & {
  src: string;
  alt: string;
};

const DisplayImage = React.forwardRef<HTMLImageElement, DisplayImageProps>(
  ({ src, alt, className, ...props }, ref) => (
    <Image
      ref={ref}
      alt={alt}
      src={src.startsWith("/") ? src : `/${src}`}
      className={cn("block object-cover", className)}
      {...props}
    />
  ),
);

DisplayImage.displayName = "DisplayImage";

export { DisplayImage };
