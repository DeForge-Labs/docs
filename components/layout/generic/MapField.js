"use client";

import { Handle, Position } from "reactflow";
import getColorByType from "@/lib/color-profile";
import MapFieldEditor from "./MapFieldEditor";
import { useState } from "react";

export default function MapField({
  field,
  nodeType,
  currentValue,
  matchingInput,
}) {
  const [value, setValue] = useState(currentValue || {});
  const handleChange = (name, value) => {
    setValue(value);
  };
  return (
    <div key={field.name} className="mb-2 relative">
      <div className="text-xs font-medium mb-2 capitalize">{field.name}</div>
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
        <div className="w-full">
          <MapFieldEditor
            value={value}
            onChange={(value) => handleChange(field.name, value)}
          />
        </div>
      </div>
    </div>
  );
}
