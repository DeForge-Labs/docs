"use client";

import { useCallback, useMemo } from "react";
import { useTheme } from "next-themes";
import {
  ReactFlow,
  Background,
  BackgroundVariant,
  Controls,
  ReactFlowProvider,
  useNodesState,
  type Node,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { NodePreviewContext } from "./NodePreviewContext";
import { GenericNode } from "./GenericNode";
import { cn } from "@/lib/cn";
import type { NodeConfig } from "@/lib/node-registry";

// Must be defined outside the component so the reference is stable across renders.
const nodeTypes = { preview_node: GenericNode };

interface NodePreviewProps {
  /** Full node config object (same shape as node-registry entries). */
  config: NodeConfig;
  /** Optional extra wrapper class. */
  className?: string;
}

/**
 * Renders a single Deforge node card inside an interactive ReactFlow canvas.
 * Pan by dragging the background. Zoom with the +/− controls or Ctrl+scroll.
 * Deletion and new-node creation are disabled.
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
function NodePreviewInner({ config, className }: NodePreviewProps) {
  const { resolvedTheme } = useTheme();

  // Build initial node data from field defaults.
  // nodeType carries the real config.type so GenericNode can look it up
  // (the ReactFlow node `type` field is "preview_node", not the real type).
  const initialData = useMemo(() => {
    const data: Record<string, unknown> = { label: config.title, nodeType: config.type };
    for (const field of config.fields) {
      data[field.name] = field.value ?? "";
    }
    return data;
  }, [config]);

  const initialNodes: Node[] = useMemo(
    () => [
      {
        id: "preview-node",
        type: "preview_node",
        position: { x: 0, y: 0 },
        data: initialData,
        deletable: false,
        connectable: false,
        draggable: false,
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [] // intentionally stable — we seed once from config
  );

  const [nodes, setNodes] = useNodesState(initialNodes);

  // updateNodeData is called by GenericNode's handleChange whenever a field value changes.
  const updateNodeData = useCallback(
    ({ nodeId, newData }: { nodeId: string; newData: Record<string, unknown> }) => {
      setNodes((nds) =>
        nds.map((n) => (n.id === nodeId ? { ...n, data: newData } : n))
      );
    },
    [setNodes]
  );

  const nodeRegistry = useMemo<NodeConfig[]>(() => [config], [config]);
  const currentData = (nodes[0]?.data ?? initialData) as Record<string, unknown>;

  const contextValue = useMemo(
    () => ({ nodeRegistry, updateNodeData, nodeData: currentData }),
    [nodeRegistry, updateNodeData, currentData]
  );

  return (
    <NodePreviewContext.Provider value={contextValue}>
      <div
        className={cn(
          "my-4 rounded-xl border border-fd-border overflow-hidden",
          className
        )}
        style={{ height: 420 }}
      >
        <ReactFlow
          nodes={nodes}
          edges={[]}
          nodeTypes={nodeTypes}
          // ─── Interaction ─────────────────────────────────────────────
          nodesDraggable={false}
          nodesConnectable={false}
          // ─── Deletion disabled ────────────────────────────────────────
          deleteKeyCode={null}
          multiSelectionKeyCode={null}
          // ─── Pan & zoom ───────────────────────────────────────────────
          panOnDrag
          // Scroll zooms only when Ctrl is held so normal page-scroll works.
          zoomActivationKeyCode="Control"
          zoomOnScroll
          zoomOnPinch
          preventScrolling={false}
          // ─── View ─────────────────────────────────────────────────────
          colorMode={resolvedTheme === "dark" ? "dark" : "light"}
          fitView
          fitViewOptions={{ padding: 1.2 }}
          proOptions={{ hideAttribution: true }}
        >
          <Background variant={BackgroundVariant.Dots} gap={16} size={1} className="opacity-40" />
          {/* showInteractive=false hides the lock toggle */}
          <Controls showInteractive={false} />
        </ReactFlow>
      </div>
    </NodePreviewContext.Provider>
  );
}

/** Wraps `NodePreviewInner` in `ReactFlowProvider` so inner hooks work. */
export function NodePreview({ config, className }: NodePreviewProps) {
  return (
    <ReactFlowProvider>
      <NodePreviewInner config={config} className={className} />
    </ReactFlowProvider>
  );
}
