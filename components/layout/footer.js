import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container flex flex-col md:flex-row items-center justify-between py-8 md:py-12">
        <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
          <Image
            src="/logo/logo-black.svg"
            alt="Logo"
            width={22}
            height={22}
            className="mb-2"
          />
          <Link href="/" className="text-xl font-bold">
            Deforge
          </Link>
          <p className="text-sm text-muted-foreground mt-1 text-center md:text-left">
            Build AI Agents Visually <br /> No Code Required
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-sm font-semibold mb-2">Documentation</h3>
            <ul className="flex flex-col items-center md:items-start gap-2">
              <li>
                <Link
                  href="/docs"
                  className="text-sm text-black/60 hover:text-black"
                >
                  Getting Started
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/nodes"
                  className="text-sm text-black/60 hover:text-black"
                >
                  Node Reference
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-sm font-semibold mb-2">Community</h3>
            <ul className="flex flex-col items-center md:items-start gap-2">
              <li>
                <Link
                  href="https://github.com/deforge/deforge"
                  className="text-sm text-black/60 hover:text-black"
                >
                  GitHub
                </Link>
              </li>
              <li>
                <Link
                  href="https://twitter.com/deforge"
                  className="text-sm text-black/60 hover:text-black"
                >
                  Twitter
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container border-t py-6">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Deforge. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
