import { PositionElementAbsolutely } from "gram/shared";
import { SignInForm } from "gram/widgets";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const SignIn = () => {
  const { t } = useTranslation("translation");
  return (
    <PositionElementAbsolutely
      className="items-center justify-center bg-black-700"
      customElemPossitionStyles="flex flex-col"
    >
      <SignInForm />
      <Link
        href={"/sign-up"}
        className={
          "rounded-md p-3 text-center text-purple-800 hover:bg-gray-800"
        }
      >
        {t('forms.signIn.noAccount')}
      </Link>
    </PositionElementAbsolutely>
  );
};
export default SignIn;
