"use client";
import { useContext } from "react";
import { NodePreviewContext } from "../NodePreviewContext";

/**
 * Drop-in stub for @/store/useNodeLibraryStore used only inside NodePreview.
 * Exposes the single node config that was passed to the preview as a one-entry registry.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function useNodeLibraryStore(selector?: (s: any) => any) {
  const ctx = useContext(NodePreviewContext);

  const store = { nodeRegistry: ctx.nodeRegistry };

  return typeof selector === "function" ? selector(store) : store;
}
