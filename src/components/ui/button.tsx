import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 select-none",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-white shadow-subtle hover:bg-primary-hover active:translate-y-[0.5px]",
        secondary:
          "bg-secondary text-secondary-foreground border border-border/80 hover:bg-neutral-200/60 active:bg-neutral-200",
        outline:
          "border border-border bg-white text-foreground hover:bg-neutral-50 hover:text-foreground active:bg-neutral-100",
        ghost:
          "text-muted-foreground hover:bg-neutral-100 hover:text-foreground active:bg-neutral-200/60",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-subtle",
        link: "text-primary underline-offset-4 hover:underline p-0 h-auto",
        subtleBlue:
          "bg-blue-50 text-blue-700 border border-blue-100 hover:bg-blue-100/80 active:bg-blue-100",
      },
      size: {
        default: "h-8 px-3.5 py-1.5",
        sm: "h-7 rounded px-2.5 text-[11px]",
        lg: "h-9 rounded-md px-4 text-sm",
        icon: "h-8 w-8",
        iconSm: "h-7 w-7",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
