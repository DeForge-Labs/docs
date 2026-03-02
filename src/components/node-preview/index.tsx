"use client";

import { useState, useCallback, useMemo } from "react";
import { NodePreviewContext } from "./NodePreviewContext";
import { GenericNode } from "./GenericNode";
import { cn } from "@/lib/cn";
import type { NodeConfig } from "@/lib/node-registry";

const MIN_ZOOM = 0.5;
const MAX_ZOOM = 2.0;
const ZOOM_STEP = 0.15;

interface NodePreviewProps {
  /** Full node config object (same shape as node-registry entries). */
  config: NodeConfig;
  /** Optional extra wrapper class. */
  className?: string;
}

/**
 * Renders a single Deforge node card as it appears on the editor canvas.
 *
 * Provide the raw node config JSON and the component will render the node
 * with all its field controls — interactive, just like the real editor.
 *
 * @example
 * ```mdx
 * <NodePreview config={{
 *   title: "My Node",
 *   type: "my_node",
 *   category: "LLM",
 *   credit: 10,
 *   difficulty: "easy",
 *   icon: {},
 *   desc: "Does something",
 *   tags: [],
 *   inputs: [{ name: "Flow", type: "Flow", desc: "" }],
 *   outputs: [{ name: "Flow", type: "Flow", desc: "" }],
 *   fields: [{ name: "Prompt", type: "TextArea", desc: "Input prompt", value: "" }],
 * }} />
 * ```
 */
export function NodePreview({ config, className }: NodePreviewProps) {
  const [zoom, setZoom] = useState(1);

  const zoomIn  = () => setZoom((z) => Math.min(MAX_ZOOM, parseFloat((z + ZOOM_STEP).toFixed(2))));
  const zoomOut = () => setZoom((z) => Math.max(MIN_ZOOM, parseFloat((z - ZOOM_STEP).toFixed(2))));

  // Initialise node data from field defaults
  const initialData = useMemo(() => {
    const data: Record<string, unknown> = { label: config.title };
    for (const field of config.fields) {
      data[field.name] = field.value ?? "";
    }
    return data;
  }, [config]);

  const [nodeData, setNodeData] = useState<Record<string, unknown>>(initialData);

  const updateNodeData = useCallback(
    ({ newData }: { nodeId: string; newData: Record<string, unknown> }) => {
      setNodeData(newData);
    },
    []
  );

  // Registry only needs this single config
  const nodeRegistry = useMemo<NodeConfig[]>(() => [config], [config]);

  const contextValue = useMemo(
    () => ({ nodeRegistry, updateNodeData, nodeData }),
    [nodeRegistry, updateNodeData, nodeData]
  );

  // Merge context data into the node's data prop
  const mergedData = useMemo(
    () => ({ ...nodeData }),
    [nodeData]
  );

  return (
    <NodePreviewContext.Provider value={contextValue}>
      <div className={cn("relative flex justify-center py-10 px-6 my-4 rounded-xl border border-fd-border bg-fd-card/30 overflow-hidden", className)}>
        {/* Zoom controls */}
        <div className="absolute bottom-3 right-3 flex flex-col gap-1 z-10">
          <button
            onClick={zoomIn}
            disabled={zoom >= MAX_ZOOM}
            className="w-7 h-7 rounded border border-fd-border bg-fd-card text-fd-foreground flex items-center justify-center text-base font-medium hover:bg-fd-accent transition-colors cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
            aria-label="Zoom in"
          >
            +
          </button>
          <button
            onClick={zoomOut}
            disabled={zoom <= MIN_ZOOM}
            className="w-7 h-7 rounded border border-fd-border bg-fd-card text-fd-foreground flex items-center justify-center text-base font-medium hover:bg-fd-accent transition-colors cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
            aria-label="Zoom out"
          >
            &minus;
          </button>
        </div>

        {/* Node scaled with transform-origin center so it stays centred */}
        <div
          style={{
            transform: `scale(${zoom})`,
            transformOrigin: "center top",
          }}
        >
          <GenericNode id="preview-node" type={config.type} data={mergedData} />
        </div>
      </div>
    </NodePreviewContext.Provider>
  );
}
