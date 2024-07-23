import { PositionElementAbsolutely } from "gram/shared";
import { SignUpForm } from "gram/widgets";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const SignUp = () => {
  const { t } = useTranslation("translation");
  return (
    <PositionElementAbsolutely
      className="items-center justify-center bg-black-700"
      customElemPositionStyles="flex flex-col"
    >
      <SignUpForm />
      <Link
        href={"/sign-in"}
        className={
          "rounded-md p-3 text-center text-purple-800 hover:bg-gray-800"
        }
      >
        {t("forms.signUp.hasAnAccount")}
      </Link>
    </PositionElementAbsolutely>
  );
};
export default SignUp;
