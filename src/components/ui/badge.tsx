import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/cn';

const badgeVariants = cva(
  'inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-fd-ring focus:ring-offset-2',
  {
    variants: {
      difficulty: {
        easy: 'border-transparent bg-green-300 text-green-800',
        medium: 'border-transparent bg-amber-400 text-yellow-800',
        hard: 'border-transparent bg-red-300 text-red-800',
        default: 'border-2 border-black dark:border-white bg-transparent text-fd-foreground hover:bg-fd-accent',
      },
    },
    defaultVariants: {
      difficulty: 'default',
    },
  },
);

export type BadgeProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof badgeVariants>;

export function Badge({ className, difficulty, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ difficulty }), className)} {...props} />
  );
}

export { badgeVariants };
