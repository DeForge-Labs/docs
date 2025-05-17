export function getNodeTypeByType(type, nodeRegistry) {
  return nodeRegistry.find((node) => node.type === type);
}

// Helper function to get default data for a node type
export function getDefaultDataForNodeType(type, nodeRegistry) {
  const nodeType = getNodeTypeByType(type, nodeRegistry);

  if (!nodeType) {
    return { label: type };
  }

  const defaultData = {
    label: nodeType.title,
  };

  // Extract default values from the node definition
  nodeType.fields.forEach((field) => {
    defaultData[field.name] = field.value;
  });

  return defaultData;
}

export function isArrayType(type) {
  return type.endsWith("[]");
}
