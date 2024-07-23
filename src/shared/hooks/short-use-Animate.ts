import { RefObject, useCallback, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

export const useShortAnimate = ({
  in: { className: inClassName, timing: inTiming },
  out: { className: outClassName, timing: outTiming },
  ref,
  toggler,
}: {
  in: {
    className: string;
    timing: number;
  };
  out: {
    className: string;
    timing: number;
  };
  ref: RefObject<HTMLElement>;
  toggler: (isOpened: boolean) => void;
}) => {
  const [isInAnimation, setIsInAnimation] = useState(false);

  const toggleInAnimation = useCallback(() => {
    toggler(true);
    setTimeout(() => {
      if (!ref?.current) return;
      setIsInAnimation(true);
      ref.current.className = twMerge(
        ref.current.className,
        inClassName,
        `!duration-[${inTiming}ms]`,
      );
    });
  }, [toggler, ref, inClassName, inTiming]);

  const toggleOutAnimation = useCallback(() => {
    if (!ref?.current) return;
    setIsInAnimation(false);
    ref.current.className = twMerge(
      ref.current.className,
      outClassName,
      `!duration-[${outTiming}ms]`,
    );
  }, [outClassName, outTiming, ref]);

  const onTransitionEnd = useCallback(() => {
    if (isInAnimation) return;
    toggler(false);
  }, [isInAnimation, toggler]);

  useEffect(() => {
    if (!ref.current) return;
    ref.current.ontransitionend = onTransitionEnd;
  }, [isInAnimation, onTransitionEnd, ref]);

  return {
    toggleInAnimation,
    toggleOutAnimation,
  };
};
