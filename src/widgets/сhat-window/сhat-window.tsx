import {
  useRef,
  type FC,
  useState,
  PointerEventHandler,
  useEffect,
  useCallback,
} from "react";
import { Chat } from "./chat";
import { Header } from "./header";
import { Button } from "gram/shared";

// export const ChatWindow: FC = () => {
//   return (
//     <>
//       <div className="flex h-full w-1/2 min-w-fit resize-x flex-col gap-3 overflow-x-auto bg-black-400 pt-3">
//         <Header />
//         <div>
//           <Chat />
//           <Chat />
//           <Chat />
//         </div>
//       </div>
//     </>
//   );
// };

export const ChatWindow: FC = () => {
  const sidebarRef = useRef(null);
  const [isResizing, setIsResizing] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(900);

  const startResizing = useCallback((mouseDownEvent) => {
    setIsResizing(true);
  }, []);

  const stopResizing = useCallback(() => {
    setIsResizing(false);
  }, []);

  const resize = useCallback(
    (mouseMoveEvent) => {
      if (isResizing) {
        setSidebarWidth(
          mouseMoveEvent.clientX -
            sidebarRef.current.getBoundingClientRect().left,
        );
      }
    },
    [isResizing],
  );

  useEffect(() => {
    window.addEventListener("mousemove", resize);
    window.addEventListener("mouseup", stopResizing);
    return () => {
      window.removeEventListener("mousemove", resize);
      window.removeEventListener("mouseup", stopResizing);
    };
  }, [resize, stopResizing]);

  return (
    <>
      <div
        className="flex h-full w-full min-w-[67px] flex-col gap-3  bg-black-400 pt-3"
        style={{ width: `${sidebarWidth}px` }}
        ref={sidebarRef}
      >
        <Header />
        <div>
          <Chat />
          <Chat />
          <Chat />
        </div>
      </div>
      <Button className="h-full w-1 bg-white" onMouseDown={startResizing} />
    </>
  );
};
