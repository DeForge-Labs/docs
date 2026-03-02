const colorProfile = [
  { type: "text", color: "#3b82f6" },
  { type: "number", color: "#22c55e" },
  { type: "json", color: "#1f2937" },
  { type: "boolean", color: "#ef4444" },
  { type: "flow", color: "#a855f7" },
  { type: "date", color: "#f97316" },
  { type: "rag", color: "#06b6d4" },
  { type: "tool", color: "#eab308" },
];

const getColorByType = (type: string): string => {
  const entry = colorProfile.find((c) => c.type === type?.toLowerCase());
  return entry ? entry.color : "#6b7280";
};

export { getColorByType };
export default getColorByType;