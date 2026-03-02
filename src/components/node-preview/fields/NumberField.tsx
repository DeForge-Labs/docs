"use client";
import { Handle, Position } from "../reactflow-mock";
import getColorByType from "@/lib/color-profile";
import { useTheme } from "next-themes";
import useWorkspaceStore from "../stores/useWorkspaceStore";
import {
  NumberField as NumField,
  NumberFieldDecrement,
  NumberFieldGroup,
  NumberFieldIncrement,
  NumberFieldInput,
} from "../ui/number-field";

export default function NumberField({
  field,
  nodeType,
  isDisabled,
  currentValue,
  handleChange,
  matchingInput,
  isConnected,
  isSameNode,
}: {
  field: { name: string; type: string; value?: number };
  nodeType: { inputs: { name: string; type: string }[] };
  isDisabled: boolean;
  currentValue: number;
  handleChange: (name: string, value: number) => void;
  matchingInput?: { type: string };
  isConnected: boolean;
  isSameNode: boolean;
}) {
  const { selectedHandle } = useWorkspaceStore();
  const { resolvedTheme } = useTheme();

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
              className={`w-2 h-2 -left-[16.2px] -top-[4.2px] rounded-full rotate-45 absolute border-opacity-50 ${
                selectedHandle?.split("-")[0] === "output" &&
                selectedHandle?.split("-")[2]?.toLowerCase() === (matchingInput?.type.toLowerCase() || "any") &&
                !isConnected && !isSameNode
                  ? "animate-ping"
                  : ""
              }`}
              suppressHydrationWarning
              style={{
                backgroundColor: getColorByType(matchingInput?.type.toLowerCase() ?? ""),
                borderColor: resolvedTheme === "dark" ? "white" : "black",
                borderWidth: "1px",
              }}
            />
          </div>
        )}
        <NumField
          defaultValue={0}
          className="mt-1 flex-1"
          disabled={isDisabled}
          placeholder={field.value?.toString()}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(field.name, Number(e.target.value))}
          value={currentValue ?? 0}
        >
          <NumberFieldGroup className="rounded-sm">
            <NumberFieldDecrement onClick={() => handleChange(field.name, Number(currentValue) - 1)} className="rounded-l-sm" />
            <NumberFieldInput />
            <NumberFieldIncrement onClick={() => handleChange(field.name, Number(currentValue) + 1)} className="rounded-r-sm" />
          </NumberFieldGroup>
        </NumField>
      </div>
    </div>
  );
}
