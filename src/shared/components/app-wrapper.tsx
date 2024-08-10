import { Label } from "@radix-ui/react-label";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "gram/test/components/alert-dialog";
import { Button } from "gram/test/components/button";
import { SheetTrigger, SheetContent, Sheet } from "gram/test/components/sheet";
import { useState, type FC, type ReactNode } from "react";
import { Input } from "./input";
type AppWrapperProps = {
  children: ReactNode;
};
const Test = () => {
  console.log(222);
  return (
    <>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="name" className="text-right">
          Name
        </Label>
        <Input id="name" value="Pedro Duarte" className="col-span-3" />
      </div>
    </>
  );
};
export const AppWrapper: FC<AppWrapperProps> = ({ children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex h-screen w-screen overflow-hidden">
      <Button onClick={() => setOpen(true)}>TEST</Button>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="outline">Open</Button>
        </SheetTrigger>
        <SheetContent onInteractOutside={(e) => e.preventDefault()}>
          {<Test />}
        </SheetContent>
      </Sheet>
    </div>
  );
};
