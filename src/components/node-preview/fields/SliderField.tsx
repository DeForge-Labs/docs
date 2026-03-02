"use client";
import { Handle, Position } from "../reactflow-mock";
import getColorByType from "@/lib/color-profile";
import { useTheme } from "next-themes";
import useWorkspaceStore from "../stores/useWorkspaceStore";
import { Label } from "../ui/label";
import { Slider, SliderValue } from "../ui/slider";

export default function SliderField({
  field,
  nodeType,
  isDisabled,
  currentValue,
  handleChange,
  matchingInput,
  isConnected,
  isSameNode,
}: {
  field: { name: string; type: string; value?: number; min?: number; max?: number; step?: number };
  nodeType: { inputs: { name: string; type: string }[] };
  isDisabled: boolean;
  currentValue: number;
  handleChange: (name: string, value: number) => void;
  matchingInput?: { type: string };
  isConnected: boolean;
  isSameNode: boolean;
}) {
  const { resolvedTheme } = useTheme();
  const { selectedHandle } = useWorkspaceStore();

  return (
    <div key={field.name} className="mb-2 relative nodrag nopan">
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
        <Slider
          value={currentValue ?? 0}
          defaultValue={field.value}
          onValueChange={(value) => handleChange(field.name, value)}
          max={field.max ?? 100}
          min={field.min ?? 0}
          step={field.step ?? 1}
          disabled={isDisabled}
          className="flex-1"
        >
          <div className="mb-1 flex items-center justify-between gap-1">
            <Label className="text-[10px] text-foreground/80 font-medium capitalize">
              {field.name}
            </Label>
            <SliderValue className="text-[10px] text-foreground/80" />
          </div>
        </Slider>
      </div>
    </div>
  );
}
