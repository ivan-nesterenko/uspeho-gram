import { Input, InputStyleType } from "gram/shared";
import { type FC } from "react";

export const Header: FC = () => {
  return (
    <header className="w-full pl-5 pr-5">
      <Input placeholder="Search" inputStyleType={InputStyleType.CHAT_WINDOW} />
    </header>
  );
};
