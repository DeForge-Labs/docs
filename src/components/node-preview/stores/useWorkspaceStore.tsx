"use client";
import { useContext } from "react";
import { NodePreviewContext } from "../NodePreviewContext";

/**
 * Drop-in stub for @/store/useWorkspaceStore used only inside NodePreview.
 * Provides all keys that GenericNode and field sub-components read from the real store.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function useWorkspaceStore(selector?: (s: any) => any) {
  const ctx = useContext(NodePreviewContext);

  const store = {
    workflow: null,
    selectedNodeId: null,
    selectedNode: null,
    selectedHandle: null,
    updateNodeData: ctx.updateNodeData,
  };

  return typeof selector === "function" ? selector(store) : store;
}
