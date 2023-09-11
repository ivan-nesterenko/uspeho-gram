import {
  Button,
  ButtonStyleType,
  PositionElementAbsolutely,
  useOptionalStyle,
  useOverlay,
} from "gram/shared";
import {
  BookmarkIcon,
  ContactsIcon,
  GroupIcon,
  MegaphoneIcon,
  MoonIcon,
  SettingsIcon,
} from "public/svgs";
import { UserProfile } from "./user-profile";
import { BgEffects } from "gram/shared/components/absolute-positioning-utile";
import { ContactList } from "./contact-list";
import { Settings } from "./settings";
import { useTranslation } from "react-i18next";
import { AnimationsTimingKeys, animations } from "gram/utils";
import { twJoin } from "tailwind-merge";
import { FormWidget, WidgetType } from "./widget/form-widget";

export const Menu = () => {
  const { openOverlay, closeOverlay } = useOverlay();
  const { t } = useTranslation("translation");
  const { className, disableStyle } = useOptionalStyle({
    style: animations.slide,
    timing: AnimationsTimingKeys.MEDIUM,
    onDisable: closeOverlay,
  });
  return (
    <PositionElementAbsolutely
      bgOnClick={disableStyle}
      bgEffects={BgEffects.SHADING}
      customElemPossitionStyles="p-0"
    >
      <div
        className={twJoin(
          className,
          "flex h-screen w-fit flex-col gap-4 bg-black-400 pt-5",
        )}
      >
        <UserProfile />
        <div className="w-fit border-t-2 border-black-600">
          <Button
            buttonStyleType={ButtonStyleType.MENU}
            onClick={() => {
              closeOverlay();
              openOverlay(<FormWidget widgetType={WidgetType.GROUP} />);
            }}
          >
            <GroupIcon />
            {t("menu.group")}
          </Button>
          <Button
            buttonStyleType={ButtonStyleType.MENU}
            onClick={() => {
              closeOverlay();
              openOverlay(<FormWidget widgetType={WidgetType.CHANNEL} />);
            }}
          >
            <MegaphoneIcon />
            {t("menu.channel")}
          </Button>
          <Button
            buttonStyleType={ButtonStyleType.MENU}
            onClick={() => {
              closeOverlay();
              openOverlay(<ContactList />);
            }}
          >
            <ContactsIcon />
            {t("menu.contacts.name")}
          </Button>
          <Button buttonStyleType={ButtonStyleType.MENU}>
            <BookmarkIcon />
            {t("menu.saved")}
          </Button>
          <Button
            buttonStyleType={ButtonStyleType.MENU}
            onClick={() => {
              closeOverlay();
              openOverlay(<Settings />);
            }}
          >
            <SettingsIcon />
            {t("menu.settings.name")}
          </Button>
          <Button buttonStyleType={ButtonStyleType.MENU} className="gap-16">
            <div className="flex gap-5">
              <MoonIcon />
              {t("menu.themeMode")}
            </div>
            <div className="h-full w-16 bg-white">ads</div>
          </Button>
        </div>
      </div>
    </PositionElementAbsolutely>
  );
};
