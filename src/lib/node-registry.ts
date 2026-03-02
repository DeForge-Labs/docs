/**
 * Utilities for working with node config objects in the NodePreview component.
 */

export interface NodeConfig {
  title: string;
  category: string;
  type: string;
  icon: object;
  desc: string;
  credit: number;
  difficulty: string;
  tags: string[];
  inputs: InputPort[];
  outputs: OutputPort[];
  fields: Field[];
}

export interface InputPort {
  name: string;
  type: string;
  desc: string;
}

export interface OutputPort {
  name: string;
  type: string;
  desc: string;
}

export interface Field {
  name: string;
  type: string;
  desc: string;
  value: unknown;
  options?: string[];
  min?: number;
  max?: number;
  step?: number;
}

const categoryColorMap: Record<string, string> = {
  LLM: "purple-500",
  input: "blue-500",
  output: "green-500",
  processing: "orange-500",
  flow: "purple-500",
  trigger: "red-500",
  database: "cyan-500",
  search: "yellow-500",
  social: "pink-500",
  audio: "indigo-500",
  management: "teal-500",
  office: "emerald-500",
  GenAI: "violet-500",
};

/**
 * Looks up a node config from a registry by its `type` field.
 */
export function getNodeTypeByType(
  type: string,
  registry: NodeConfig[]
): NodeConfig | undefined {
  return registry.find((node) => node.type === type);
}

/**
 * Returns a Tailwind colour class for a node category.
 */
export function getCategoryColor(category: string): string {
  return categoryColorMap[category] ?? "gray-500";
}

/**
 * Returns true when the type string represents an array type (e.g. "Text[]").
 */
export function isArrayType(type: string): boolean {
  return type?.endsWith("[]") ?? false;
}
