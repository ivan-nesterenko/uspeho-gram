import { Button, ButtonStyleType, overlayContext } from "gram/shared";
import { MenuIcon } from "public/svgs";
import { useContext, type FC } from "react";
import { Menu as MenuWindow } from "gram/widgets";

export const Menu: FC = () => {
  const { openOverlay } = useContext(overlayContext);
  return (
    <Button
      buttonStyleType={ButtonStyleType.GROUP}
      onClick={() => openOverlay(<MenuWindow />)}
    >
      <MenuIcon />
    </Button>
  );
};
