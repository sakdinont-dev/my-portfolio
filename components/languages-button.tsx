"use client";

import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Globe } from "lucide-react";

export const LanguagesToggle = () => {
  return (
    <Button
      className={cn(
        "inline-flex items-center justify-center rounded-md p-2 transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        "cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      )}
      variant="ghost"
      aria-label="Toggle languages"
    >
      <Globe className="h-4 w-4" />
    </Button>
  );
};
