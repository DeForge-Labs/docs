"use client";
import Link from "next/link";
import { docPages } from "@/lib/content-data";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";

export default function NodesConceptPage() {
  const router = useRouter();

  // Find the nodes concept page content
  const pageContent = docPages.find((page) => page.id === "nodes-concept");

  if (!pageContent) {
    return <div>Content not found</div>;
  }

  // Function to convert markdown links to HTML
  const convertMarkdownLinks = (content) => {
    return content.replace(
      /\[([^\]]+)\]\(([^)]+)\)/g,
      '<a href="$2" class="text-primary hover:underline">$1</a>'
    );
  };

  return (
    <div className="container py-8 max-w-4xl">
      <div className="space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            {pageContent.title}
          </h1>
          <p className="text-muted-foreground text-lg">
            {pageContent.description}
          </p>
        </div>

        {pageContent.sections.map((section) => (
          <div key={section.id} className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight" id={section.id}>
              {section.title}
            </h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p
                dangerouslySetInnerHTML={{
                  __html: convertMarkdownLinks(section.content),
                }}
              />
              {section.subsections && section.subsections.length > 0 && (
                <div className="mt-6 space-y-6">
                  {section.subsections.map((subsection) => (
                    <div key={subsection.id} className="space-y-2">
                      <h3 className="text-xl font-semibold" id={subsection.id}>
                        {subsection.title}
                      </h3>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: convertMarkdownLinks(subsection.content),
                        }}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}

        <div className="flex justify-between items-center pt-6 border-t">
          <Button
            variant="outline"
            onPress={() => router.push("/docs/first-agent")}
            className="border-black/80 border"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Your First AI Agent
          </Button>
          <Button
            onPress={() => router.push("/docs/connections")}
            className="bg-black/80 hover:bg-black/60 text-background"
          >
            Working with Connections <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
