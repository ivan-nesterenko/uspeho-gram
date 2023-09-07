import {
  overlayContext,
  PositionElementAbsolutely,
  Button,
  ButtonStyleType,
  Input,
  InputStyleType,
  Widget,
} from "gram/shared";
import { BgEffects } from "gram/shared/components/absolute-positioning-utile";
import { useContext } from "react";
import { Contact } from "./contact";
import { animations, AnimationsTimingKeys } from "gram/utils";

export const ContactList = () => {
  const { closeOverlay } = useContext(overlayContext);
  return (
    <PositionElementAbsolutely
      bgOnClick={closeOverlay}
      className="items-center justify-center"
      bgEffects={BgEffects.SHADING}
      contentClassName={animations.slideTop}
      delay={AnimationsTimingKeys.SHORT}
    >
      <Widget className="gap-5 pb-3 pl-5 pr-1 pt-5">
        <span>Contacts</span>
        <Input
          inputStyleType={InputStyleType.MENU_WIDGET}
          placeholder="Search"
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
          <Button buttonStyleType={ButtonStyleType.WIDGET}>Add contact</Button>
          <Button
            buttonStyleType={ButtonStyleType.WIDGET}
            onClick={closeOverlay}
          >
            Close
          </Button>
        </div>
      </Widget>
    </PositionElementAbsolutely>
  );
};
