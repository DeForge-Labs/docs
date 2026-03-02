"use client";
import { Button } from "../ui/button";
import { Database } from "lucide-react";

/**
 * Simplified stub of FilePicker for the docs preview.
 * Shows a static "Choose File" button (no actual file API calls).
 */
export default function FilePicker({
  field: _field,
  onChange: _onChange,
  value,
  isTemplate: _isTemplate = false,
}: {
  field: { name: string; type: string };
  onChange?: (v: unknown) => void;
  value?: { fileName?: string };
  isTemplate?: boolean;
}) {
  return (
    <Button
      variant="outline"
      disabled
      className="w-full text-[10px] h-7 rounded-lg gap-1.5 justify-start font-normal"
    >
      <Database className="h-3 w-3 opacity-60" />
      {value?.fileName ?? "Choose File"}
    </Button>
  );
}
