import {
  BgEffects,
  Button,
  ButtonStyleType,
  PositionElementAbsolutely,
  Widget,
  overlayContext,
} from "gram/shared";
import {
  ContactsIcon,
  LanguageIcon,
  MessageIcon,
  SettingsFolderIcon,
} from "public/svgs";
import { useContext } from "react";
import { Account } from "./account";
import { FolderEdit } from "gram/widgets";
import { animations, AnimationsTimingKeys } from "gram/utils";

export const Settings = () => {
  const { closeOverlay, openOverlay, closeAllOverlays } =
    useContext(overlayContext);
  return (
    <PositionElementAbsolutely
      className="justify-center"
      bgEffects={BgEffects.SHADING}
      bgOnClick={closeOverlay}
      contentClassName={animations.slideTop}
      delay={AnimationsTimingKeys.SHORT}
    >
      <Widget className="mt-20 gap-2 bg-black-300 pb-0">
        <div>
          <div className="flex w-full items-center justify-between rounded-md bg-black-400 pl-5 pr-2 text-xl">
            <span>Settings</span>
            <Button
              className="h-fit p-2 text-3xl text-black-200 hover:text-white hover:opacity-80"
              onClick={closeAllOverlays}
              buttonStyleType={ButtonStyleType.NONE}
            >
              ×
            </Button>
          </div>
          <div className="flex gap-5 bg-black-400 pb-4 pl-5">
            <div className="rounded-full bg-orange-400 p-10" />
            <div className="flex flex-col gap-1">
              <span className="text-xl">Ваня Нестеренко</span>
              <span className="text-sm">+380 99 377 42 78</span>
              <span className="text-sm text-black-200">@DinGo42</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <Button
            buttonStyleType={ButtonStyleType.MENU}
            className="bg-black-400"
            onClick={() => openOverlay(<Account />)}
          >
            <ContactsIcon />
            My account
          </Button>
          <Button
            buttonStyleType={ButtonStyleType.MENU}
            className="bg-black-400"
          >
            <MessageIcon />
            Chat settings
          </Button>
          <Button
            buttonStyleType={ButtonStyleType.MENU}
            className="bg-black-400"
            onClick={() => openOverlay(<FolderEdit />)}
          >
            <SettingsFolderIcon />
            Folders
          </Button>
          <Button
            buttonStyleType={ButtonStyleType.MENU}
            className="rounded-b-md bg-black-400"
          >
            <LanguageIcon />
            Language
          </Button>
        </div>
      </Widget>
    </PositionElementAbsolutely>
  );
};
