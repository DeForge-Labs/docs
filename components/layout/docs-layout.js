"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { nodeData, categories } from "@/lib/node-data";
import { coreConcepts } from "@/lib/content-data";
import { Menu } from "lucide-react";
import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";

export default function DocsLayout({ children }) {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  // Group nodes by category
  const nodesByCategory = nodeData.reduce((acc, node) => {
    if (!acc[node.category]) {
      acc[node.category] = [];
    }
    acc[node.category].push(node);
    return acc;
  }, {});

  // Close mobile sidebar when route changes
  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  // Handle hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex flex-col md:flex-row md:overflow-hidden">
      {/* Mobile Menu Button */}
      <div className="sticky top-16 z-30 flex items-center border-b border-black/40 backdrop-blur-sm bg-background/50 md:hidden">
        <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              className="mr-2 px-8 text-base border-none "
            >
              <Menu className="h-6 w-6" />
              <span className="ml-2">Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[80%] sm:w-[350px] pr-0">
            <SheetTitle></SheetTitle>
            <MobileSidebar pathname={pathname} />
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden md:flex md:w-[300px] md:flex-shrink-0 md:flex-col md:border-r">
        <ScrollArea className="h-[calc(100vh-64px)] py-6 pr-6">
          <div className="pl-6">
            <div className="mb-4">
              <h2 className="mb-1 px-2 text-lg font-semibold tracking-tight">
                Documentation
              </h2>
              <div className="space-y-1">
                <Button
                  className={`w-full justify-start outline-none ${
                    pathname === "/docs" ? "bg-black/5 text-black" : ""
                  }`}
                  variant="outline"
                  onPress={() => router.push("/docs")}
                >
                  Overview
                </Button>

                <Button
                  className={`w-full justify-start ${
                    pathname === "/docs/introduction"
                      ? "bg-black/5 text-black"
                      : ""
                  }`}
                  variant="outline"
                  onPress={() => router.push("/docs/introduction")}
                >
                  Introduction
                </Button>

                <Button
                  className={`w-full justify-start ${
                    pathname === "/docs/first-agent"
                      ? "bg-black/5 text-black"
                      : ""
                  }`}
                  variant="outline"
                  onPress={() => router.push("/docs/first-agent")}
                >
                  Your First Agent
                </Button>
              </div>
            </div>

            <div className="mb-4">
              <h2 className="mb-1 px-2 text-lg font-semibold tracking-tight">
                Core Concepts
              </h2>
              <div className="space-y-1">
                {coreConcepts.map((concept, index) => (
                  <Button
                    key={index}
                    className={`w-full justify-start ${
                      pathname ===
                      (concept.id === "nodes"
                        ? "/docs/nodes-concept"
                        : concept.link)
                        ? "bg-black/5 text-black"
                        : ""
                    }`}
                    variant="outline"
                    onPress={() => router.push(concept.link)}
                  >
                    {concept.title}
                  </Button>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <h2 className="mb-1 px-2 text-lg font-semibold tracking-tight">
                Nodes
              </h2>
              <div className="space-y-1">
                <Button
                  className={`w-full justify-start ${
                    pathname === "/docs/nodes" ? "bg-black/5 text-black" : ""
                  }`}
                  variant="outline"
                  onPress={() => router.push("/docs/nodes")}
                >
                  All Nodes
                </Button>
              </div>
            </div>

            {/* Node Categories */}
            {categories.map((category) => (
              <div key={category.id} className="mb-4">
                <h3 className="mb-1 px-2 text-sm font-semibold tracking-tight uppercase text-muted-foreground">
                  {category.name}
                </h3>
                <div className="space-y-1">
                  {nodesByCategory[category.id]?.map((node, index) => (
                    <Button
                      key={index}
                      className={`w-full justify-between ${
                        pathname === `/docs/nodes/${node.type}`
                          ? "bg-black/5 text-black"
                          : ""
                      }`}
                      variant="outline"
                      size="sm"
                      onPress={() => router.push(`/docs/nodes/${node.type}`)}
                    >
                      <span className="truncate">
                        {node.title || node.name}
                      </span>
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
                    </Button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* Main Content */}
      <div className="flex-1 md:h-[calc(100vh-64px)] md:overflow-y-auto">
        {children}
      </div>
    </div>
  );
}

function MobileSidebar({ pathname }) {
  const router = useRouter();
  // Group nodes by category
  const nodesByCategory = nodeData.reduce((acc, node) => {
    if (!acc[node.category]) {
      acc[node.category] = [];
    }
    acc[node.category].push(node);
    return acc;
  }, {});

  return (
    <ScrollArea className="h-full py-6">
      <div className="pl-1 pr-7">
        <div className="mb-4">
          <h2 className="mb-1 px-2 text-lg font-semibold tracking-tight">
            Documentation
          </h2>
          <div className="space-y-1">
            <Button
              variant="outline"
              className={`w-full justify-start outline-none ${
                pathname === "/docs" ? "bg-black/5 text-black" : ""
              }`}
              onPress={() => router.push("/docs")}
            >
              Overview
            </Button>

            <Button
              variant="outline"
              className={`w-full justify-start ${
                pathname === "/docs/introduction" ? "bg-black/5 text-black" : ""
              }`}
              onPress={() => router.push("/docs/introduction")}
            >
              Introduction
            </Button>

            <Button
              variant="outline"
              className={`w-full justify-start ${
                pathname === "/docs/first-agent" ? "bg-black/5 text-black" : ""
              }`}
              onPress={() => router.push("/docs/first-agent")}
            >
              Your First Agent
            </Button>
          </div>
        </div>

        <div className="mb-4">
          <h2 className="mb-1 px-2 text-lg font-semibold tracking-tight">
            Core Concepts
          </h2>
          <div className="space-y-1">
            {coreConcepts.map((concept) => (
              <Link
                key={concept.id}
                href={
                  concept.id === "nodes" ? "/docs/nodes-concept" : concept.link
                }
              >
                <Button
                  variant="outline"
                  className={`w-full justify-start ${
                    pathname ===
                    (concept.id === "nodes"
                      ? "/docs/nodes-concept"
                      : concept.link)
                      ? "bg-black/5 text-black"
                      : ""
                  }`}
                  onPress={() => router.push(concept.link)}
                >
                  {concept.title}
                </Button>
              </Link>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <h2 className="mb-1 px-2 text-lg font-semibold tracking-tight">
            Nodes
          </h2>
          <div className="space-y-1">
            <Button
              variant="outline"
              className={`w-full justify-start ${
                pathname === "/docs/nodes" ? "bg-black/5 text-black" : ""
              }`}
              onPress={() => router.push("/docs/nodes")}
            >
              All Nodes
            </Button>
          </div>
        </div>

        {/* Node Categories */}
        {categories.map((category) => (
          <div key={category.id} className="mb-4">
            <h3 className="mb-1 px-2 text-sm font-semibold tracking-tight uppercase text-muted-foreground">
              {category.name}
            </h3>
            <div className="space-y-1">
              {nodesByCategory[category.id]?.map((node) => (
                <Button
                  key={node.type}
                  variant="outline"
                  className={`w-full justify-between ${
                    pathname === `/docs/nodes/${node.type}`
                      ? "bg-black/5 text-black"
                      : ""
                  }`}
                  onPress={() => router.push(`/docs/nodes/${node.type}`)}
                >
                  <span className="truncate">{node.title || node.name}</span>
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
                </Button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}
