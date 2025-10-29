import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'DeForge Docs',
  description: 'Documentation for DeForge - Build AI Agents Visually',
};

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center">
      <h1 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">Build AI Agents Visually</h1>
      <p className="mb-4 text-fd-muted-foreground md:text-xl mx-auto max-w-[700px]">
        Create, connect, and deploy powerful AI agents with our
        intuitive node-based interface. From simple automations to
        blockchain integrations, all without writing a single line of
        code.
      </p>
      <Link
        href="/docs"
        className='max-w-fit mx-auto'
      >
        <button
          className="mx-auto max-w-[700px] rounded-md px-6 py-3 text-fd-card bg-fd-card-foreground hover:bg-fd-card-foreground/80 shadow-lg shadow-[#8754ff] cursor-pointer"
        >
          Get Started
        </button>
      </Link>
    </main>
  );
}
