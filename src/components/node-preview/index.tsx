"use client";

import { useState, useCallback, useMemo } from "react";
import { NodePreviewContext } from "./NodePreviewContext";
import { GenericNode } from "./GenericNode";
import { cn } from "@/lib/cn";
import type { NodeConfig } from "@/lib/node-registry";

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
      <div className={cn("flex justify-center py-10 px-6 my-4 rounded-xl border border-fd-border bg-fd-card/30", className)}>
        <GenericNode id="preview-node" type={config.type} data={mergedData} />
      </div>
    </NodePreviewContext.Provider>
  );
}
