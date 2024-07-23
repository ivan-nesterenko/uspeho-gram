export const animations = {
  slide: (isOpen: boolean) => (isOpen ? "animate-show" : "-translate-x-full"),
  slideRight: (isOpen: boolean) =>
    isOpen ? "animate-showRight animate-fade" : "translate-x-1/2 opacity-0",
  slideTop: (isOpen: boolean) =>
    isOpen ? "animate-showTop animate-fade" : "-translate-y-1/2 opacity-0",
  fade: (isOpen: boolean) => (isOpen ? "animate-fade" : "opacity-0"),
};
export enum AnimationsTimingKeys {
  SHORT = "short",
  MEDIUM = "medium",
  LONG = "long",
}
export const animationsTimings = {
  [AnimationsTimingKeys.SHORT]: {
    ms: 200,
  },
  [AnimationsTimingKeys.MEDIUM]: {
    ms: 500,
  },
  [AnimationsTimingKeys.LONG]: {
    ms: 700,
  },
};
