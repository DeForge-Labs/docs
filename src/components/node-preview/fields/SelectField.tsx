"use client";
import {
  SelectPopup,
  Select,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export default function SelectField({
  field,
  nodeType: _nodeType,
  isDisabled,
  currentValue,
  handleChange,
  matchingInput: _matchingInput,
}: {
  field: { name: string; type: string; value?: string; options: string[] };
  nodeType: { inputs: { name: string; type: string }[] };
  isDisabled: boolean;
  currentValue: string;
  handleChange: (name: string, value: string) => void;
  matchingInput?: { type: string };
}) {
  const items = field.options.map((option) => ({ value: option, label: option }));
  const selectedItem = items.find((item) => item.value === (currentValue || field.value)) || null;

  return (
    <div key={field.name} className="mb-2 relative nodrag nopan">
      <div className="text-[10px] text-foreground/80 font-medium capitalize">{field.name}</div>
      <div className="flex items-center mt-0.5">
        <Select items={items} value={selectedItem} onValueChange={(item) => handleChange(field.name, item?.value ?? "")} disabled={isDisabled}>
          <SelectTrigger className="rounded-lg bg-[#222225]">
            <SelectValue className="text-[12px]" />
          </SelectTrigger>
          <SelectPopup className="rounded-lg bg-[#222225]">
            {items.map((option, index) => (
              <SelectItem key={index} value={option}>
                {option.label}
              </SelectItem>
            ))}
          </SelectPopup>
        </Select>
      </div>
    </div>
  );
}
