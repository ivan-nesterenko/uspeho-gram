/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { signIn, signOut, useSession } from "next-auth/react";

import { api } from "gram/utils/api";
import { ChatGroups, ChatWindow, Correspondence } from "gram/widgets";
import Layout from "./layout";
import { Button, ButtonStyleType } from "gram/shared";
import { useRef, useState, useCallback, useEffect } from "react";

export default function Home() {
  // const hello = api.example.hello.useQuery({ text: "from tRPC" });
  const [isResizing, setIsResizing] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(4);

  const startResizing = useCallback(() => {
    setIsResizing(true);
  }, []);

  const stopResizing = useCallback(() => {
    setIsResizing(false);
  }, []);

  const resize = useCallback(
    (mouseMoveEvent: { clientX: number }) => {
      if (isResizing) {
        const result = (mouseMoveEvent.clientX / window.outerWidth) * 100;
        setSidebarWidth(result > 80 ? 80 : result < 16 ? 1 : result);
      }
    },
    [isResizing],
  );
  useEffect(() => {
    window.addEventListener("mousemove", resize);
    window.addEventListener("mouseup", stopResizing);
  });
  console.log(sidebarWidth);
  return (
    <Layout>
      <ChatGroups />
      <ChatWindow width={sidebarWidth} />
      <Button
        onPointerDown={startResizing}
        buttonStyleType={ButtonStyleType.NONE}
        className="h-full w-3 bg-black-400"
      />
      <Correspondence width={100 - sidebarWidth} />
    </Layout>
  );
}

// function AuthShowcase() {
// const { data: sessionData } = useSession();

// const { data: secretMessage } = api.example.getSecretMessage.useQuery(
//   undefined, // no input
//   { enabled: sessionData?.user !== undefined },
// );

//   return (
//     <div className="flex flex-col items-center justify-center gap-4">
//       <p className="text-center text-2xl text-white">
//         {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
//         {secretMessage && <span> - {secretMessage}</span>}
//       </p>
//       <button
//         className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
//         onClick={sessionData ? () => void signOut() : () => void signIn()}
//       >
//         {sessionData ? "Sign out" : "Sign in"}
//       </button>
//     </div>
//   );
// }
