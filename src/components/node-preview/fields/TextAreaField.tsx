"use client";
import { Handle, Position } from "../reactflow-mock";
import { useRef, useEffect } from "react";
import getColorByType from "@/lib/color-profile";
import useWorkspaceStore from "../stores/useWorkspaceStore";
import { useTheme } from "next-themes";
import { Textarea } from "../ui/textarea";

export default function TextAreaField({
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
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const cursorPositionRef = useRef<number | null>(null);
  const { selectedHandle } = useWorkspaceStore();
  const { resolvedTheme } = useTheme();

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    cursorPositionRef.current = e.target.selectionStart;
    handleChange(field.name, e.target.value);
  };

  useEffect(() => {
    if (textareaRef.current && cursorPositionRef.current !== null) {
      textareaRef.current.setSelectionRange(cursorPositionRef.current, cursorPositionRef.current);
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
              style={{ left: "-15.3px", top: "-8px", zIndex: 10, backgroundColor: "transparent", border: "none" }}
            />
            <div
              className={`w-2 h-2 -left-[16.2px] -top-[12px] rounded-full rotate-45 absolute border-opacity-50 ${
                selectedHandle?.split("-")[0] === "output" &&
                selectedHandle?.split("-")[2]?.toLowerCase() === (matchingInput?.type.toLowerCase() || "any") &&
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
        <Textarea
          ref={textareaRef}
          value={currentValue || ""}
          onChange={handleTextareaChange}
          placeholder={field.value}
          className="mt-0.5 rounded-sm flex-1"
          disabled={isDisabled}
          rows={3}
          style={{ fontSize: "12px", resize: "none" }}
        />
      </div>
    </div>
  );
}
