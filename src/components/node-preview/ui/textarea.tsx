"use client";
import { cn } from "@/lib/cn";
import React from "react";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, variant: _variant, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          "flex w-full rounded-sm border border-fd-border bg-fd-background px-2 py-1 text-sm",
          "placeholder:text-fd-muted-foreground",
          "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-fd-ring",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "resize-none",
          className
        )}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
