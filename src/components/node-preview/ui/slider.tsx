"use client";
import { cn } from "@/lib/cn";
import React, { createContext, useContext } from "react";

interface SliderContextValue {
  displayValue: number | string;
}

const SliderContext = createContext<SliderContextValue>({ displayValue: 0 });

interface SliderProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange" | "value"> {
  value?: number;
  defaultValue?: number;
  onValueChange?: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  children?: React.ReactNode;
  className?: string;
}

export function Slider({
  value,
  defaultValue,
  onValueChange,
  min = 0,
  max = 100,
  step = 1,
  disabled,
  children,
  className,
}: SliderProps) {
  const current = value ?? defaultValue ?? 0;

  return (
    <SliderContext.Provider value={{ displayValue: current }}>
      <div className={cn("w-full", className)}>
        {children}
        <input
          type="range"
          value={current}
          min={min}
          max={max}
          step={step}
          disabled={disabled}
          onChange={(e) => onValueChange?.(Number(e.target.value))}
          className="w-full h-2 cursor-pointer accent-fd-primary disabled:cursor-not-allowed disabled:opacity-50"
        />
      </div>
    </SliderContext.Provider>
  );
}

export function SliderValue({ className }: { className?: string }) {
  const { displayValue } = useContext(SliderContext);
  return <span className={cn("text-sm font-medium tabular-nums", className)}>{displayValue}</span>;
}
