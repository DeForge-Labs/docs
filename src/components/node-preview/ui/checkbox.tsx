"use client";
import { cn } from "@/lib/cn";
import React from "react";

interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  onCheckedChange?: (checked: boolean) => void;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, onCheckedChange, checked, disabled, ...props }, ref) => {
    return (
      <input
        type="checkbox"
        ref={ref}
        checked={checked as boolean}
        disabled={disabled}
        onChange={(e) => onCheckedChange?.(e.target.checked)}
        className={cn(
          "h-4 w-4 rounded border border-fd-border",
          "accent-fd-primary cursor-pointer",
          "disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...props}
      />
    );
  }
);
Checkbox.displayName = "Checkbox";

export { Checkbox };
