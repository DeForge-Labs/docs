"use client";

import { useCallback, useEffect, useState } from "react";
import { Handle, Position, useEdges } from "./reactflow-mock";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import {
  getNodeTypeByType,
  getCategoryColor,
  isArrayType,
  type NodeConfig,
} from "@/lib/node-registry";
import { CircleDot, ShieldAlert, ShieldUser } from "lucide-react";
import getColorByType from "@/lib/color-profile";
import { Lock } from "lucide-react";
import TextField from "./fields/TextField";
import NumberField from "./fields/NumberField";
import TextAreaField from "./fields/TextAreaField";
import SelectField from "./fields/SelectField";
import MapField from "./fields/MapField";
import StandaloneField from "./fields/StandaloneField";
import ArrayField from "./fields/ArrayField";
import CheckBoxField from "./fields/CheckBoxField";
import DateTimeField from "./fields/DateTimeField";
import SliderField from "./fields/SliderField";
import KnowledgeBaseField from "./fields/KnowledgeBaseField";
import { useTheme } from "next-themes";
import useNodeLibraryStore from "./stores/useNodeLibraryStore";
import useWorkspaceStore from "./stores/useWorkspaceStore";

interface GenericNodeProps {
  id: string;
  type: string;
  data: Record<string, unknown>;
}

export function GenericNode({ id, type, data }: GenericNodeProps) {
  const edges = useEdges();
  const [connectedInputs, setConnectedInputs] = useState(new Set<string>());

  // Hoist all store/hook calls to top level
  const { nodeRegistry } = useNodeLibraryStore();
  const { workflow, selectedNodeId, updateNodeData, selectedNode } = useWorkspaceStore();
  const { selectedHandle } = useWorkspaceStore();
  const { resolvedTheme } = useTheme();

  const nodeType: NodeConfig | undefined = getNodeTypeByType(type, nodeRegistry);
  const categoryColor = nodeType ? getCategoryColor(nodeType.category) : "gray-500";

  // Track which inputs are connected
  useEffect(() => {
    const connected = new Set<string>();
    edges.forEach((edge: { target: string; targetHandle?: string }) => {
      if (edge.target === id) {
        const inputName = edge.targetHandle?.split("-")[1];
        if (inputName) connected.add(inputName);
      }
    });
    setConnectedInputs(connected);
  }, [edges, id]);

  const handleChange = useCallback(
    (name: string, value: unknown) => {
      updateNodeData({
        nodeId: id,
        newData: { ...data, [name]: value },
      });
    },
    [id, data, updateNodeData]
  );

  if (!nodeType) {
    return (
      <Card className="w-64 border-gray-300">
        <CardHeader className="p-3">
          <CardTitle className="text-sm">Unknown Node Type: {type}</CardTitle>
        </CardHeader>
      </Card>
    );
  }

  // ---------- Render field ----------
  const renderField = (field: NodeConfig["fields"][number], index: number) => {
    const handleId = `input-${field.name}-${field.type}`;
    const totalValidConnections = edges.filter(
      (edge: { target: string; targetHandle?: string }) =>
        edge.target === id && edge.targetHandle === handleId
    ).length;

    const isConnected = totalValidConnections > 0;
    const isDisabled = isConnected && nodeType.inputs.some((input) => input.name === field.name);
    const matchingInput = nodeType.inputs.find((input) => input.name === field.name);
    const isArrayInput = !!matchingInput && isArrayType(matchingInput.type);
    const isSameNode = selectedNodeId === id;

    const currentValue =
      data[field.name] !== undefined && data[field.name] !== null ? data[field.name] : "";

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const commonProps: any = {
      field,
      nodeType,
      isDisabled,
      currentValue,
      handleChange,
      matchingInput,
      isConnected,
      isSameNode,
    };

    switch (field.type) {
      case "Text":
      case "text":
        return <TextField key={index} {...commonProps} />;

      case "Number":
      case "number":
        return <NumberField key={index} {...commonProps} />;

      case "TextArea":
      case "textarea":
        return <TextAreaField key={index} {...commonProps} />;

      case "select":
        return <SelectField key={index} {...commonProps} />;

      case "JSON[]":
      case "json[]":
      case "Text[]":
      case "text[]":
      case "Tool[]":
      case "tool[]":
        return (
          <ArrayField
            key={index}
            field={field}
            matchingInput={matchingInput}
            totalValidConnections={totalValidConnections}
            isArrayInput={isArrayInput}
            isSameNode={isSameNode}
          />
        );

      case "Map":
      case "map":
        return <MapField key={index} {...commonProps} />;

      case "CheckBox":
      case "checkbox":
        return <CheckBoxField key={index} {...commonProps} />;

      case "Date":
      case "date":
        return <DateTimeField key={index} {...commonProps} />;

      case "Slider":
      case "slider":
        return <SliderField key={index} {...commonProps} />;

      case "KnowledgeBase":
      case "knowledgebase":
        return <KnowledgeBaseField key={index} field={field} currentValue={currentValue as { fileName?: string }} handleChange={handleChange} />;

      default:
        return null;
    }
  };

  // ---------- Render outputs ----------
  const renderOutputs = (outputs: NodeConfig["outputs"]) => {
    const isSameNode = selectedNodeId === id;

    return outputs.map((output) => (
      <div key={output.name} className="mb-2 relative">
        <div className="text-[10px] text-right font-medium text-foreground/80 capitalize">
          {output.name}
        </div>
        <div className="flex items-center relative">
          <Handle
            type="source"
            position={Position.Right}
            id={`output-${output.name}-${output.type}`}
            style={{ right: "-15.3px", top: "-8px", zIndex: 10, backgroundColor: "transparent", border: "none" }}
            data-type={output.type}
          />
          <div
            suppressHydrationWarning
            className={`w-2 h-2 -right-[16.2px] -top-[12px] rounded-none rotate-45 absolute border-opacity-50 ${
              selectedHandle?.split("-")[0] === "input" &&
              selectedHandle?.split("-")[2]?.toLowerCase() === (output?.type.toLowerCase() || "any") &&
              !isSameNode
                ? "animate-ping"
                : ""
            }`}
            style={{
              backgroundColor: getColorByType(output.type.toLowerCase()),
              borderColor: resolvedTheme === "dark" ? "white" : "black",
              borderWidth: "1px",
            }}
          />
        </div>
      </div>
    ));
  };

  // ---------- Render standalone inputs ----------
  const renderStandaloneInputs = () =>
    nodeType.inputs
      .filter((input) => !nodeType.fields.some((field) => field.name === input.name))
      .map((input) => (
        <StandaloneField
          key={input.name}
          input={input}
          categoryColor={categoryColor}
          connectedInputs={connectedInputs}
          isSameNode={selectedNodeId === id}
        />
      ));

  return (
    <Card className="w-56 relative py-0 rounded-2xl">
      {/* Workflow live lock icon */}
      {(workflow as { status?: string } | null)?.status === "LIVE" && (
        <div className="absolute -top-1.5 -right-1.5 h-4 w-4 rounded-sm flex items-center justify-center bg-card z-10 border border-foreground/20">
          <Lock className="size-2" />
        </div>
      )}

      {/* Selected border */}
      {(selectedNode as { id?: string } | null)?.id === id && (
        <div className="absolute top-0 left-0 h-full w-full rounded-2xl flex items-center justify-center border border-dashed border-foreground/50 pointer-events-none" />
      )}

      {/* Environment / Social badges */}
      <div className="absolute -top-7 flex items-center gap-2">
        {nodeType.fields.some((f) => f.type === "env") && (
          <Badge
            variant="outline"
            className="text-[10px] px-1.5 py-0.5 h-5 bg-red-200 dark:bg-red-700 w-fit flex justify-between items-center border mb-4 border-red-200 dark:border-red-700 text-red-700 dark:text-red-200 capitalize"
          >
            <ShieldAlert className="size-3 mr-0.5" />
            Env
          </Badge>
        )}
        {nodeType.fields.some((f) => f.type === "social") && (
          <Badge
            variant="outline"
            className="text-[10px] px-1.5 py-0.5 h-5 bg-blue-200 dark:bg-blue-700 w-fit flex justify-between items-center border mb-4 border-blue-200 dark:border-blue-700 text-blue-700 dark:text-blue-200 capitalize"
          >
            <ShieldUser className="size-3 mr-0.5" />
            Social
          </Badge>
        )}
      </div>

      {/* Header */}
      <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 p-3 border-b border-foreground/15">
        <CardTitle className="text-[10px] font-medium">
          {data.label as string || nodeType.title}
        </CardTitle>
        <Badge
          variant="outline"
          className="text-[10px] px-1.5 py-0.5 bg-foreground/5 border border-foreground/5 text-foreground/70 capitalize flex items-center gap-1 shrink-0"
        >
          <CircleDot className="size-2.5" />
          <span>{nodeType.credit ?? 0}</span>
        </Badge>
      </CardHeader>

      {/* Body */}
      <CardContent className="p-3 pb-2 pt-0 space-y-2">
        <div className="space-y-2">{renderOutputs(nodeType.outputs)}</div>
        <div className="space-y-2">{renderStandaloneInputs()}</div>
        <div className="space-y-2">{nodeType.fields.map(renderField)}</div>
      </CardContent>
    </Card>
  );
}
