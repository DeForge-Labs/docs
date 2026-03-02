"use client";
import { cn } from "@/lib/cn";
import React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant: _variant, ...props }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        className={cn(
          "flex h-8 w-full rounded-sm border border-fd-border bg-fd-background px-2 py-1 text-sm",
          "placeholder:text-fd-muted-foreground",
          "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-fd-ring",
          "disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
