import {
  Button,
  ButtonStyleType,
  Input,
  InputStyleType,
  PositionElementAbsolutely,
  overlayContext,
} from "gram/shared";
import { BgEffects } from "gram/shared/components/absolute-positioning-utile";
import { type FC, useContext } from "react";

type CommunityWidgetProps = {
  name: string;
  description?: string;
  buttons?: {
    continue: string;
  };
};
///: Record<string, WidgetProps> хз щось не працює типізація
export const CommunityWidgetType = {
  channel: {
    name: "Channel name",
    description: "Description (optional)",
    buttons: {
      continue: "Create",
    },
  },
  group: {
    name: "Group name",
    buttons: {
      continue: "Next",
    },
  },
};
export const CommunityWidget: FC<CommunityWidgetProps> = ({
  name,
  description,
  buttons = { continue: "create" },
}) => {
  const { closeOverlay } = useContext(overlayContext);
  return (
    <PositionElementAbsolutely
      bgOnClick={closeOverlay}
      className="items-center justify-center"
      bgEffects={BgEffects.SHADING}
    >
      <div className="flex flex-col gap-5 rounded-xl bg-black-400 pb-3 pl-5 pr-5 pt-5">
        <div className="flex h-fit w-full items-center gap-5">
          <div className="rounded-full bg-orange-400 p-10" />
          <Input
            placeholder={name}
            inputStyleType={InputStyleType.MENU_WIDGET}
          />
        </div>
        {description && (
          <Input
            placeholder={description}
            inputStyleType={InputStyleType.MENU_WIDGET}
          />
        )}
        <div className="flex h-full w-full justify-end gap-4">
          <Button
            buttonStyleType={ButtonStyleType.WIDGET}
            onClick={closeOverlay}
          >
            Cancel
          </Button>
          <Button buttonStyleType={ButtonStyleType.WIDGET}>
            {buttons.continue}
          </Button>
        </div>
      </div>
    </PositionElementAbsolutely>
  );
};
