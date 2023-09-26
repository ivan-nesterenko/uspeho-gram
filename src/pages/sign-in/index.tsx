import { PositionElementAbsolutely } from "gram/shared";
import { SignInForm } from "gram/widgets";
import Link from "next/link";

const SignIn = () => {
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
        Створити акаунт
      </Link>
    </PositionElementAbsolutely>
  );
};
export default SignIn;
