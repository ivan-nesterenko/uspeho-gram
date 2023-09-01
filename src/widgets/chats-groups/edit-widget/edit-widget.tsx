import {
  BgEffects,
  Button,
  ButtonStyleType,
  PositionElementAbsolutely,
  overlayContext,
} from "gram/shared";
import { FilesICon } from "public/svgs";
import { useContext } from "react";
import { Folder } from "./folder";

export const EditWidget = () => {
  const { closeOverlay } = useContext(overlayContext);

  return (
    <PositionElementAbsolutely
      bgEffects={BgEffects.SHADING}
      className="justify-center"
      bgOnClick={closeOverlay}
    >
      <div className="mt-20 h-fit w-96 rounded-md bg-black-400 pb-2 text-white">
        <div className="bg flex w-full items-center justify-between p-1 pl-4 pr-2">
          <span>Folders</span>
          <Button
            className="h-fit p-2 text-3xl text-black-200 hover:text-white hover:opacity-80"
            onClick={closeOverlay}
            buttonStyleType={ButtonStyleType.NONE}
          >
            ×
          </Button>
        </div>
        <div className="flex w-full flex-col items-center gap-5 bg-black-350 pb-4 pt-4 text-center text-black-200">
          <FilesICon />
          <span>
            Create folders for different groups of chats and quickly switch
            between them.
          </span>
        </div>
        <div className="flex w-full flex-col">
          <span className="p-4 text-blue-600">My folders</span>
          <div className="h-fit max-h-60 w-full overflow-y-auto">
            <Folder />
            <Folder />
            <Folder />
            <Folder />
            <Folder />
            <Folder />
          </div>
        </div>
        <Button className="flex w-full items-center gap-5 rounded-none p-3 pl-4">
          <div className="relative flex h-7 w-7 items-center justify-center rounded-full bg-[#5288C1]">
            <span className="absolute -top-[0.45rem] text-3xl">+</span>
          </div>
          <span className="text-blue-600">Create new folder</span>
        </Button>
      </div>
    </PositionElementAbsolutely>
  );
};
