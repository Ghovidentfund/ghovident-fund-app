import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const riskStatusVariants = cva("text-white font-medium", {
  variants: {
    variant: {
      "1m": "bg-[#61C454]",
      "3m": "bg-[#F4BE4F]",
      "6m": "bg-[#ED712B]",
      "1y": "bg-destructive",
    },
    size: {
      default: "px-[10px] py-1 rounded-full text-xs",
    },
  },
  defaultVariants: {
    variant: "1m",
    size: "default",
  },
});

export interface RiskStatusProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof riskStatusVariants> {
  asChild?: boolean;
}

const RiskStatus = React.forwardRef<HTMLDivElement, RiskStatusProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "div";
    return (
      <Comp
        className={cn(riskStatusVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

RiskStatus.displayName = "RiskStatus";

export { RiskStatus, riskStatusVariants };
