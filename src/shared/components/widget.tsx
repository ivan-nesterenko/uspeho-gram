import { type FC, type ReactNode } from "react";
type WidgetProps = {
  children: ReactNode;
  className?: string;
};

export const Widget: FC<WidgetProps> = ({ children, className }) => {
  return (
    <div
      className={`h-fit w-96 rounded-md bg-black-400 pb-2 text-white ${className} flex flex-col`}
    >
      {children}
    </div>
  );
};
