import { type FC, type ReactNode } from "react";
import { twJoin } from "tailwind-merge";
type WidgetProps = {
  children: ReactNode;
  className?: string;
  optionalStyles?: string;
};

export const Widget: FC<WidgetProps> = ({
  children,
  className,
  optionalStyles,
}) => {
  return (
    <div
      className={twJoin(
        "phoneM:w-96 relative flex h-fit w-full flex-col rounded-md bg-black-400 pb-2 text-white",
        className,
        optionalStyles,
      )}
    >
      {children}
    </div>
  );
};
