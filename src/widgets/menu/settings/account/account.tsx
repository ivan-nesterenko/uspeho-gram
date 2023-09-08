import {
  BgEffects,
  Button,
  ButtonStyleType,
  Input,
  InputStyleType,
  PositionElementAbsolutely,
  Widget,
  overlayContext,
} from "gram/shared";
import { ArrowIcon, CallIcon, ContactsIcon, EmailIcon } from "public/svgs";
import { useContext } from "react";
import { EditWidget, EditWidgetType } from "./edit-widget";
import { animations, AnimationsTimingKeys } from "gram/utils";
import { useTranslation } from "react-i18next";

export const Account = () => {
  const { closeOverlay, openOverlay, closeAllOverlays } =
    useContext(overlayContext);
  const { t } = useTranslation("translation");
  return (
    <PositionElementAbsolutely
      className="justify-center"
      bgEffects={BgEffects.SHADING}
      bgOnClick={closeOverlay}
      contentClassName={animations.slideRight}
      delay={AnimationsTimingKeys.SHORT}
    >
      <Widget className="mt-20">
        <div className="flex w-full items-center justify-between p-4 text-xl">
          <div className="flex items-center gap-5">
            <Button className="p-2" onClick={closeOverlay}>
              <ArrowIcon />
            </Button>
            <span>{t("menu.settings.account.widget")}</span>
          </div>
          <Button
            className="h-fit p-2 text-3xl text-black-200 hover:text-white hover:opacity-80"
            onClick={closeAllOverlays}
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
              openOverlay(<EditWidget type={EditWidgetType.name} />);
            }}
          >
            <div className="flex items-center gap-5">
              <ContactsIcon />
              {t("menu.settings.account.userName.name")}
            </div>
            <span className="text-blue-600">Ваня Нестеренко</span>
          </Button>
          <Button
            buttonStyleType={ButtonStyleType.MENU}
            className="justify-between"
          >
            <div className="flex items-center gap-5">
              <CallIcon />
              {t("menu.settings.account.userPhone")}
            </div>
            <span className="text-blue-600">+380 99 377 42 78</span>
          </Button>
          <Button
            buttonStyleType={ButtonStyleType.MENU}
            className="justify-between"
            onClick={() => {
              openOverlay(<EditWidget type={EditWidgetType.username} />);
            }}
          >
            <div className="flex items-center gap-5">
              <EmailIcon />
              {t("menu.settings.account.username")}
            </div>
            <span className="text-blue-600">@DinGo42</span>
          </Button>
        </div>
      </Widget>
    </PositionElementAbsolutely>
  );
};
