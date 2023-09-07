import { AnimationsTimingKeys, animationsTimings } from "gram/utils";
import { useState, type FC, type ReactNode } from "react";
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
  contentClassName?: ((isOpen: boolean) => string) | string;
  delay?: AnimationsTimingKeys;
};

export const PositionElementAbsolutely: FC<PositionElementAbsolutelyProps> = ({
  children,
  className,
  bgEffects = BgEffects.NONE,
  bgOnClick,
  contentClassName,
  delay = AnimationsTimingKeys.MEDIUM,
}) => {
  const [isOpen, setOpen] = useState(true);
  return (
    <div
      className={`absolute left-0 top-0 flex h-screen w-screen overflow-hidden ${className} z-50`}
    >
      <div
        className={twJoin(
          typeof contentClassName === "string"
            ? contentClassName
            : contentClassName?.(isOpen),
          "z-50 transition-all",
          animationsTimings[delay].className,
        )}
      >
        {children}
      </div>
      <div
        className={`absolute h-full w-full ${bgEffects}`}
        onClick={() => {
          setOpen(false);
          bgOnClick && setTimeout(bgOnClick, animationsTimings[delay].ms);
        }}
      />
    </div>
  );
};
