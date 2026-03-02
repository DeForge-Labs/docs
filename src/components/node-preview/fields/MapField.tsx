"use client";
import { Handle, Position } from "../reactflow-mock";
import getColorByType from "@/lib/color-profile";
import { useTheme } from "next-themes";
import useWorkspaceStore from "../stores/useWorkspaceStore";
import { Input } from "../ui/input";

/** Inline key-value pair editor for Map fields. */
function MapFieldEditor({
  value,
  onChange,
  disabled,
}: {
  value: Record<string, string>;
  onChange: (v: Record<string, string>) => void;
  disabled?: boolean;
}) {
  const entries = Object.entries(value ?? {});

  const updateKey = (oldKey: string, newKey: string) => {
    const next: Record<string, string> = {};
    for (const [k, v] of Object.entries(value)) {
      next[k === oldKey ? newKey : k] = v;
    }
    onChange(next);
  };

  const updateValue = (key: string, newVal: string) => {
    onChange({ ...value, [key]: newVal });
  };

  const addRow = () => onChange({ ...value, "": "" });

  return (
    <div className="flex flex-col gap-1 w-full">
      {entries.map(([k, v], i) => (
        <div key={i} className="flex gap-1">
          <Input
            value={k}
            placeholder="key"
            disabled={disabled}
            onChange={(e) => updateKey(k, e.target.value)}
            className="flex-1 text-[10px] h-6 px-1 rounded-lg"
          />
          <Input
            value={v}
            placeholder="value"
            disabled={disabled}
            onChange={(e) => updateValue(k, e.target.value)}
            className="flex-1 text-[10px] h-6 px-1 rounded-lg"
          />
        </div>
      ))}
      {!disabled && (
        <button
          type="button"
          onClick={addRow}
          className="text-[10px] text-foreground/60 hover:text-foreground text-left mt-0.5"
        >
          + Add entry
        </button>
      )}
    </div>
  );
}

export default function MapField({
  field,
  nodeType,
  isDisabled,
  currentValue,
  handleChange,
  matchingInput,
  isConnected,
  isSameNode,
}: {
  field: { name: string; type: string };
  nodeType: { inputs: { name: string; type: string }[] };
  isDisabled: boolean;
  currentValue: Record<string, string>;
  handleChange: (name: string, value: Record<string, string>) => void;
  matchingInput?: { type: string };
  isConnected: boolean;
  isSameNode: boolean;
}) {
  const { selectedHandle } = useWorkspaceStore();
  const { resolvedTheme } = useTheme();

  return (
    <div key={field.name} className="mb-2 relative">
      <div className="text-[10px] text-foreground/80 font-medium capitalize mb-1">{field.name}</div>
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
        <div className="w-full">
          <MapFieldEditor
            value={currentValue || {}}
            onChange={(value) => handleChange(field.name, value)}
            disabled={isDisabled}
          />
        </div>
      </div>
    </div>
  );
}
