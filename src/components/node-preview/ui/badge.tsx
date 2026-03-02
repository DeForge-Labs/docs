"use client";
import { cn } from "@/lib/cn";
import React from "react";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "outline" | "secondary" | "destructive";
}

export function Badge({ className, variant = "default", children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium transition-colors",
        variant === "outline" && "border border-current bg-transparent",
        variant === "secondary" && "bg-fd-secondary text-fd-secondary-foreground",
        variant === "destructive" && "bg-destructive text-destructive-foreground",
        variant === "default" && "bg-fd-primary text-fd-primary-foreground",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
