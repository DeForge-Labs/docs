"use client";
import { cn } from "@/lib/cn";
import React, { createContext, useContext, useState, useRef, useEffect } from "react";

// ---------- Context ----------
interface SelectContextValue {
  value: { value: string; label: string } | null;
  onValueChange: (item: { value: string; label: string } | null) => void;
  open: boolean;
  setOpen: (v: boolean) => void;
  disabled?: boolean;
}

const SelectContext = createContext<SelectContextValue>({
  value: null,
  onValueChange: () => {},
  open: false,
  setOpen: () => {},
});

// ---------- Select (root) ----------
interface SelectProps {
  items?: { value: string; label: string }[];
  value?: { value: string; label: string } | null;
  onValueChange?: (item: { value: string; label: string } | null) => void;
  disabled?: boolean;
  children?: React.ReactNode;
  className?: string;
}

export function Select({ value, onValueChange, disabled, children, className }: SelectProps) {
  const [open, setOpen] = useState(false);

  return (
    <SelectContext.Provider value={{ value: value ?? null, onValueChange: onValueChange ?? (() => {}), open, setOpen, disabled }}>
      <div className={cn("relative w-full", className)}>{children}</div>
    </SelectContext.Provider>
  );
}

// ---------- SelectTrigger ----------
export function SelectTrigger({ className, children }: { className?: string; children?: React.ReactNode }) {
  const { open, setOpen, disabled } = useContext(SelectContext);

  return (
    <button
      type="button"
      onClick={() => !disabled && setOpen(!open)}
      disabled={disabled}
      className={cn(
        "flex h-8 w-full items-center justify-between rounded-sm border border-fd-border bg-fd-background px-2 py-1 text-sm",
        "focus:outline-none focus:ring-1 focus:ring-fd-ring",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
    >
      {children}
      <svg className="h-4 w-4 opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
      </svg>
    </button>
  );
}

// ---------- SelectValue ----------
export function SelectValue({ className }: { className?: string }) {
  const { value } = useContext(SelectContext);
  return (
    <span className={cn("text-sm truncate", !value && "text-fd-muted-foreground", className)}>
      {value?.label ?? "Select…"}
    </span>
  );
}

// ---------- SelectPopup ----------
export function SelectPopup({ children, className }: { children?: React.ReactNode; alignItemWithTrigger?: boolean; className?: string }) {
  const { open, setOpen } = useContext(SelectContext);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [setOpen]);

  if (!open) return null;

  return (
    <div
      ref={ref}
      className={cn(
        "absolute z-50 top-full mt-1 w-full rounded-md border border-fd-border bg-fd-background shadow-md",
        "max-h-52 overflow-y-auto",
        className
      )}
    >
      {children}
    </div>
  );
}

// ---------- SelectItem ----------
interface SelectItemProps {
  value: { value: string; label: string };
  children?: React.ReactNode;
  className?: string;
}

export function SelectItem({ value: itemValue, children, className }: SelectItemProps) {
  const { value, onValueChange, setOpen } = useContext(SelectContext);
  const isSelected = value?.value === itemValue.value;

  return (
    <div
      role="option"
      aria-selected={isSelected}
      onClick={() => { onValueChange(itemValue); setOpen(false); }}
      className={cn(
        "flex cursor-pointer items-center px-2 py-1.5 text-sm hover:bg-fd-accent",
        isSelected && "bg-fd-accent font-medium",
        className
      )}
    >
      {children}
    </div>
  );
}
