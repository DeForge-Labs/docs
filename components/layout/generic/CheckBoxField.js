"use client";

import { Handle, Position } from "reactflow";
import getColorByType from "@/lib/color-profile";
import { Checkbox } from "@heroui/react";
import { useState } from "react";

export default function CheckBoxField({ field, nodeType, matchingInput }) {
  const [isSelected, setIsSelected] = useState(true);
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

        <Checkbox
          isSelected={isSelected}
          onValueChange={(value) => {
            setIsSelected(value);
          }}
          className="mt-0.5"
          classNames={{
            wrapper: "after:bg-black/80",
          }}
        >
          <p className="text-xs font-medium text-black/80">
            {isSelected ? "Yes" : "No"}
          </p>
        </Checkbox>
      </div>
    </div>
  );
}
