"use client";
import { FC, HTMLAttributes } from "react";

import { cn } from "../../utils";

export const SheetFooter: FC<HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => (
  <div className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)} {...props} />
);
SheetFooter.displayName = "SheetFooter";
