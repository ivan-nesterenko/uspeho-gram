import {
  Button,
  ButtonStyleType,
  PositionElementAbsolutely,
  overlayContext,
} from "gram/shared";
import {
  BookmarkIcon,
  ContactsIcon,
  GroupIcon,
  MegaphoneIcon,
  MoonIcon,
  SettingsIcon,
} from "public/svgs";
import { useContext } from "react";
import { UserProfile } from "./user-profile";
import { CommunityWidget, CommunityWidgetType } from "./widget";
import { BgEffects } from "gram/shared/components/absolute-positioning-utile";
import { ContactList } from "./contact-list";
import { Settings } from "./settings";
import { animations } from "gram/utils";

export const Menu = () => {
  const { openOverlay, closeOverlay } = useContext(overlayContext);

  return (
    <PositionElementAbsolutely
      bgOnClick={closeOverlay}
      bgEffects={BgEffects.SHADING}
      contentClassName={animations.slide}
    >
      <div className={`flex h-full w-fit flex-col gap-4 bg-black-400 pt-5`}>
        <UserProfile />
        <div className="w-fit border-t-2 border-black-600">
          <Button
            buttonStyleType={ButtonStyleType.MENU}
            onClick={() => {
              closeOverlay();
              openOverlay(<CommunityWidget {...CommunityWidgetType.group} />);
            }}
          >
            <GroupIcon />
            New Group
          </Button>
          <Button
            buttonStyleType={ButtonStyleType.MENU}
            onClick={() => {
              closeOverlay();
              openOverlay(<CommunityWidget {...CommunityWidgetType.channel} />);
            }}
          >
            <MegaphoneIcon />
            New Channel
          </Button>
          <Button
            buttonStyleType={ButtonStyleType.MENU}
            onClick={() => {
              closeOverlay();
              openOverlay(<ContactList />);
            }}
          >
            <ContactsIcon />
            Contacts
          </Button>
          <Button buttonStyleType={ButtonStyleType.MENU}>
            <BookmarkIcon />
            Saved Messages
          </Button>
          <Button
            buttonStyleType={ButtonStyleType.MENU}
            onClick={() => {
              closeOverlay();
              openOverlay(<Settings />);
            }}
          >
            <SettingsIcon />
            Settings
          </Button>
          <Button buttonStyleType={ButtonStyleType.MENU} className="gap-16">
            <div className="flex gap-5">
              <MoonIcon />
              Night Mode
            </div>
            <div className="h-full w-16 bg-white">ads</div>
          </Button>
        </div>
      </div>
    </PositionElementAbsolutely>
  );
};
