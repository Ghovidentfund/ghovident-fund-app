import React from "react";
import { VariantProps, cva } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";

const typographyVariants = cva("", {
  variants: {
    variant: {
      default: "text-black",
      topic: "text-black",
    },
    size: {
      default: "text-base",
      topic: "text-2xl font-bold",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export interface TypographyProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof typographyVariants> {
  asChild?: boolean;
}

const Typography = React.forwardRef<HTMLDivElement, TypographyProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "h1";
    return (
      <Comp
        className={cn(
          typographyVariants({ variant, size, className }),
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Typography.displayName = "Typography";

export { Typography, typographyVariants };
