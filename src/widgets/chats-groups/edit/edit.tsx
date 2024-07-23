import {
  BgEffects,
  Button,
  ButtonStyleType,
  PositionElementAbsolutely,
  Widget,
  useOptionalStyle,
  useOverlay,
} from "gram/shared";
import { FilesICon } from "public/svgs";
import { Folder } from "./folder";
import { animations } from "gram/utils";
import { useTranslation } from "react-i18next";

export const Edit = () => {
  const { closeModal, closeAllModals } = useOverlay();
  const { t } = useTranslation("translation");
  const { className, disableStyle } = useOptionalStyle({
    animationStyle: "FADE",
    timing: "SHORT",
    onDisable: closeModal,
  });
  return (
    <PositionElementAbsolutely
      bgEffects={BgEffects.SHADING}
      className="justify-center"
      bgOnClick={disableStyle}
      customElemPositionStyles="top-20"
    >
      <Widget optionalStyles={className}>
        <div className="bg flex w-full items-center justify-between pb-1 pl-4 pr-2">
          <span>{t("chatGroups.editFrolders.widget")}</span>
          <Button
            className="h-fit p-2 text-3xl text-black-200 hover:text-white hover:opacity-80"
            onClick={closeAllModals}
            buttonStyleType={ButtonStyleType.NONE}
          >
            ×
          </Button>
        </div>
        <div className="flex w-full flex-col items-center gap-5 bg-black-350 pb-4 pt-4 text-center">
          <FilesICon />
          <span className="text-black-200">
            {t("chatGroups.editFrolders.widgetMessage")}
          </span>
        </div>
        <div className="flex w-full flex-col">
          <span className="p-4 text-blue-600">
            {t("chatGroups.editFrolders.foldersList")}
          </span>
          <div className="h-fit max-h-60 w-full overflow-y-auto">
            <Folder />
            <Folder />
            <Folder />
            <Folder />
            <Folder />
            <Folder />
          </div>
        </div>
        <Button className="flex w-full items-center gap-5 rounded-none p-3 pl-4">
          <div className="relative flex h-7 w-7 items-center justify-center rounded-full bg-[#5288C1]">
            <span className="absolute -top-[0.45rem] text-3xl">+</span>
          </div>
          <span className="text-blue-600">
            {t("chatGroups.editFrolders.addNewFolder")}
          </span>
        </Button>
      </Widget>
    </PositionElementAbsolutely>
  );
};
