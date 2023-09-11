import { Button, ButtonStyleType, MessageCount, useOverlay } from "gram/shared";
import { GroupSettingsIcon, MessagesIcon } from "public/svgs";
import { Folder } from "./folder";
import { Menu } from "./menu";
import { type FC } from "react";
import { Edit } from "./edit";
import { useTranslation } from "react-i18next";
export const ChatGroups: FC = () => {
  const { openOverlay } = useOverlay();
  const { t } = useTranslation("translation");
  return (
    <div className="flex h-full flex-col  bg-black-600">
      <Menu />
      <Button buttonStyleType={ButtonStyleType.GROUP} className="relative">
        <MessagesIcon />
        <MessageCount
          count={9}
          className="absolute right-2 top-3 h-[1.6rem] border-2 border-black bg-blue-600"
        />
        {t("chatGroups.chats")}
      </Button>
      <Folder name="Programing" />
      <Button
        buttonStyleType={ButtonStyleType.GROUP}
        onClick={() => openOverlay(<Edit />)}
      >
        <GroupSettingsIcon />
        {t("chatGroups.editFrolders.name")}
      </Button>
    </div>
  );
};
