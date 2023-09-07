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
import { animations, AnimationsTimingKeys } from "gram/utils";
import { useState, type FC, useContext } from "react";

export const EditWidgetType = {
  name: {
    text: "Edit your name",
    placeholder_one: "First name",
    placeholder_two: "Last name",
  },
  username: {
    text: "Username",
    placeholder_one: "@username",
  },
};

type EditWidgetProps = {
  type?: {
    text: string;
    placeholder_one: string;
    placeholder_two?: string;
  };
};
export const EditWidget: FC<EditWidgetProps> = ({ type }) => {
  const [selected, setSelected] = useState<boolean | null>(null);
  const { closeOverlay } = useContext(overlayContext);
  return (
    <PositionElementAbsolutely
      bgEffects={BgEffects.SHADING}
      className="items-center justify-center"
      bgOnClick={closeOverlay}
      contentClassName={animations.fade}
      delay={AnimationsTimingKeys.SHORT}
    >
      <Widget className="gap-5 p-6">
        <span className="text-xl">{type?.text}</span>
        <div className="relative">
          <span
            className={`absolute -top-4 text-s text-black-200  ${
              selected && selected !== null ? "text-blue-600" : "text-black-200"
            }`}
          >
            {type?.placeholder_one}
          </span>
          <Input
            onClick={() => setSelected(true)}
            value={"Ваня"}
            inputStyleType={InputStyleType.MENU_WIDGET}
            placeholder={type?.placeholder_one}
          />
        </div>
        {type?.placeholder_two && (
          <div className="relative">
            <span
              className={`absolute -top-4 text-s  ${
                !selected && selected !== null
                  ? "text-blue-600"
                  : "text-black-200"
              }`}
            >
              {type?.placeholder_two}
            </span>
            <Input
              onClick={() => setSelected(false)}
              value={"Нестеренко"}
              inputStyleType={InputStyleType.MENU_WIDGET}
              placeholder={type.placeholder_two}
            />
          </div>
        )}
        <div className="flex justify-end">
          <Button
            buttonStyleType={ButtonStyleType.WIDGET}
            onClick={closeOverlay}
          >
            Cancel
          </Button>
          <Button buttonStyleType={ButtonStyleType.WIDGET}>Save</Button>
        </div>
      </Widget>
    </PositionElementAbsolutely>
  );
};
