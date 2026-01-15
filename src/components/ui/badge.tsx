import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/cn';

const badgeVariants = cva(
  'inline-flex items-center rounded-md border m-1 px-2.5 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-fd-ring focus:ring-offset-2',
  {
    variants: {
      difficulty: {
        easy: 'border-transparent bg-green-300 text-green-800 dark:bg-green-700 dark:text-white',
        medium: 'border-transparent bg-amber-400 text-yellow-800 dark:bg-amber-600 dark:text-white',
        hard: 'border-transparent bg-red-200 text-red-800 dark:bg-red-600 dark:text-white',
        default: 'border-2 border-black dark:border-white bg-transparent text-fd-foreground',
      },
    },
    defaultVariants: {
      difficulty: 'default',
    },
  },
);

export type BadgeProps = React.HTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof badgeVariants> & {
    dotColor?: string;
    tooltip?: string;
  };

export function Badge({ className, difficulty, dotColor, tooltip, ...props }: BadgeProps) {
  return (
    <span 
      className={cn(badgeVariants({ difficulty }), dotColor && 'pb-1', className)} 
      title={tooltip}
      {...props}
    >
      {dotColor && (
        <span
          className="h-3 w-3 rounded-full mr-1.5 inline-block dark:border-white dark:border"
          style={{ backgroundColor: dotColor }}
        />
      )}
      {props.children}
    </span>
  );
}

export { badgeVariants };
