"use client";
import { Action } from "@radix-ui/react-toast";
import { ComponentPropsWithoutRef, ElementRef, ReactElement, forwardRef } from "react";

import { cn } from "../../utils";

export type ToastActionElement = ReactElement<typeof ToastAction>;

export const ToastAction = forwardRef<ElementRef<typeof Action>, ComponentPropsWithoutRef<typeof Action>>(
  ({ className, ...props }, ref) => (
    <Action
      className={cn(
        "inline-flex h-8 shrink-0 items-center justify-center rounded-md border border-zinc-200 bg-transparent px-3 text-sm font-medium ring-offset-white transition-colors hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-zinc-100/40 group-[.destructive]:hover:border-red-500/30 group-[.destructive]:hover:bg-red-500 group-[.destructive]:hover:text-zinc-50 group-[.destructive]:focus:ring-red-500 dark:border-zinc-800 dark:ring-offset-zinc-950 dark:hover:bg-zinc-800 dark:focus:ring-zinc-300 dark:group-[.destructive]:border-zinc-800/40 dark:group-[.destructive]:hover:border-red-900/30 dark:group-[.destructive]:hover:bg-red-900 dark:group-[.destructive]:hover:text-zinc-50 dark:group-[.destructive]:focus:ring-red-900",
        className,
      )}
      ref={ref}
      {...props}
    />
  ),
);
ToastAction.displayName = Action.displayName;
