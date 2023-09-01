import { MessageCount } from "gram/shared";
import { type FC } from "react";

export const Chat: FC = () => {
  return (
    <div className="flex min-w-0 cursor-pointer gap-2 p-2 hover:bg-black-350">
      <div className="rounded-full bg-orange-400 p-7" />
      <div className="flex h-full w-full flex-col gap-2">
        <div className="flex h-6 w-full items-end justify-between overflow-hidden text-ellipsis whitespace-nowrap text-white">
          <span>Saved Messages</span>
          <span className="text-sm text-black-200">16:32</span>
        </div>
        <div className="flex h-fit w-full  justify-between overflow-hidden text-ellipsis whitespace-nowrap text-black-200">
          <div>
            <span className="text-blue-500">Ivan: </span>
            <span>asdadas</span>
          </div>
          <MessageCount count={209} />
        </div>
      </div>
    </div>
  );
};
