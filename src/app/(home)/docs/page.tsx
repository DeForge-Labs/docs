import { Building2, Library, Pencil, LibraryBig } from 'lucide-react';
import Link, { type LinkProps } from 'next/link';

export default function DocsPage() {
  return (
    <main className="container flex flex-col flex-1 justify-center items-center py-16 text-center z-2">
      <h1 className="mb-4 text-3xl font-semibold md:text-4xl">
        Getting Started
      </h1>
      <p className="text-fd-muted-foreground">
        Portal to different sections of docs.
      </p>
      <div className="mt-8 grid grid-cols-1 gap-4 text-start">
        {/* md:grid-cols-2 */}
        {[
          {
            name: 'Node Library',
            description:
              'Documentation for the Deforge Node Library.',
            icon: <LibraryBig className="size-full" />,
            href: '/docs/library',
          },
        ].map((item) => (
          <Item key={item.name} href={item.href}>
            <Icon>{item.icon}</Icon>
            <h2 className="mb-2 font-medium">{item.name}</h2>
            <p className="text-sm text-fd-muted-foreground">
              {item.description}
            </p>
          </Item>
        ))}
      </div>
    </main>
  );
}

function Icon({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-2 size-8 rounded-lg border p-1 text-fd-muted-foreground bg-fd-muted shadow-md">
      {children}
    </div>
  );
}

function Item(props: LinkProps & { children: React.ReactNode }) {
  return (
    <Link {...props} className="bg-fd-card rounded-2xl border p-4 shadow-lg">
      {props.children}
    </Link>
  );
}