"use client";

import { Handle, Position } from "reactflow";
import { Input } from "@heroui/react";
import getColorByType from "@/lib/color-profile";
import { useState } from "react";

export default function TextField({
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
      <div className="text-xs font-medium capitalize">{field.name}</div>
      <div className="flex items-center relative">
        {/* Handle is positioned within the relative container */}
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
          value={value}
          variant="outline"
          onChange={(e) => handleChange(field.name, e.target.value)}
          placeholder={field.value}
          className="mt-2 border border-black/50 rounded-lg"
        />
      </div>
    </div>
  );
}
