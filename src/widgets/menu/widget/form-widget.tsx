import {
  Button,
  ButtonStyleType,
  Input,
  InputStyleType,
  PositionElementAbsolutely,
  Widget,
  useOptionalStyle,
  useOverlay,
} from "gram/shared";
import { BgEffects } from "gram/shared/components/absolute-positioning-utile";
import { animations, AnimationsTimingKeys } from "gram/utils";
import { type FC } from "react";
import { useTranslation } from "react-i18next";

export enum WidgetType {
  CHANNEL = "channel",
  GROUP = "group",
}

type WidgetProps = {
  widgetType: WidgetType;
};

export const FormWidget: FC<WidgetProps> = ({ widgetType }) => {
  const { closeOverlay } = useOverlay();
  const { t } = useTranslation("translation", { keyPrefix: widgetType });
  const { className, disableStyle } = useOptionalStyle({
    style: animations.fade,
    timing: AnimationsTimingKeys.SHORT,
    onDisable: closeOverlay,
  });
  return (
    <PositionElementAbsolutely
      bgOnClick={disableStyle}
      className="items-center justify-center"
      bgEffects={BgEffects.SHADING}
    >
      <Widget className="gap-5 pb-3 pl-5 pr-5 pt-5" optionalStyles={className}>
        <div className="flex h-fit w-full items-center gap-5">
          <div className="rounded-full bg-orange-400 p-10" />
          <Input
            placeholder={t("name")}
            inputStyleType={InputStyleType.MENU_WIDGET}
          />
        </div>
        {widgetType === WidgetType.CHANNEL && (
          <Input
            placeholder={t("newChannelDescription")}
            inputStyleType={InputStyleType.MENU_WIDGET}
          />
        )}
        <div className="flex h-full w-full justify-end gap-4">
          <Button
            buttonStyleType={ButtonStyleType.WIDGET}
            onClick={disableStyle}
          >
            {t("leave")}
          </Button>
          <Button buttonStyleType={ButtonStyleType.WIDGET}>
            {t("create")}
          </Button>
        </div>
      </Widget>
    </PositionElementAbsolutely>
  );
};
