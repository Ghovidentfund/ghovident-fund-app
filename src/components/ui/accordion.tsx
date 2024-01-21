"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    // className={cn("border-b", className)}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <div className="flex flex-row w-full p-4">
      <div className="flex flex-row justify-between w-full">
      <div className="flex flex-col flex-1 justify-center">
        <AccordionPrimitive.Trigger
          ref={ref}
          className={cn(
            "flex py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180n w-[10%]",
            className
          )}
          {...props}
        >
          <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200 bg-secondary rounded-sm text-lg" />
        </AccordionPrimitive.Trigger>
        </div>
        <div className="flex flex-row w-[90%] justify-between">{children}</div>
      </div>
    </div>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down border-t-2 border-dotted pt-4"
    {...props}
  >
    <div className={cn("flex flex-row w-full pb-4 pt-0", className)}>
      {children}
    </div>
  </AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
