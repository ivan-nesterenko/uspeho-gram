import {
  useState,
  type FC,
  type ReactNode,
  createContext,
  useCallback,
} from "react";

type ModalOverlayProps = {
  children: ReactNode;
};

type ModalContextProperties = {
  overlayProps: { isOpen: boolean; content: ReactNode };
  openOverlay: (content: ReactNode) => void;
  closeOverlay: () => void;
};
type OverlayProperties = {
  isOpen: boolean;
  content: ReactNode;
};
export const overlayContext = createContext<ModalContextProperties>({
  overlayProps: { isOpen: false, content: <></> },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  openOverlay: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  closeOverlay: () => {},
});

export const ModalOverlay: FC<ModalOverlayProps> = ({ children }) => {
  const [overlayProps, setOverlayProps] = useState<OverlayProperties>({
    isOpen: false,
    content: <></>,
  });
  const openOverlay = useCallback((content: ReactNode) => {
    setOverlayProps({ content: content, isOpen: true });
  }, []);
  const closeOverlay = useCallback(() => {
    setOverlayProps({
      content: <></>,
      isOpen: false,
    });
  }, []);
  return (
    <overlayContext.Provider
      value={{ overlayProps, openOverlay, closeOverlay }}
    >
      {overlayProps.content}
      {children}
    </overlayContext.Provider>
  );
};
