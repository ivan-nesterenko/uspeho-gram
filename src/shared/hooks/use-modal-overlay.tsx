import {
  useState,
  type FC,
  type ReactNode,
  createContext,
  useCallback,
  useContext,
} from "react";

type ModalOverlayProps = {
  children: ReactNode;
};

type ModalContextProperties = {
  overlayProps: { isOpen: boolean; content: ReactNode }[];
  openOverlay: (content: ReactNode) => void;
  closeOverlay: () => void;
  closeAllOverlays: () => void;
};
type OverlayProperties = {
  isOpen: boolean;
  content: ReactNode;
};
const overlayContext = createContext<ModalContextProperties>({
  overlayProps: [{ isOpen: false, content: <></> }],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  openOverlay: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  closeOverlay: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  closeAllOverlays: () => {},
});
export const ModalOverlay: FC<ModalOverlayProps> = ({ children }) => {
  const [overlayProps, setOverlayProps] = useState<OverlayProperties[]>([]);
  const openOverlay = useCallback((content: ReactNode) => {
    setOverlayProps((prevProps) => [
      ...prevProps,
      { content: content, isOpen: true },
    ]);
  }, []);
  const closeOverlay = useCallback(() => {
    setOverlayProps((prevProps) => {
      const updatedProps = [...prevProps];
      updatedProps.pop();
      return updatedProps;
    });
  }, []);
  const closeAllOverlays = useCallback(() => setOverlayProps([]), []);
  console.log(overlayProps);
  return (
    <overlayContext.Provider
      value={{ overlayProps, openOverlay, closeOverlay, closeAllOverlays }}
    >
      {overlayProps.map((modal, index) => (
        <div key={index}>{modal.content}</div>
      ))}
      {children}
    </overlayContext.Provider>
  );
};

export const useOverlay = () => {
  const { closeAllOverlays, closeOverlay, openOverlay, overlayProps } =
    useContext(overlayContext);
  return { closeAllOverlays, closeOverlay, openOverlay, overlayProps };
};
