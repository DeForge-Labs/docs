"use client";

import { useState, useCallback, useMemo, useRef } from "react";
import { NodePreviewContext } from "./NodePreviewContext";
import { GenericNode } from "./GenericNode";
import { cn } from "@/lib/cn";
import type { NodeConfig } from "@/lib/node-registry";

const MIN_ZOOM = 0.5;
const MAX_ZOOM = 2.0;
const ZOOM_STEP = 0.15;

// Prevent drag from starting when the pointer lands on an interactive element.
const INTERACTIVE = "input, textarea, select, button, a, label, [role='button'], [role='combobox'], [role='listbox'], [role='slider'], [role='checkbox'], [tabindex]";

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
  const [pan, setPan] = useState({ x: 0, y: 0 });

  // Drag state lives in a ref — no re-render needed mid-drag.
  const dragging = useRef(false);
  const dragOrigin = useRef({ mx: 0, my: 0, px: 0, py: 0 });

  const zoomIn  = () => setZoom((z) => Math.min(MAX_ZOOM, parseFloat((z + ZOOM_STEP).toFixed(2))));
  const zoomOut = () => setZoom((z) => Math.max(MIN_ZOOM, parseFloat((z - ZOOM_STEP).toFixed(2))));
  const resetView = () => { setZoom(1); setPan({ x: 0, y: 0 }); };

  const isAtDefault = zoom === 1 && pan.x === 0 && pan.y === 0;

  // ── Drag-to-pan handlers ────────────────────────────────────────────────
  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    // Skip if the click landed on an interactive child (input, button, etc.)
    if ((e.target as HTMLElement).closest(INTERACTIVE)) return;
    dragging.current = true;
    dragOrigin.current = { mx: e.clientX, my: e.clientY, px: pan.x, py: pan.y };
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging.current) return;
    setPan({
      x: dragOrigin.current.px + (e.clientX - dragOrigin.current.mx),
      y: dragOrigin.current.py + (e.clientY - dragOrigin.current.my),
    });
  };

  const onPointerUp = () => { dragging.current = false; };

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

  const nodeRegistry = useMemo<NodeConfig[]>(() => [config], [config]);
  const contextValue = useMemo(
    () => ({ nodeRegistry, updateNodeData, nodeData }),
    [nodeRegistry, updateNodeData, nodeData]
  );
  const mergedData = useMemo(() => ({ ...nodeData }), [nodeData]);

  return (
    <NodePreviewContext.Provider value={contextValue}>
      <div
        className={cn(
          "relative flex justify-center items-center my-4 py-15 rounded-xl border border-fd-border bg-fd-card/30 overflow-hidden select-none",
          className
        )}
        style={{ cursor: dragging.current ? "grabbing" : "grab" }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
      >
        {/* Zoom + pan controls — bottom-right */}
        <div className="absolute bottom-3 right-3 flex flex-col gap-1 z-10">
          <button
            onClick={zoomIn}
            disabled={zoom >= MAX_ZOOM}
            className="w-7 h-7 rounded border border-fd-border bg-fd-card text-fd-foreground flex items-center justify-center text-base font-medium hover:bg-fd-accent transition-colors cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
            aria-label="Zoom in"
          >
            +
          </button>
          {/* Reset view — only visible when not at default state */}
          <button
            onClick={resetView}
            disabled={isAtDefault}
            className="w-7 h-7 rounded border border-fd-border bg-fd-card text-fd-foreground flex items-center justify-center text-xs hover:bg-fd-accent transition-colors cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
            aria-label="Reset view"
            title="Reset view"
          >
            ⊙
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

        {/* Combined pan + zoom transform */}
        <div
          style={{
            transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
            transformOrigin: "center center",
            cursor: "auto",  // Reset cursor inside node so inputs/buttons keep their own
          }}
        >
          <GenericNode id="preview-node" type={config.type} data={mergedData} />
        </div>
      </div>
    </NodePreviewContext.Provider>
  );
}
