"use client";
import { Handle, Position } from "../reactflow-mock";
import { useRef, useEffect } from "react";
import getColorByType from "@/lib/color-profile";
import { useTheme } from "next-themes";
import useWorkspaceStore from "../stores/useWorkspaceStore";
import { Input } from "../ui/input";

export default function TextField({
  field,
  nodeType,
  isDisabled,
  currentValue,
  handleChange,
  matchingInput,
  isConnected,
  isSameNode,
}: {
  field: { name: string; type: string; value?: string };
  nodeType: { inputs: { name: string; type: string }[] };
  isDisabled: boolean;
  currentValue: string;
  handleChange: (name: string, value: string) => void;
  matchingInput?: { type: string };
  isConnected: boolean;
  isSameNode: boolean;
}) {
  const inputRef = useRef<HTMLDivElement>(null);
  const cursorPositionRef = useRef<number | null>(null);
  const { selectedHandle } = useWorkspaceStore();
  const { resolvedTheme } = useTheme();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    cursorPositionRef.current = e.target.selectionStart;
    handleChange(field.name, e.target.value);
  };

  useEffect(() => {
    if (inputRef.current && cursorPositionRef.current !== null) {
      const el = inputRef.current.querySelector("input") || inputRef.current;
      if (el && "setSelectionRange" in el) {
        (el as HTMLInputElement).setSelectionRange(cursorPositionRef.current, cursorPositionRef.current);
      }
    }
  }, [currentValue]);

  return (
    <div key={field.name} className="mb-2 relative">
      <div className="text-[10px] text-foreground/80 font-medium capitalize">{field.name}</div>
      <div className="flex items-center relative">
        {nodeType.inputs.some((input) => input.name === field.name) && (
          <div className="relative">
            <Handle
              type="target"
              position={Position.Left}
              id={`input-${field.name}-${matchingInput?.type || "any"}`}
              style={{ zIndex: 10, border: "none", left: "-15.3px", backgroundColor: "transparent" }}
            />
            <div
              suppressHydrationWarning
              className={`w-2 h-2 -left-[16.2px] -top-[4.5px] rounded-full rotate-45 absolute border-opacity-50 ${
                selectedHandle?.split("-")[0] === "output" &&
                selectedHandle?.split("-")[2]?.toLowerCase() === (matchingInput?.type.toLowerCase() || "Any") &&
                !isConnected && !isSameNode
                  ? "animate-ping"
                  : ""
              }`}
              style={{
                backgroundColor: getColorByType(matchingInput?.type.toLowerCase() ?? ""),
                borderColor: resolvedTheme === "dark" ? "white" : "black",
                borderWidth: "1px",
              }}
            />
          </div>
        )}
        <div ref={inputRef} className="flex-1">
          <Input
            value={currentValue}
            onChange={handleInputChange}
            placeholder={field.value}
            className="mt-0.5 rounded-lg placeholder:text-gray-500"
            style={{ fontSize: "12px" }}
            disabled={isDisabled}
          />
        </div>
      </div>
    </div>
  );
}
