"use client";

import { Handle, Position } from "reactflow";
import { Textarea } from "@heroui/react";
import getColorByType from "@/lib/color-profile";
import { useState } from "react";

export default function TextAreaField({
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
          <div className="relative">
            <Handle
              type="target"
              position={Position.Left}
              id={`input-${field.name}-${matchingInput?.type || "any"}`}
              style={{
                left: "-15.3px",
                top: "-8px",
                zIndex: 10,
                backgroundColor: "transparent",
                border: "none",
              }}
            />

            <div
              className="w-2 h-2 -left-[16.5px] -top-[12px] rounded-full rotate-45 absolute border-opacity-50"
              style={{
                backgroundColor: getColorByType(
                  matchingInput?.type.toLowerCase()
                ),
                borderColor: "black",
                borderWidth: "1px",
              }}
            ></div>
          </div>
        )}
        <Textarea
          value={value}
          onChange={(e) => handleChange(field.name, e.target.value)}
          placeholder={field.value}
          className="text-xs min-h-[80px] border border-black/50 rounded-lg"
          variant="outline"
        />
      </div>
    </div>
  );
}
