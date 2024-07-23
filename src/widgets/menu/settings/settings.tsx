import {
  BgEffects,
  Button,
  ButtonStyleType,
  PositionElementAbsolutely,
  Widget,
  useOptionalStyle,
  useOverlay,
} from "gram/shared";
import {
  ContactsIcon,
  LanguageIcon,
  MessageIcon,
  SettingsFolderIcon,
} from "public/svgs";
import { Account } from "./account";
import { FolderEdit } from "gram/widgets";
import { animations, AnimationsTimingKeys } from "gram/utils";
import { useTranslation } from "react-i18next";

export const Settings = () => {
  const { closeModal, openModalWithHistory, closeAllModals } = useOverlay();
  const { t } = useTranslation("translation");
  const { className, disableStyle } = useOptionalStyle({
    animationStyle: "SLIDE_TOP",
    timing: "SHORT",
    onDisable: closeModal,
  });
  console.log(1);

  return (
    <PositionElementAbsolutely
      className="justify-center"
      bgEffects={BgEffects.SHADING}
      bgOnClick={disableStyle}
      customElemPositionStyles="top-20"
    >
      <Widget className="gap-2 bg-black-300 pb-0" optionalStyles={className}>
        <div>
          <div className="flex w-full items-center justify-between rounded-md bg-black-400 pl-5 pr-2 text-xl">
            <span>{t("menu.settings.name")}</span>
            <Button
              className="h-fit p-2 text-3xl text-black-200 hover:text-white hover:opacity-80"
              onClick={closeAllModals}
              buttonStyleType={ButtonStyleType.NONE}
            >
              ×
            </Button>
          </div>
          <div className="pr- flex gap-5 bg-black-400 pb-4 pl-5 pr-8">
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
            onClick={() => openModalWithHistory(<Account />)}
          >
            <ContactsIcon />
            {t("menu.settings.account.name")}
          </Button>
          <Button
            buttonStyleType={ButtonStyleType.MENU}
            className="bg-black-400"
          >
            <MessageIcon />
            {t("menu.settings.account.chat")}
          </Button>
          <Button
            buttonStyleType={ButtonStyleType.MENU}
            className="bg-black-400"
            onClick={() => openModalWithHistory(<FolderEdit />)}
          >
            <SettingsFolderIcon />
            {t("menu.settings.folders")}
          </Button>
          <Button
            buttonStyleType={ButtonStyleType.MENU}
            className="rounded-b-md bg-black-400"
          >
            <LanguageIcon />
            {t("menu.settings.language")}
          </Button>
        </div>
      </Widget>
    </PositionElementAbsolutely>
  );
};
