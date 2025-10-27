import '@/app/global.css';
import { RootProvider } from 'fumadocs-ui/provider/next';
import { Lexend_Deca } from 'next/font/google';

const lexend = Lexend_Deca({
  subsets: ['latin'],
});

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={lexend.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
