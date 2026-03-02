"use client";
import { cn } from "@/lib/cn";
import React, { useState } from "react";

const DAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

interface CalendarProps {
  mode?: "single";
  selected?: Date;
  onSelect?: (date: Date | undefined) => void;
  captionLayout?: string;
  className?: string;
}

export function Calendar({ selected, onSelect, className }: CalendarProps) {
  const today = new Date();
  const [viewYear, setViewYear] = useState(selected?.getFullYear() ?? today.getFullYear());
  const [viewMonth, setViewMonth] = useState(selected?.getMonth() ?? today.getMonth());

  const firstDay = new Date(viewYear, viewMonth, 1).getDay();
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();

  const cells: (number | null)[] = [];
  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  const prevMonth = () => {
    if (viewMonth === 0) { setViewMonth(11); setViewYear(y => y - 1); }
    else setViewMonth(m => m - 1);
  };
  const nextMonth = () => {
    if (viewMonth === 11) { setViewMonth(0); setViewYear(y => y + 1); }
    else setViewMonth(m => m + 1);
  };

  const isSelected = (d: number) =>
    selected &&
    selected.getDate() === d &&
    selected.getMonth() === viewMonth &&
    selected.getFullYear() === viewYear;

  return (
    <div className={cn("p-3 select-none w-64", className)}>
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <button type="button" onClick={prevMonth} className="px-2 py-1 text-xs hover:bg-fd-accent rounded">←</button>
        <span className="text-xs font-medium">{MONTHS[viewMonth]} {viewYear}</span>
        <button type="button" onClick={nextMonth} className="px-2 py-1 text-xs hover:bg-fd-accent rounded">→</button>
      </div>
      {/* Day names */}
      <div className="grid grid-cols-7 gap-0.5 mb-1">
        {DAYS.map(d => (
          <div key={d} className="text-center text-[10px] text-fd-muted-foreground font-medium py-0.5">{d}</div>
        ))}
      </div>
      {/* Day cells */}
      <div className="grid grid-cols-7 gap-0.5">
        {cells.map((d, i) => (
          <button
            key={i}
            type="button"
            disabled={d === null}
            onClick={() => d !== null && onSelect?.(new Date(viewYear, viewMonth, d))}
            className={cn(
              "h-6 w-full rounded text-[11px]",
              d === null && "invisible",
              d !== null && "hover:bg-fd-accent",
              isSelected(d as number) && "bg-fd-primary text-fd-primary-foreground hover:bg-fd-primary/90",
            )}
          >
            {d}
          </button>
        ))}
      </div>
    </div>
  );
}
