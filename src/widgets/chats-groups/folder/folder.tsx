import { Button, ButtonStyleType } from "gram/shared";
import { FolderIcon } from "public/svgs";
import { type FC } from "react";

type FolderProps = {
  name: string;
  maxNanmeLength?: number;
};

export const Folder: FC<FolderProps> = ({ name, maxNanmeLength = 12 }) => {
  return (
    <Button buttonStyleType={ButtonStyleType.GROUP}>
      <FolderIcon />
      <span className="w-full">{name}</span>
    </Button>
  );
};
