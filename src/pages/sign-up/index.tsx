import { PositionElementAbsolutely } from "gram/shared";
import { SignUpForm } from "gram/widgets";

const SignUp = () => {
  return (
    <PositionElementAbsolutely className="items-center justify-center bg-black-700">
      <SignUpForm />
    </PositionElementAbsolutely>
  );
};
export default SignUp;
