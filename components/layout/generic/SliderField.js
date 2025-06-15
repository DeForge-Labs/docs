"use client";

import { Handle, Position } from "reactflow";
import { Slider, Tooltip } from "@heroui/react";
import getColorByType from "@/lib/color-profile";
import { useState } from "react";

export default function SliderField({ field, nodeType, matchingInput }) {
  const [value, setValue] = useState(field.value || 0);
  const [inputValue, setInputValue] = useState(field.value || "");
  const handleChange = (name, value) => {
    setValue(value);
    setInputValue(value);
  };
  return (
    <div key={field.name} className="mb-2 relative">
      <div className="flex items-center relative">
        {/* Handle is positioned within the relative container */}
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
        <Slider
          value={value}
          onChange={(value) => handleChange(field.name, value)}
          defaultValue={field.value}
          maxValue={field.max}
          minValue={field.min}
          step={field.step}
          label={field.name}
          renderValue={({ children, ...props }) => (
            <output {...props}>
              <Tooltip
                className="text-tiny text-black rounded-md bg-background border border-black/80"
                content="Press Enter to confirm"
                placement="left"
              >
                <input
                  aria-label="Temperature value"
                  className="px-1 py-0.5 w-10 text-right text-xs bg-black/5 outline-none transition-colors rounded-md border border-transparent hover:border-black focus:border-black"
                  type="text"
                  value={inputValue}
                  onChange={(e) => {
                    const v = e.target.value;

                    setInputValue(v);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !isNaN(Number(inputValue))) {
                      setValue(Number(inputValue));
                    }
                  }}
                />
              </Tooltip>
            </output>
          )}
          className="mt-1"
          classNames={{
            filler: "bg-black/80",
            label: "text-xs font-medium capitalize",
            thumb: "bg-black/80",
            track:
              "data-[fill-end=true]:border-e-black/80 data-[fill-start=true]:border-s-black/80",
          }}
        />
      </div>
    </div>
  );
}
