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
import { animations, AnimationsTimingKeys } from "gram/utils";
import { type FC } from "react";
import { useTranslation } from "react-i18next";

export enum EditWidgetType {
  NAME = "name",
  USERNAME = "username",
}

type EditWidgetProps = {
  widgetType: EditWidgetType;
};
export const EditWidget: FC<EditWidgetProps> = ({ widgetType }) => {
  const { closeModal } = useOverlay();
  const { t } = useTranslation("translation");
  const { className, disableStyle } = useOptionalStyle({
    animationStyle: "FADE",
    timing: "SHORT",
    onDisable: closeModal,
  });
  return (
    <PositionElementAbsolutely
      bgEffects={BgEffects.SHADING}
      className="items-center justify-center"
      bgOnClick={disableStyle}
    >
      <Widget className="gap-5 p-6" optionalStyles={className}>
        <span className="text-xl">
          {widgetType === EditWidgetType.NAME
            ? t("menu.settings.account.userName.widget")
            : t("menu.settings.account.username")}
        </span>
        <Input
          value={"Ваня"}
          inputStyleType={InputStyleType.MENU_WIDGET}
          placeholder={t("inputs.editFirstName")}
        />
        {widgetType === EditWidgetType.NAME && (
          <Input
            value={"Нестеренко"}
            inputStyleType={InputStyleType.MENU_WIDGET}
            placeholder={t("inputs.editLastName")}
          />
        )}
        <div className="flex justify-end">
          <Button
            buttonStyleType={ButtonStyleType.WIDGET}
            onClick={disableStyle}
          >
            {t("buttons.leave")}
          </Button>
          <Button buttonStyleType={ButtonStyleType.WIDGET}>
            {t("buttons.save")}
          </Button>
        </div>
      </Widget>
    </PositionElementAbsolutely>
  );
};
