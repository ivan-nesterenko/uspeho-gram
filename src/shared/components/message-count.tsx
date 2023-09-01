import { type FC } from "react";

type MessageCountProps = {
  count: number;
  className?: string;
};
export const MessageCount: FC<MessageCountProps> = ({ count, className }) => (
  <div
    className={`bg-black-250 flex h-[1.3rem] w-fit items-center justify-center rounded-full p-2  text-xs text-white ${className}`}
  >
    {count}
  </div>
);
