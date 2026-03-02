"use client";
import { createContext } from "react";
import type { NodeConfig } from "@/lib/node-registry";

export interface NodePreviewContextValue {
  /** The single node config exposed as the registry for this preview. */
  nodeRegistry: NodeConfig[];
  /** Called by GenericNode when a field value changes. */
  updateNodeData: (args: { nodeId: string; newData: Record<string, unknown> }) => void;
  /** Current field data keyed by field name. */
  nodeData: Record<string, unknown>;
}

export const NodePreviewContext = createContext<NodePreviewContextValue>({
  nodeRegistry: [],
  updateNodeData: () => {},
  nodeData: {},
});
