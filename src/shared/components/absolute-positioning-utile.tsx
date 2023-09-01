import { type FC, type ReactNode } from "react";
export enum BgEffects {
  SHADING = "opacity-50 bg-black",
  NONE = "",
}

type PositionElementAbsolutelyProps = {
  children: ReactNode;
  className?: string;
  bgEffects?: BgEffects;
  bgOnClick?: () => void;
};

export const PositionElementAbsolutely: FC<PositionElementAbsolutelyProps> = ({
  children,
  className,
  bgEffects = BgEffects.NONE,
  bgOnClick,
}) => {
  return (
    <div
      className={`absolute left-0 top-0 flex h-screen w-screen overflow-hidden ${className} z-50`}
    >
      <div className="z-50">{children}</div>
      <div
        className={`absolute h-full w-full ${bgEffects}`}
        onClick={bgOnClick}
      />
    </div>
  );
};
