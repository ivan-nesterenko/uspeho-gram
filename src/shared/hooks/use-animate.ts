import { useCallback, useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";

export type AnimationProps = {
  initialEnabled?: false;
  in: {
    className: string;
    onAnimationEnd?: () => void;
    onAnimationStart?: () => void;
    onTransitionEnd?: () => void;
    onTransitionStart?: () => void;
  };
  out: {
    className: string;
    onAnimationEnd?: () => void;
    onAnimationStart?: () => void;
    onTransitionEnd?: () => void;
    onTransitionStart?: () => void;
  };
  onToggleInAnimation?: () => void;
  onToggleOutAnimation?: () => void;
};

export const useAnimate = ({
  initialEnabled,
  in: {
    className: inClassName,
    onAnimationEnd: onInAnimationEnd,
    onAnimationStart: onInAnimationStart,
    onTransitionEnd: onInTransitionEnd,
    onTransitionStart: onInTransitionStart,
  },
  out: {
    className: outClassName,
    onAnimationEnd: onOutAnimationEnd,
    onAnimationStart: onOutAnimationStart,
    onTransitionEnd: onOutTransitionEnd,
    onTransitionStart: onOutTransitionStart,
  },
  onToggleInAnimation,
  onToggleOutAnimation,
}: AnimationProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const refAnimationState = useRef<"IN" | "OUT">("IN");

  const elementStyleController = useCallback(
    (state: boolean) => {
      state ? onToggleInAnimation?.() : onToggleOutAnimation?.();
      refAnimationState.current = state ? "IN" : "OUT";

      if (!ref.current) return;

      const element = ref.current;

      element.className = twMerge(
        element.className,
        "transition-all",
        state ? inClassName : outClassName,
      );
    },
    [inClassName, onToggleInAnimation, onToggleOutAnimation, outClassName],
  );

  const handleAnimationStart = useCallback(() => {
    const animationState = refAnimationState.current;
    if (animationState === "IN") {
      onInAnimationStart?.();
      onInTransitionStart?.();
      return;
    }
    onOutTransitionStart?.();
    onOutAnimationStart?.();
    return;
  }, [
    onInAnimationStart,
    onInTransitionStart,
    onOutAnimationStart,
    onOutTransitionStart,
  ]);

  const handleAnimationEnd = useCallback(() => {
    const animationState = refAnimationState.current;
    if (animationState === "IN") {
      onInAnimationEnd?.();
      onInTransitionEnd?.();
      return;
    }
    onOutAnimationEnd?.();
    onOutTransitionEnd?.();
    return;
  }, [
    onInAnimationEnd,
    onInTransitionEnd,
    onOutAnimationEnd,
    onOutTransitionEnd,
  ]);

  const handleTransitionStart = useCallback(() => {
    const animationState = refAnimationState.current;
    if (animationState === "IN") return onInTransitionStart?.();
    return onOutTransitionStart?.();
  }, [onInTransitionStart, onOutTransitionStart]);

  const handleTransitionEnd = useCallback(() => {
    const animationState = refAnimationState.current;
    if (animationState === "IN") return onInTransitionEnd?.();
    return onOutTransitionEnd?.();
  }, [onInTransitionEnd, onOutTransitionEnd]);

  useEffect(() => {
    if (!ref.current) return;
    elementStyleController(initialEnabled ?? true);

    const element = ref.current;

    element.onanimationstart = handleAnimationStart;
    element.onanimationend = handleAnimationEnd;
    element.ontransitionend = handleTransitionEnd;
    element.ontransitionstart = handleTransitionStart;

    return () => {
      element.onanimationend = null;
      element.onanimationstart = null;
      element.ontransitionend = null;
      element.ontransitionstart = null;
    };
  }, [
    elementStyleController,
    handleAnimationEnd,
    handleAnimationStart,
    handleTransitionEnd,
    handleTransitionStart,
    initialEnabled,
    onInAnimationEnd,
    onInAnimationStart,
    onOutAnimationEnd,
    onOutAnimationStart,
  ]);

  return {
    toggleInAnimation: () => elementStyleController(true),
    toggleOutAnimation: () => elementStyleController(false),
    ref,
  };
};
