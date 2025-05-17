"use client";

import { Handle, Position } from "reactflow";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getNodeTypeByType, isArrayType } from "@/lib/node-registry";
import { FileWarning } from "lucide-react";
import getColorByType from "@/lib/color-profile";
import { nodeData } from "@/lib/node-data";
import NumberField from "./generic/NumberField";
import TextField from "./generic/TextField";
import TextAreaField from "./generic/TextAreaField";
import SelectField from "./generic/SelectField";
import MapField from "./generic/MapField";
import ArrayField from "./generic/ArrayField";
import StandaloneField from "./generic/StandaloneField";
import DateTimeField from "./generic/DateTimeField";
import CheckBoxField from "./generic/CheckBoxField";

export function GenericNode({ id, type, data }) {
  const nodeRegistry = nodeData;

  // Get the node type definition
  const nodeType = getNodeTypeByType(type, nodeRegistry);
  const categoryColor = "gray-500";

  if (!nodeType) {
    return (
      <Card className={`w-64 border-${categoryColor}/50`}>
        <CardHeader className="p-3">
          <CardTitle className="text-sm">Unknown Node Type: {type}</CardTitle>
        </CardHeader>
      </Card>
    );
  }

  // Render field based on its type
  const renderField = (field, index) => {
    // Find matching input for this field
    const matchingInput = nodeType.inputs.find(
      (input) => input.name === field.name
    );

    const isArrayInput = matchingInput && isArrayType(matchingInput.type);

    // Get current value or use default from field definition
    const currentValue = data[field.name] !== undefined ? data[field.name] : "";

    switch (field.type) {
      case "Number":
      case "number":
        return (
          <NumberField
            key={index}
            field={field}
            nodeType={nodeType}
            currentValue={currentValue}
            matchingInput={matchingInput}
          />
        );

      case "Text":
      case "text":
        return (
          <TextField
            key={index}
            field={field}
            nodeType={nodeType}
            currentValue={currentValue}
            matchingInput={matchingInput}
          />
        );

      case "Textarea":
      case "textarea":
        return (
          <TextAreaField
            key={index}
            field={field}
            nodeType={nodeType}
            currentValue={currentValue}
            matchingInput={matchingInput}
          />
        );

      case "Select":
      case "select":
        return (
          <SelectField
            key={index}
            field={field}
            nodeType={nodeType}
            currentValue={currentValue}
            matchingInput={matchingInput}
          />
        );

      case "Map":
      case "map":
        return (
          <MapField
            key={index}
            field={field}
            nodeType={nodeType}
            currentValue={currentValue}
            matchingInput={matchingInput}
          />
        );

      case "JSON[]":
      case "json[]":
        return (
          <ArrayField
            key={index}
            field={field}
            matchingInput={matchingInput}
            totalValidConnections={0}
            isArrayInput={isArrayInput}
          />
        );

      case "Text[]":
      case "text[]":
        return (
          <ArrayField
            key={index}
            field={field}
            matchingInput={matchingInput}
            totalValidConnections={0}
            isArrayInput={isArrayInput}
          />
        );

      case "Date":
      case "date":
        return (
          <DateTimeField
            key={index}
            field={field}
            nodeType={nodeType}
            currentValue={currentValue}
            matchingInput={matchingInput}
          />
        );

      case "CheckBox":
      case "checkbox":
        return (
          <CheckBoxField
            key={index}
            field={field}
            nodeType={nodeType}
            matchingInput={matchingInput}
          />
        );

      default:
        return null;
    }
  };

  // Render output handles
  const renderOutputs = (outputs) => {
    return outputs.map((output, index) => (
      <div key={index} className="flex justify-between items-center mb-1">
        <div className="flex items-center">
          <Handle
            type="source"
            position={Position.Right}
            id={`output-${output.name}-${output.type}`}
            style={{
              backgroundColor: getColorByType(output.type.toLowerCase()),
              width: "8px",
              height: "8px",
              right: "-5px",
              top: "30%",
              marginTop: `${index * 30}px`,
              transform: "translateY(-50%)",
              border: "1px solid black",
            }}
            data-type={output.type}
          />
        </div>
      </div>
    ));
  };

  // Render standalone inputs (inputs that don't have corresponding fields)
  const renderStandaloneInputs = () => {
    return nodeType.inputs
      .filter(
        (input) => !nodeType.fields.some((field) => field.name === input.name)
      )
      .map((input) => (
        <StandaloneField
          key={input.name}
          input={input}
          categoryColor={categoryColor}
          connectedInputs={new Set()}
        />
      ));
  };

  return (
    <Card className={`w-64 border-black/50 bg-background relative`}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 p-3 ">
        <CardTitle className="text-sm font-medium">
          <div className="flex items-center">
            {data.label || nodeType.title}
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-3 pt-0">
        {/* Render standalone inputs */}
        {renderStandaloneInputs()}

        {/* Render fields with their handles */}
        {nodeType.fields.map(renderField)}

        {/* Render outputs */}
        {renderOutputs(nodeType.outputs)}

        {/* Render Environment Warning */}
        {nodeType.fields.some((field) => field.type === "env") && (
          <div className="text-xs text-red-500 flex">
            <FileWarning className="mr-2 h-7 w-7" />
            <span className="text-xs w-fit">
              This Node requires Environment Variables, head over to
              app.deforge.io and select this node to customize its properties
            </span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
