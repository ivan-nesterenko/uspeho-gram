
import { type FC } from "react";
import { Chat } from "./chat";
import { Header } from "./header";
type ChatWindowProps = {
  width?:number
}
export const ChatWindow: FC<ChatWindowProps> = ({width=50}) => {
  return (
    <>
      <div className={'flex h-full pl-1 min-w-[70px] flex-col gap-3 bg-black-400 pt-3'} style={{
        width:width+'%'
      }}>
        <Header />
        <div>
          <Chat />
          <Chat />
          <Chat />
        </div>
      </div>
    </>
  );
};