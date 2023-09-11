import { Button, Input, InputStyleType } from "gram/shared";
import { ClipIcon, SendIcon } from "public/svgs";
import { type FC } from "react";
import { useTranslation } from "react-i18next";

export const Footer: FC = () => {
  const { t } = useTranslation("translation");

  return (
    <footer className="flex h-fit w-full bg-black-400 pb-1 pr-2">
      <Button>
        <ClipIcon />
      </Button>
      <Input
        inputStyleType={InputStyleType.CORRESPONDENCE}
        placeholder={t("inputs.correspondence")}
      />
      <Button>
        <SendIcon />
      </Button>
    </footer>
  );
};
