import {
  BgEffects,
  Button,
  ButtonStyleType,
  Input,
  InputStyleType,
  PositionElementAbsolutely,
  Widget,
  useOptionalStyle,
  useOverlay,
} from "gram/shared";
import { ArrowIcon, CallIcon, ContactsIcon, EmailIcon } from "public/svgs";
import { EditWidget, EditWidgetType } from "./edit-widget";
import { animations, AnimationsTimingKeys } from "gram/utils";
import { useTranslation } from "react-i18next";

export const Account = () => {
  const { closeModal, openModalWithHistory, closeAllModals } = useOverlay();
  const { t } = useTranslation("translation");
  const { className, disableStyle } = useOptionalStyle({
    animationStyle: "SLIDE_RIGHT",
    timing: "SHORT",
    onDisable: closeModal,
  });
  return (
    <PositionElementAbsolutely
      className="items-center justify-center"
      bgEffects={BgEffects.SHADING}
      bgOnClick={disableStyle}
    >
      <Widget optionalStyles={className}>
        <div className="flex w-full items-center justify-between p-4 text-xl">
          <div className="flex items-center gap-5">
            <Button className="p-2" onClick={disableStyle}>
              <ArrowIcon />
            </Button>
            <span>{t("menu.settings.account.widget")}</span>
          </div>
          <Button
            className="h-fit p-2 text-3xl text-black-200 hover:text-white hover:opacity-80"
            onClick={closeAllModals}
            buttonStyleType={ButtonStyleType.NONE}
          >
            ×
          </Button>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 pl-5 pr-5 text-xl">
          <div className="h-32 w-32 rounded-full bg-orange-400" />
          <span>Ваня Нестеренко</span>
          <Input
            className="text-sm"
            inputStyleType={InputStyleType.MENU_WIDGET}
            placeholder="Bio"
          />
        </div>
        <div>
          <Button
            buttonStyleType={ButtonStyleType.MENU}
            className="justify-between"
            onClick={() => {
              openModalWithHistory(
                <EditWidget widgetType={EditWidgetType.NAME} />,
              );
            }}
          >
            <div className="flex items-center gap-5 max-phoneM:gap-2">
              <ContactsIcon />
              <span>{t("menu.settings.account.userName.name")}</span>
            </div>
            <span className="text-blue-600">Ваня Нестеренко</span>
          </Button>
          <Button
            buttonStyleType={ButtonStyleType.MENU}
            className="justify-between"
          >
            <div className="flex items-center gap-5 max-phoneM:gap-2">
              <CallIcon />
              <span>{t("menu.settings.account.userPhone")}</span>
            </div>
            <span className="min-w-[7.3rem] overflow-hidden text-blue-600">
              +380 99 377 42 78
            </span>
          </Button>
          <Button
            buttonStyleType={ButtonStyleType.MENU}
            className="justify-between"
            onClick={() => {
              openModalWithHistory(
                <EditWidget widgetType={EditWidgetType.USERNAME} />,
              );
            }}
          >
            <div className="flex items-center gap-5 max-phoneM:gap-2">
              <EmailIcon />
              <span>{t("menu.settings.account.username")}</span>
            </div>
            <span className="text-blue-600">@DinGo42</span>
          </Button>
        </div>
      </Widget>
    </PositionElementAbsolutely>
  );
};
