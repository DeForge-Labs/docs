"use client";
import { Handle, Position } from "../reactflow-mock";
import getColorByType from "@/lib/color-profile";
import { useTheme } from "next-themes";
import useWorkspaceStore from "../stores/useWorkspaceStore";
import { Badge } from "../ui/badge";

export default function StandaloneField({
  input,
  categoryColor: _categoryColor,
  connectedInputs,
  isSameNode,
}: {
  input: { name: string; type: string };
  categoryColor: string;
  connectedInputs: Set<string>;
  isSameNode: boolean;
}) {
  const isConnected = connectedInputs.has(input.name);
  const { selectedHandle } = useWorkspaceStore();
  const { resolvedTheme } = useTheme();

  return (
    <div key={input.name} className="mb-2 relative">
      <div className="text-[10px] font-medium text-foreground/80 mb-1">{input.name}</div>
      <div className="flex items-center">
        <div className="relative">
          <Handle
            type="target"
            position={Position.Left}
            id={`input-${input.name}-${input.type}`}
            data-type={input.type}
            style={{ zIndex: 10, border: "none", left: "-15.3px", top: "-8px", backgroundColor: "transparent" }}
          />
          <div
            suppressHydrationWarning
            className={`w-2 h-2 -left-[16.2px] -top-[12.2px] rounded-full rotate-45 absolute border-opacity-50 ${
              selectedHandle?.split("-")[0] === "output" &&
              selectedHandle?.split("-")[2]?.toLowerCase() === (input?.type.toLowerCase() || "any") &&
              !isConnected && !isSameNode
                ? "animate-ping"
                : ""
            }`}
            style={{
              backgroundColor: getColorByType(input.type.toLowerCase()),
              borderColor: resolvedTheme === "dark" ? "white" : "black",
              borderWidth: "1px",
            }}
          />
        </div>
        <Badge
          variant="outline"
          className="text-[10px] px-2 py-1 bg-foreground/5 rounded-lg w-full flex justify-between items-center border border-foreground/5 text-foreground/70 capitalize"
        >
          <span className="text-gray-400">{isConnected ? "Connected" : "Not connected"}</span>
          <span className="text-[10px] text-gray-400">{input.type}</span>
        </Badge>
      </div>
    </div>
  );
}
