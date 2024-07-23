import { Button, ButtonStyleType, useOverlay } from "gram/shared";
import { MenuIcon } from "public/svgs";
import { type FC } from "react";
import { Menu as MenuWindow } from "gram/widgets";

export const Menu: FC = () => {
  const { openModalWithHistory } = useOverlay();
  return (
    <Button
      buttonStyleType={ButtonStyleType.GROUP}
      onClick={() => openModalWithHistory(<MenuWindow />)}
    >
      <MenuIcon />
    </Button>
  );
};
