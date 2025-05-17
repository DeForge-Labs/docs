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
