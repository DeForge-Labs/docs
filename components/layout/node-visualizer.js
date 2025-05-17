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
import { GenericNode } from "./generic-node";

export default function NodeVisualizer({ node }) {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [mounted, setMounted] = useState(false);
  const [nodeTypes, setNodeTypes] = useState();

  // Initialize the flow with the node data
  useEffect(() => {
    if (!mounted) {
      setMounted(true);
      return;
    }

    setNodeTypes({
      [node.type]: GenericNode,
    });

    const initialNodes = [
      {
        id: "1",
        type: node.type,
        position: { x: 150, y: 50 },
        data: {
          label: node.title,
          desc: node.desc,
          inputs: node.inputs,
          outputs: node.outputs,
          fields: node.fields,
        },
      },
    ];

    setNodes(initialNodes);
  }, [node, mounted, setNodes]);

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
