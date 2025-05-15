"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { nodeData, categories } from "@/lib/node-data";
import { coreConcepts } from "@/lib/content-data";
import { Menu } from "lucide-react";

export default function DocsLayout({ children }) {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

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
      <div className="sticky top-16 z-30 flex items-center border-b bg-background md:hidden">
        <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
            >
              <Menu className="h-6 w-6" />
              <span className="ml-2">Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[80%] sm:w-[350px] pr-0">
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
                <Link href="/docs">
                  <Button
                    variant={pathname === "/docs" ? "secondary" : "ghost"}
                    className="w-full justify-start"
                  >
                    Overview
                  </Button>
                </Link>
                <Link href="/docs/introduction">
                  <Button
                    variant={
                      pathname === "/docs/introduction" ? "secondary" : "ghost"
                    }
                    className="w-full justify-start"
                  >
                    Introduction
                  </Button>
                </Link>
                <Link href="/docs/first-agent">
                  <Button
                    variant={
                      pathname === "/docs/first-agent" ? "secondary" : "ghost"
                    }
                    className="w-full justify-start"
                  >
                    Your First Agent
                  </Button>
                </Link>
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
                      concept.id === "nodes"
                        ? "/docs/nodes-concept"
                        : concept.link
                    }
                  >
                    <Button
                      variant={
                        pathname ===
                        (concept.id === "nodes"
                          ? "/docs/nodes-concept"
                          : concept.link)
                          ? "secondary"
                          : "ghost"
                      }
                      className="w-full justify-start"
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
                <Link href="/docs/nodes">
                  <Button
                    variant={pathname === "/docs/nodes" ? "secondary" : "ghost"}
                    className="w-full justify-start"
                  >
                    All Nodes
                  </Button>
                </Link>
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
                    <Link key={node.type} href={`/docs/nodes/${node.type}`}>
                      <Button
                        variant={
                          pathname === `/docs/nodes/${node.type}`
                            ? "secondary"
                            : "ghost"
                        }
                        className="w-full justify-start"
                        size="sm"
                      >
                        <span className="truncate">
                          {node.title || node.name}
                        </span>
                        <Badge
                          variant={
                            node.diff === "easy"
                              ? "default"
                              : node.diff === "medium"
                              ? "secondary"
                              : "destructive"
                          }
                          className="ml-auto h-5 text-xs"
                        >
                          {node.diff}
                        </Badge>
                      </Button>
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            <div className="mb-4">
              <h2 className="mb-1 px-2 text-lg font-semibold tracking-tight">
                Examples
              </h2>
              <div className="space-y-1">
                <Link href="/examples">
                  <Button
                    variant={pathname === "/examples" ? "secondary" : "ghost"}
                    className="w-full justify-start"
                  >
                    Example Projects
                  </Button>
                </Link>
              </div>
            </div>
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
            <Link href="/docs">
              <Button
                variant={pathname === "/docs" ? "secondary" : "ghost"}
                className="w-full justify-start"
              >
                Overview
              </Button>
            </Link>
            <Link href="/docs/introduction">
              <Button
                variant={
                  pathname === "/docs/introduction" ? "secondary" : "ghost"
                }
                className="w-full justify-start"
              >
                Introduction
              </Button>
            </Link>
            <Link href="/docs/first-agent">
              <Button
                variant={
                  pathname === "/docs/first-agent" ? "secondary" : "ghost"
                }
                className="w-full justify-start"
              >
                Your First Agent
              </Button>
            </Link>
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
                  variant={
                    pathname ===
                    (concept.id === "nodes"
                      ? "/docs/nodes-concept"
                      : concept.link)
                      ? "secondary"
                      : "ghost"
                  }
                  className="w-full justify-start"
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
            <Link href="/docs/nodes">
              <Button
                variant={pathname === "/docs/nodes" ? "secondary" : "ghost"}
                className="w-full justify-start"
              >
                All Nodes
              </Button>
            </Link>
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
                <Link key={node.type} href={`/docs/nodes/${node.type}`}>
                  <Button
                    variant={
                      pathname === `/docs/nodes/${node.type}`
                        ? "secondary"
                        : "ghost"
                    }
                    className="w-full justify-start"
                    size="sm"
                  >
                    <span className="truncate">{node.title || node.name}</span>
                    <Badge
                      variant={
                        node.diff === "easy"
                          ? "default"
                          : node.diff === "medium"
                          ? "secondary"
                          : "destructive"
                      }
                      className="ml-auto h-5 text-xs"
                    >
                      {node.diff}
                    </Badge>
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        ))}

        <div className="mb-4">
          <h2 className="mb-1 px-2 text-lg font-semibold tracking-tight">
            Examples
          </h2>
          <div className="space-y-1">
            <Link href="/examples">
              <Button
                variant={pathname === "/examples" ? "secondary" : "ghost"}
                className="w-full justify-start"
              >
                Example Projects
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </ScrollArea>
  );
}
