import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[11px] font-medium tracking-tight border transition-colors",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-neutral-900 text-white shadow-subtle",
        secondary:
          "border-neutral-200 bg-neutral-100 text-neutral-800",
        outline:
          "border-neutral-200 text-neutral-700 bg-white",
        success:
          "border-emerald-200 bg-emerald-50 text-emerald-700",
        warning:
          "border-amber-200 bg-amber-50 text-amber-800",
        urgent:
          "border-rose-200 bg-rose-50 text-rose-700",
        blue:
          "border-blue-200 bg-blue-50 text-blue-700",
        purple:
          "border-purple-200 bg-purple-50 text-purple-700",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  dotColor?: string;
}

function Badge({ className, variant, dotColor, children, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props}>
      {dotColor && (
        <span
          className="h-1.5 w-1.5 rounded-full shrink-0"
          style={{ backgroundColor: dotColor }}
        />
      )}
      {children}
    </div>
  );
}

export { Badge, badgeVariants };
