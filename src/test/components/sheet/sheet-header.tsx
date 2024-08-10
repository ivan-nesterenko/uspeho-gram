"use client";
import { FC, HTMLAttributes } from "react";

import { cn } from "../../utils";

export const SheetHeader: FC<HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => (
  <div className={cn("flex flex-col space-y-2 text-center sm:text-left", className)} {...props} />
);
SheetHeader.displayName = "SheetHeader";
