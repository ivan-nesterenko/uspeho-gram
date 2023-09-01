import { Button, ButtonStyleType } from "gram/shared";
import { SearchIcon } from "public/svgs";
import { type FC } from "react";
type HeaderProps = {
  chanel?: string;
  subs?: number | "bot";
};

export const Header: FC<HeaderProps> = ({ chanel, subs }) => (
  <header className="flex h-fit w-full items-end justify-between bg-black-400 pl-4 text-black-200 ">
    <div className="flex w-fit flex-col justify-between pt-4">
      <span className="text-white">Wоrk.ua Нові вакансії</span>
      <span>bot</span>
    </div>
    <div className="flex h-full w-fit items-center justify-center pr-4">
      <Button className="p-2">
        <SearchIcon />
      </Button>
      <Button className="rounded-lg p-2">leave channel</Button>
    </div>
  </header>
);
