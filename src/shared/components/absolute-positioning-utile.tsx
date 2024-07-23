import { type FC, type ReactNode } from "react";
import { twJoin } from "tailwind-merge";

export enum BgEffects {
  SHADING = "opacity-50 bg-black",
  NONE = "",
}

type PositionElementAbsolutelyProps = {
  children: ReactNode;
  className?: string;
  bgEffects?: BgEffects;
  bgOnClick?: () => void;
  customElemPositionStyles?: string;
};

export const PositionElementAbsolutely: FC<PositionElementAbsolutelyProps> = ({
  children,
  className,
  bgEffects = BgEffects.NONE,
  bgOnClick,
  customElemPositionStyles: customElemPossitionStyles,
}) => {
  return (
    <div
      className={twJoin(
        `absolute left-0 top-0 z-50 flex h-screen w-screen overflow-hidden`,
        className,
      )}
    >
      <div
        className={twJoin(
          "relative z-50 h-fit w-fit p-1 transition-all",
          customElemPossitionStyles,
        )}
      >
        {children}
      </div>
      <div
        className={`absolute h-full w-full ${bgEffects}`}
        onClick={bgOnClick}
      />
    </div>
  );
};
