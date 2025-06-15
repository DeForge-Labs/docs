"use client";

import { Handle, Position } from "reactflow";
import { Input } from "@heroui/react";
import getColorByType from "@/lib/color-profile";
import { useState } from "react";

export default function NumberField({
  field,
  nodeType,
  currentValue,
  matchingInput,
}) {
  const [value, setValue] = useState(currentValue || 0);
  const handleSetNumber = (value) => {
    if (value === "") {
      setValue(value);
      return;
    }
    const regex = /^\d*\.?\d*$/;

    if (regex.test(value)) {
      setValue(value);
    }
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
                zIndex: 10,
                border: "none",
                left: "-15.3px",
                backgroundColor: "transparent",
              }}
            />

            <div
              className="w-2 h-2 -left-[16.5px] -top-[4.2px] rounded-full rotate-45 absolute border-opacity-50"
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
        <Input
          type="text"
          variant="outline"
          value={value}
          onChange={(e) => handleSetNumber(e.target.value)}
          placeholder={field.value?.toString()}
          className="mt-2 border border-black/50 rounded-lg"
        />
      </div>
    </div>
  );
}
