import {
  PositionElementAbsolutely,
  Button,
  ButtonStyleType,
  Input,
  InputStyleType,
  Widget,
  useOverlay,
  useOptionalStyle,
} from "gram/shared";
import { BgEffects } from "gram/shared/components/absolute-positioning-utile";
import { Contact } from "./contact";
import { animations, AnimationsTimingKeys } from "gram/utils";
import { useTranslation } from "react-i18next";

export const ContactList = () => {
  const { closeModal } = useOverlay();
  const { t } = useTranslation("translation");
  const { className, disableStyle } = useOptionalStyle({
    animationStyle: "SLIDE_TOP",
    timing: "SHORT",
    onDisable: closeModal,
  });
  return (
    <PositionElementAbsolutely
      bgOnClick={disableStyle}
      className="items-center justify-center"
      bgEffects={BgEffects.SHADING}
    >
      <Widget
        className={`gap-5 pb-3 pl-5 pr-1 pt-5`}
        optionalStyles={className}
      >
        <span>{t("menu.contacts.name")}</span>
        <Input
          inputStyleType={InputStyleType.MENU_WIDGET}
          placeholder={t("inputs.search")}
        />
        <div className="h-fit max-h-96 w-full items-center gap-5 overflow-y-auto">
          <Contact />
          <Contact />
          <Contact />
          <Contact />
          <Contact />
          <Contact />
          <Contact />
          <Contact />
          <Contact />
        </div>
        <div className="flex h-full w-full justify-between gap-4 pr-4">
          <Button buttonStyleType={ButtonStyleType.WIDGET}>
            {t("menu.contacts.add")}
          </Button>
          <Button
            buttonStyleType={ButtonStyleType.WIDGET}
            onClick={disableStyle}
          >
            {t("menu.contacts.close")}
          </Button>
        </div>
      </Widget>
    </PositionElementAbsolutely>
  );
};
