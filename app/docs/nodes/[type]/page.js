"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft } from "lucide-react";
import { nodeData } from "@/lib/node-data";
import { Button } from "@heroui/react";
import NodeVisualizer from "@/components/layout/node-visualizer";
import { useParams } from "next/navigation";
import getColorByType from "@/lib/color-profile";

export default function NodePage() {
  const params = useParams();
  const node = nodeData.find((n) => n.type === params.type);

  if (!node) {
    notFound();
  }

  return (
    <div className="container py-8 max-w-4xl">
      <div className="space-y-8">
        <div className="flex items-center gap-2">
          <Link href="/docs/nodes">
            <Button
              variant="outline"
              className="bg-black/80 text-background hover:bg-black/60"
              size="sm"
            >
              <ArrowLeft className="h-4 w-4 mr-2" /> Back to Nodes
            </Button>
          </Link>
          <Badge
            variant="outline"
            className="capitalize border border-black/80 text-black/80 bg-black/5"
          >
            {node.category}
          </Badge>
          <Badge
            className="text-xs capitalize"
            style={{
              backgroundColor:
                node.diff === "easy"
                  ? "#C8E6C9"
                  : node.diff === "medium"
                  ? "#FDD8AE"
                  : "#FBC2C4",
              color:
                node.diff === "easy"
                  ? "#1B5E20"
                  : node.diff === "medium"
                  ? "#855C00"
                  : "#855C00",
            }}
          >
            {node.diff}
          </Badge>
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            {node.title}
          </h1>
          <p className="text-muted-foreground text-lg">{node.desc}</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {node.tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="capitalize border border-black/80 text-black/80"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        <div className="bg-muted rounded-lg">
          <div className="h-[400px] w-full">
            <NodeVisualizer node={node} />
          </div>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="w-fit justify-start border border-black/80 gap-2">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="inputs">Inputs</TabsTrigger>
            <TabsTrigger value="outputs">Outputs</TabsTrigger>
            <TabsTrigger value="fields">Fields</TabsTrigger>
          </TabsList>

          <TabsContent
            value="overview"
            className="mt-6 space-y-4 border border-black/80 rounded-lg"
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold">
                  Description
                </CardTitle>
                <CardDescription>
                  Detailed explanation of the {node.title} node
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  {node.longDescription ||
                    `The ${node.title} node is a ${
                      node.category
                    } node that ${node.desc.toLowerCase()}. It is classified as ${
                      node.diff
                    } difficulty.`}
                </p>

                {node.useCases && node.useCases.length > 0 && (
                  <>
                    <h3 className="text-lg font-semibold mt-4">
                      Common Use Cases
                    </h3>
                    <ul className="list-disc pl-6 space-y-2">
                      {node.useCases.map((useCase, index) => (
                        <li key={index}>{useCase}</li>
                      ))}
                    </ul>
                  </>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent
            value="inputs"
            className="mt-6 border border-black/80 rounded-lg"
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold">
                  Input Ports
                </CardTitle>
                <CardDescription>
                  The input connections this node accepts
                </CardDescription>
              </CardHeader>
              <CardContent>
                {node.inputs.length === 0 ? (
                  <p className="text-muted-foreground">
                    This node does not have any input ports.
                  </p>
                ) : (
                  <div className="space-y-4">
                    {node.inputs.map((input, index) => (
                      <div
                        key={index}
                        className="border-b border-black/80 pb-4 last:border-0"
                      >
                        <div className="flex flex-col md:flex-row justify-between items-start">
                          <div>
                            <h3 className="font-semibold">{input.name}</h3>
                            <p className="text-sm text-black/80">
                              {input.desc || "No description provided."}
                            </p>
                          </div>
                          <Badge
                            variant="outline"
                            className="border text-black/80 border-black/80 p-1 px-2"
                          >
                            <div
                              className="h-3 w-3 rounded-full bg-black/80 mr-1.5"
                              style={{
                                backgroundColor: getColorByType(
                                  input.type.toLowerCase()
                                ),
                              }}
                            ></div>{" "}
                            {input.type}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent
            value="outputs"
            className="mt-6 border border-black/80 rounded-lg"
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold">
                  Output Ports
                </CardTitle>
                <CardDescription>
                  The output connections this node provides
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {node.outputs.map((output, index) => (
                    <div
                      key={index}
                      className="border-b border-black/80 pb-4 last:border-0"
                    >
                      <div className="flex flex-col md:flex-row justify-between items-start">
                        <div className="">
                          <h3 className="font-semibold">{output.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            {output.desc || "No description provided."}
                          </p>
                        </div>
                        <Badge
                          variant="outline"
                          className="border text-black/80 border-black/80 p-1 px-2 capitalize"
                        >
                          <div
                            className="h-3 w-3 rounded-full bg-black/80 mr-1.5"
                            style={{
                              backgroundColor: getColorByType(
                                output.type.toLowerCase()
                              ),
                            }}
                          ></div>{" "}
                          {output.type}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent
            value="fields"
            className="mt-6 border border-black/80 rounded-lg"
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold">
                  Configuration Fields
                </CardTitle>
                <CardDescription>
                  The configurable fields this node provides
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {node.fields.map((field, index) => (
                    <div
                      key={index}
                      className="border-b border-black/80 pb-4 last:border-0"
                    >
                      <div className="flex justify-between items-start">
                        <h3 className="font-semibold">{field.name}</h3>
                        <Badge
                          variant="outline"
                          className="border text-black/80 border-black/80 p-1 px-2 capitalize"
                        >
                          <div className="h-3 w-3 rounded-full bg-black/80 mr-1.5"></div>{" "}
                          {field.type}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        {field.desc || "No description provided."}
                      </p>
                      <div className="mt-2">
                        <span className="text-sm font-medium">
                          Default Value:{" "}
                        </span>
                        <code className="bg-muted px-1 py-0.5 rounded text-sm">
                          {typeof field.value === "object"
                            ? JSON.stringify(field.value)
                            : String(field.value)}
                        </code>
                      </div>
                      {field.options && (
                        <div className="mt-2">
                          <span className="text-sm font-medium">Options: </span>
                          <div className="flex flex-wrap gap-2 mt-1">
                            {field.options.map((option) => (
                              <Badge
                                key={option}
                                variant="secondary"
                                className="text-xs border bg-black/80 text-background p-1 px-2"
                              >
                                {option}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
