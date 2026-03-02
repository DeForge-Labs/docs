"use client";
import FilePicker from "./FilePicker";

export default function KnowledgeBaseField({
  field,
  currentValue,
  handleChange,
  isTemplate = false,
}: {
  field: { name: string; type: string };
  currentValue?: { fileName?: string };
  handleChange: (name: string, value: unknown) => void;
  isTemplate?: boolean;
}) {
  return (
    <div key={field.name} className="mb-2 relative nodrag nopan">
      <div className="text-[10px] text-foreground/80 font-medium capitalize">{field.name}</div>
      <div className="flex items-center mt-0.5">
        <FilePicker
          field={field}
          onChange={(v) => handleChange(field.name, v)}
          value={currentValue}
          isTemplate={isTemplate}
        />
      </div>
    </div>
  );
}
