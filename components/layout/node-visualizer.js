"use client";

import { useEffect, useState } from "react";
import ReactFlow, {
  Controls,
  Background,
  Handle,
  Position,
  useNodesState,
  useEdgesState,
  ConnectionLineType,
} from "reactflow";
import "reactflow/dist/style.css";

// Define the node types
const nodeTypes = {
  customNode: CustomNode,
};

// Custom node component
function CustomNode({ data }) {
  return (
    <div className="px-4 py-2 shadow-md rounded-md bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
      <div className="flex flex-col">
        <div className="font-bold text-sm">{data.label}</div>
        <div className="text-xs text-gray-500 dark:text-gray-400">
          {data.desc}
        </div>
      </div>

      {/* Input handles */}
      {data.inputs &&
        data.inputs.map((input, index) => (
          <Handle
            key={`input-${index}`}
            type="target"
            position={Position.Left}
            id={`input-${index}`}
            style={{ top: 10 + index * 20, background: "#555" }}
            className="w-2 h-2"
          />
        ))}

      {/* Output handles */}
      {data.outputs &&
        data.outputs.map((output, index) => (
          <Handle
            key={`output-${index}`}
            type="source"
            position={Position.Right}
            id={`output-${index}`}
            style={{ top: 10 + index * 20, background: "#555" }}
            className="w-2 h-2"
          />
        ))}
    </div>
  );
}

export default function NodeVisualizer({ node }) {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [mounted, setMounted] = useState(false);

  // Initialize the flow with the node data
  useEffect(() => {
    if (!mounted) {
      setMounted(true);
      return;
    }

    const initialNodes = [
      {
        id: "1",
        type: "customNode",
        position: { x: 150, y: 50 },
        data: {
          label: node.title,
          desc: node.desc,
          inputs: node.inputs,
          outputs: node.outputs,
        },
      },
    ];

    // Add example connected nodes if this node has inputs or outputs
    if (node.inputs.length > 0) {
      initialNodes.push({
        id: "2",
        type: "customNode",
        position: { x: 0, y: 50 },
        data: {
          label: "Input Source",
          desc: "Example input node",
          outputs: [{ name: "Output" }],
        },
      });
    }

    if (node.outputs.length > 0) {
      initialNodes.push({
        id: "3",
        type: "customNode",
        position: { x: 350, y: 50 },
        data: {
          label: "Output Target",
          desc: "Example output node",
          inputs: [{ name: "Input" }],
        },
      });
    }

    // Create example edges
    const initialEdges = [];

    if (node.inputs.length > 0) {
      initialEdges.push({
        id: "e1-2",
        source: "2",
        target: "1",
        sourceHandle: "output-0",
        targetHandle: "input-0",
        type: "smoothstep",
        animated: true,
      });
    }

    if (node.outputs.length > 0) {
      initialEdges.push({
        id: "e1-3",
        source: "1",
        target: "3",
        sourceHandle: "output-0",
        targetHandle: "input-0",
        type: "smoothstep",
        animated: true,
      });
    }

    setNodes(initialNodes);
    setEdges(initialEdges);
  }, [node, mounted, setNodes, setEdges]);

  return (
    <div className="h-full w-full border border-black/80 rounded-lg">
      {mounted && (
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          nodeTypes={nodeTypes}
          fitView
          attributionPosition="bottom-right"
          connectionLineType={ConnectionLineType.SmoothStep}
          proOptions={{
            hideAttribution: true,
          }}
        >
          <Controls />
          <Background />
        </ReactFlow>
      )}
    </div>
  );
}
