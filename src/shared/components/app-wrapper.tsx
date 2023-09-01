import { type FC, type ReactNode } from "react";
type AppWrapperProps = {
  children: ReactNode;
};

export const AppWrapper: FC<AppWrapperProps> = ({ children }) => (
  <div className="flex h-screen w-screen overflow-hidden">{children}</div>
);
