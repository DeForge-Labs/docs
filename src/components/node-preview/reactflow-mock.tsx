"use client";
/**
 * Minimal stubs for reactflow / @xyflow/react APIs used by GenericNode and field components.
 * In the docs preview context, there is no interactive canvas, so these are no-ops or constants.
 */
import React from "react";

// Position enum – matches reactflow / @xyflow/react API
export const Position = {
  Left: "left" as const,
  Right: "right" as const,
  Top: "top" as const,
  Bottom: "bottom" as const,
};

// Handle is invisible in the app (backgroundColor: transparent) – just render null in preview
export function Handle(_props: Record<string, unknown>) {
  return null;
}

// No edges in static preview
export function useEdges() {
  return [];
}
