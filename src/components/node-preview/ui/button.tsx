"use client";
import { cn } from "@/lib/cn";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "secondary";
  size?: "sm" | "md" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-md font-medium transition-colors",
          "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-fd-ring",
          "disabled:pointer-events-none disabled:opacity-50",
          variant === "default" && "bg-fd-primary text-fd-primary-foreground hover:bg-fd-primary/90",
          variant === "outline" && "border border-fd-border bg-transparent hover:bg-fd-accent hover:text-fd-accent-foreground",
          variant === "ghost" && "hover:bg-fd-accent hover:text-fd-accent-foreground",
          variant === "secondary" && "bg-fd-secondary text-fd-secondary-foreground hover:bg-fd-secondary/80",
          size === "sm" && "h-7 px-2 text-xs",
          size === "md" && "h-8 px-3 text-sm",
          size === "lg" && "h-10 px-4 text-base",
          size === "icon" && "h-8 w-8",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button };
