// components/ParamTable.tsx
export function DataTable({ children }: { children: React.ReactNode }) {
  return (
    <span className="block w-full">
      {children}
    </span>
  );
}

export function DataRow({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex items-start py-3 border-b border-border/30 last:border-b-0">
      {children}
    </span>
  );
}

export function DataHeader({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex items-center py-3 border-b border-border font-semibold text-sm">
      {children}
    </span>
  );
}

export function DataName({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex-none w-32 font-medium text-sm">
      {children}
    </span>
  );
}

export function DataDesc({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex-1 text-sm text-muted-foreground px-4">
      {children}
    </span>
  );
}

export function DescLine({ children }: { children: React.ReactNode }) {
  return <span className="block mb-3">{children}</span>;
}

export function DataType({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex-none">
      {children}
    </span>
  );
}