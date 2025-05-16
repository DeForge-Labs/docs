"use client";

import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { coreConcepts } from "@/lib/content-data";
import { Boxes, LinkIcon, Rocket } from "lucide-react";
import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";

// Map concept icons to Lucide components
const iconMap = {
  Boxes,
  Link: LinkIcon,
  Rocket,
};

export default function DocsPage() {
  const router = useRouter();
  return (
    <div className="container py-8 max-w-4xl">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Documentation
          </h1>
          <p className="text-muted-foreground text-lg">
            Learn how to build AI agents visually with Deforge's node-based
            interface.
          </p>
        </div>

        <div className="mt-8 space-y-6">
          <h2 className="text-2xl font-bold tracking-tighter">
            Getting Started
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Introduction to Deforge</CardTitle>
                <CardDescription>
                  Learn about Deforge and how it can help you build AI agents
                  without code.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/docs/introduction">
                  <Button
                    variant="outline"
                    className="w-full bg-black/80 hover:bg-black/60 text-background"
                  >
                    Read Introduction
                  </Button>
                </Link>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Your First AI Agent</CardTitle>
                <CardDescription>
                  Follow this step-by-step guide to build your first AI agent
                  with Deforge.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="outline"
                  className="w-full bg-black/80 hover:bg-black/60 text-background"
                  onPress={() => router.push("/docs/first-agent")}
                >
                  Start Tutorial
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-8 space-y-6">
          <h2 className="text-2xl font-bold tracking-tighter">Core Concepts</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {coreConcepts.map((concept) => {
              const IconComponent = iconMap[concept.icon] || Boxes;
              return (
                <Card key={concept.id}>
                  <CardHeader>
                    <div className="p-3 w-fit rounded-full bg-black/10 mb-2">
                      <IconComponent className="h-5 w-5 text-black/80" />
                    </div>
                    <CardTitle>{concept.title}</CardTitle>
                    <CardDescription>{concept.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button
                      variant="outline"
                      className="w-full bg-black/80 hover:bg-black/60 text-background"
                      onPress={() => router.push(concept.link)}
                    >
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        <div className="mt-8 space-y-6">
          <h2 className="text-2xl font-bold tracking-tighter">Explore Nodes</h2>
          <p className="text-muted-foreground">
            Deforge provides a variety of nodes to help you build powerful AI
            agents. Explore our node reference to learn more.
          </p>
          <div className="flex justify-center">
            <Button
              className="bg-black/80 hover:bg-black/60 text-background"
              onPress={() => router.push("/docs/nodes")}
            >
              View All Nodes <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
