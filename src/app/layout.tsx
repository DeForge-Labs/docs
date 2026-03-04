import '@/app/global.css';
import { RootProvider } from 'fumadocs-ui/provider/next';
import { Lexend_Deca } from 'next/font/google';
import Script from 'next/script';

const lexend = Lexend_Deca({
  subsets: ['latin'],
});

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={lexend.className} suppressHydrationWarning>
      <script
        async
        src="https://scripts.simpleanalyticscdn.com/latest.js"
      ></script>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
      <Script src="https://scripts.simpleanalyticscdn.com/latest.js" />
    </html>
  );
}
