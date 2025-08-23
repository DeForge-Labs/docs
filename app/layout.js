import { Lexend_Deca } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import LayoutProvider from "@/components/layout/layout-provider";
import Script from "next/script";

const lexendDeca = Lexend_Deca({
  subsets: ["latin"],
  weight: ["variable"],
});

export const metadata = {
  title: "docs.deforge.io",
  description: "Build AI Agents Visually, No Code Required",

  metadataBase: new URL("https://docs.deforge.io"),

  openGraph: {
    title: "Deforge.io: Build AI Agents Visually, No Code Required",
    description:
      "Dive into the documentation of Deforge, the AI agent platform that empowers users to build AI agents visually without any code.",
    url: "https://docs.deforge.io",
    siteName: "docs.deforge.io",
    type: "website",
    images: [
      {
        url: "/logo/Cover.png",
        width: 1200,
        height: 675,
        alt: "Deforge.io Social Banner",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Deforge.io: Build AI Agents Visually, No Code Required",
    description:
      "Dive into the documentation of Deforge, the AI agent platform that empowers users to build AI agents visually without any code.",
    images: ["/logo/Cover.png"],
    creator: "@Deforge_io",
  },

  other: {
    "application/ld+json": `<script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Deforge",
        "url": "https://docs.deforge.io",
        "description": "Build AI Agents Visually, No Code Required",
        "logo": "https://docs.deforge.io/logo/logo-black.svg",
        "sameAs": [
          "https://x.com/Deforge_io",
          "https://twitter.com/Deforge_io",
        ]
      }
    </script>`,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <script
        async
        src="https://scripts.simpleanalyticscdn.com/latest.js"
      ></script>
      <body className={`${lexendDeca.className} antialiased`}>
        <LayoutProvider>
          <Navbar />
          {children}
        </LayoutProvider>
      </body>
      <Script src="https://scripts.simpleanalyticscdn.com/latest.js" />
    </html>
  );
}
