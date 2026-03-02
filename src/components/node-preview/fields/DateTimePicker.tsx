"use client";
import { ChevronDownIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
import { Input } from "../ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useState } from "react";

interface DateTimeValue {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  second: number;
}

export default function DateTimePicker({
  value,
  onChange,
  isDisabled,
}: {
  value?: DateTimeValue;
  onChange?: (v: DateTimeValue) => void;
  isDisabled?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [time, setTime] = useState(
    value
      ? `${String(value.hour).padStart(2, "0")}:${String(value.minute).padStart(2, "0")}:${String(value.second).padStart(2, "0")}`
      : "10:30:00"
  );

  const selectedDate = value
    ? new Date(value.year, value.month - 1, value.day)
    : undefined;

  const handleDateSelect = (date: Date | undefined) => {
    if (!date) return;
    setOpen(false);
    const [h = 0, m = 0, s = 0] = time.split(":").map(Number);
    onChange?.({ year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate(), hour: h, minute: m, second: s });
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = e.target.value;
    setTime(newTime);
    if (!selectedDate) return;
    const [h = 0, m = 0, s = 0] = newTime.split(":").map(Number);
    onChange?.({ year: selectedDate.getFullYear(), month: selectedDate.getMonth() + 1, day: selectedDate.getDate(), hour: h, minute: m, second: s });
  };

  return (
    <div className="flex gap-2">
      <div className="flex-1">
        <Popover open={open} onOpenChange={(v) => !isDisabled && setOpen(v)}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              disabled={isDisabled}
              className="w-full text-[10px] gap-1 font-normal justify-between h-7"
            >
              {selectedDate ? selectedDate.toLocaleDateString() : "Select date"}
              <ChevronDownIcon className="h-3 w-3" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar mode="single" selected={selectedDate} onSelect={handleDateSelect} className="w-64" />
          </PopoverContent>
        </Popover>
      </div>
      <div className="flex-1">
        <Input
          type="time"
          step="1"
          value={time}
          onChange={handleTimeChange}
          disabled={isDisabled}
          style={{ fontSize: "10px", textAlign: "center" }}
          className="h-7 rounded-lg"
        />
      </div>
    </div>
  );
}
