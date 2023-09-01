import {
  Button,
  ButtonStyleType,
  MessageCount,
  overlayContext,
} from "gram/shared";
import { GroupSettingsIcon, MessagesIcon } from "public/svgs";
import { Folder } from "./folder";
import { Menu } from "./menu";
import { useContext, type FC } from "react";
import { EditWidget } from "./edit-widget";

export const ChatGroups: FC = () => {
  const { openOverlay } = useContext(overlayContext);
  return (
    <div className="flex h-full flex-col bg-black-600">
      <Menu />

      <Button buttonStyleType={ButtonStyleType.GROUP} className="relative">
        <MessagesIcon />
        <MessageCount
          count={9}
          className="absolute right-2 top-3 h-[1.6rem] border-2 border-black bg-blue-600"
        />
        All chats
      </Button>
      <Folder name="Programing" />
      <Button
        buttonStyleType={ButtonStyleType.GROUP}
        onClick={() => openOverlay(<EditWidget />)}
      >
        <GroupSettingsIcon />
        Edit
      </Button>
    </div>
  );
};
