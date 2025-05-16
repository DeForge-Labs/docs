"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { nodeData, categories } from "@/lib/node-data";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
export default function NodesPage() {
  // Group nodes by category
  const nodesByCategory = nodeData.reduce((acc, node) => {
    if (!acc[node.category]) {
      acc[node.category] = [];
    }
    acc[node.category].push(node);
    return acc;
  }, {});

  const categoryIds = Object.keys(nodesByCategory);

  return (
    <div className="container py-8 max-w-4xl">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Node Reference
          </h1>
          <p className="text-muted-foreground text-lg">
            Explore all the nodes available in Deforge to build your AI agents.
          </p>
        </div>

        <Tabs defaultValue={categoryIds[0]} className="w-full">
          <TabsList className="w-full justify-start overflow-auto border gap-1 border-black/80 h-14 lg:h-fit min-[1124px]:w-fit">
            {categoryIds.map((categoryId) => {
              const category = categories.find((c) => c.id === categoryId) || {
                name: categoryId,
              };
              return (
                <TabsTrigger
                  key={categoryId}
                  value={categoryId}
                  className="capitalize"
                >
                  {category.name}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {categoryIds.map((categoryId) => {
            const category = categories.find((c) => c.id === categoryId) || {
              name: categoryId,
              description: "",
            };
            return (
              <TabsContent key={categoryId} value={categoryId} className="mt-6">
                <div className="mb-4">
                  <h2 className="text-2xl font-bold">{category.name}</h2>
                  <p className="text-muted-foreground">
                    {category.description}
                  </p>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  {nodesByCategory[categoryId].map((node) => (
                    <Link key={node.title} href={`/docs/nodes/${node.type}`}>
                      <Card className="h-full transition-all shadow-none border border-black/80 hover:shadow-md">
                        <CardHeader>
                          <div className="flex justify-between items-start">
                            <CardTitle className="text-xl">
                              {node.title}
                            </CardTitle>
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
                          <CardDescription className="">
                            {node.desc}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {node.tags.map((tag) => (
                              <Badge
                                key={tag}
                                className="text-xs bg-black/60 text-background p-1 px-2"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <div className="flex justify-end">
                            <ArrowRight className="h-4 w-4 text-black" />
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </div>
  );
}
