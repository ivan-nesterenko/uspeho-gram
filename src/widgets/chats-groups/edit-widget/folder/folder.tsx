import { Button, ButtonStyleType } from "gram/shared";
import { FolderIcon, TrashBitIcon } from "public/svgs";

export const Folder = () => {
  return (
    <div
      className={`flex w-full items-center justify-between rounded-none pr-2 ${ButtonStyleType.REGULAR}`}
    >
      <Button
        className="flex w-full items-center gap-5 p-3"
        buttonStyleType={ButtonStyleType.NONE}
      >
        <FolderIcon />
        <span>Programing</span>
      </Button>
      <Button className="p-2">
        <TrashBitIcon />
      </Button>
    </div>
  );
};
