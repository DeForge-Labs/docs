"use client";
import { cn } from "@/lib/cn";
import React, { createContext, useContext } from "react";

interface NumberFieldContextValue {
  value: number;
  onChange: (value: number) => void;
  disabled?: boolean;
  placeholder?: string;
}

const NumberFieldContext = createContext<NumberFieldContextValue>({
  value: 0,
  onChange: () => {},
});

// ---------- NumberField (root) ----------
interface NumberFieldRootProps {
  value?: number;
  defaultValue?: number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  placeholder?: string;
  className?: string;
  children?: React.ReactNode;
}

export function NumberField({ value, defaultValue, onChange, disabled, placeholder, className, children }: NumberFieldRootProps) {
  const current = value ?? defaultValue ?? 0;

  const handleChange = (newVal: number) => {
    if (onChange) {
      // Synthesise a change event
      const synth = { target: { value: String(newVal) } } as React.ChangeEvent<HTMLInputElement>;
      onChange(synth);
    }
  };

  return (
    <NumberFieldContext.Provider value={{ value: current, onChange: handleChange, disabled, placeholder }}>
      <div className={cn("w-full", className)}>{children}</div>
    </NumberFieldContext.Provider>
  );
}

// ---------- NumberFieldGroup ----------
export function NumberFieldGroup({ className, children }: { className?: string; children?: React.ReactNode }) {
  return (
    <div className={cn("flex h-8 w-full items-stretch border border-fd-border bg-fd-background rounded-sm overflow-hidden", className)}>
      {children}
    </div>
  );
}

// ---------- NumberFieldDecrement ----------
export function NumberFieldDecrement({ onClick, className }: { onClick?: () => void; className?: string }) {
  const { disabled } = useContext(NumberFieldContext);
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={cn("px-2 text-sm hover:bg-fd-accent disabled:cursor-not-allowed disabled:opacity-50 border-r border-fd-border flex-shrink-0", className)}
    >
      −
    </button>
  );
}

// ---------- NumberFieldInput ----------
export function NumberFieldInput({ className }: { className?: string }) {
  const { value, onChange, disabled, placeholder } = useContext(NumberFieldContext);
  return (
    <input
      type="number"
      value={value}
      placeholder={placeholder}
      disabled={disabled}
      onChange={(e) => onChange(Number(e.target.value))}
      className={cn(
        "flex-1 min-w-0 bg-transparent text-center text-sm focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
        className
      )}
    />
  );
}

// ---------- NumberFieldIncrement ----------
export function NumberFieldIncrement({ onClick, className }: { onClick?: () => void; className?: string }) {
  const { disabled } = useContext(NumberFieldContext);
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={cn("px-2 text-sm hover:bg-fd-accent disabled:cursor-not-allowed disabled:opacity-50 border-l border-fd-border flex-shrink-0", className)}
    >
      +
    </button>
  );
}
