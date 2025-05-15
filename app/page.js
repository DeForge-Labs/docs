"use client";

import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";
import { Button } from "@heroui/react";
import LogoAnimation from "@/components/ui/LogoAnimation";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-black/10 relative overflow-hidden">
          <div className="absolute top-1/3 left-0 w-full h-full opacity-5">
            <LogoAnimation />
          </div>
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Build AI Agents Visually
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Create, connect, and deploy powerful AI agents with our
                  intuitive node-based interface. From simple automations to
                  blockchain integrations, all without writing a single line of
                  code.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="/docs">
                  <Button className="bg-black/80 hover:bg-black/60 text-background">
                    Explore Documentation{" "}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-3 items-start">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="p-4 bg-black/10 rounded-full">
                  <Zap className="h-6 w-6 text-black" />
                </div>
                <h3 className="text-xl font-bold">No-Code Solution</h3>
                <p className="text-muted-foreground">
                  Build complex AI agents without writing a single line of code
                  using our visual interface.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="p-4 bg-black/10 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-black"
                  >
                    <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
                    <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
                    <line x1="6" y1="6" x2="6.01" y2="6" />
                    <line x1="6" y1="18" x2="6.01" y2="18" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Intuitive Node Interface</h3>
                <p className="text-muted-foreground">
                  Connect nodes with a simple drag-and-drop interface to create
                  powerful workflows.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="p-4 bg-black/10 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-black"
                  >
                    <path d="M12 2v8" />
                    <path d="m4.93 10.93 1.41 1.41" />
                    <path d="M2 18h2" />
                    <path d="M20 18h2" />
                    <path d="m19.07 10.93-1.41 1.41" />
                    <path d="M22 22H2" />
                    <path d="m16 6-4 4-4-4" />
                    <path d="M16 18a4 4 0 0 0-8 0" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Easy Deployment</h3>
                <p className="text-muted-foreground">
                  Deploy your AI agents with a single click and integrate them
                  into your existing systems.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-black/10">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Ready to Build Your AI Agents?
                </h2>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
                  Explore our comprehensive documentation to learn about all the
                  nodes and capabilities of Deforge.
                </p>
              </div>
              <Link href="/docs">
                <Button className="bg-black/80 hover:bg-black/60 text-background">
                  Get Started with Docs
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
