import { type FC } from "react";
import { Chat } from "./chat";
import { Header } from "./header";

export const ChatWindow: FC = () => {
  return (
    <div className="flex h-full w-1/2 min-w-fit flex-col gap-3 border-r-2 border-black-600 bg-black-400 pt-3">
      <Header />
      <div>
        <Chat />
        <Chat />
        <Chat />
      </div>
    </div>
  );
};
