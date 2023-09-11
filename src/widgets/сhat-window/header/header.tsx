import { Input, InputStyleType } from "gram/shared";
import { type FC } from "react";
import { useTranslation } from "react-i18next";

export const Header: FC = () => {
  const { t } = useTranslation("translation");
  return (
    <header className="w-full pl-5 pr-5">
      <Input
        placeholder={t("inputs.search")}
        inputStyleType={InputStyleType.CHAT_WINDOW}
      />
    </header>
  );
};
