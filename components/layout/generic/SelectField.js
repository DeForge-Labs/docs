"use client";

import { Handle, Position } from "reactflow";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import getColorByType from "@/lib/color-profile";
import { useState } from "react";

export default function SelectField({
  field,
  nodeType,
  currentValue,
  matchingInput,
}) {
  const [value, setValue] = useState(currentValue || "");
  const handleChange = (name, value) => {
    setValue(value);
  };
  return (
    <div key={field.name} className="mb-2 relative">
      <div className="text-xs font-medium mb-1 capitalize">{field.name}</div>
      <div className="flex items-center relative">
        {nodeType.inputs.some((input) => input.name === field.name) && (
          <Handle
            type="target"
            position={Position.Left}
            id={`input-${field.name}-${matchingInput?.type || "any"}`}
            style={{
              left: -17,
              top: "50%",
              transform: "translateY(-50%)",
              backgroundColor: getColorByType(
                matchingInput?.type.toLowerCase()
              ),
              width: "8px",
              height: "8px",
              border: "1px solid black",
            }}
          />
        )}
        <Select
          value={value}
          onValueChange={(value) => handleChange(field.name, value)}
        >
          <SelectTrigger className="text-xs border border-black/50 rounded-lg">
            <SelectValue placeholder={field.value} />
          </SelectTrigger>
          <SelectContent className="text-xs border border-black/50 rounded-lg bg-background">
            {field.options?.map((option) => (
              <SelectItem
                key={option}
                value={option}
                className="hover:bg-black/5 rounded-md"
              >
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
