import {
  Button,
  ButtonStyleType,
  Input,
  InputStyleType,
  SIGN_UP_FORM_MESSAGES,
  type SignUpSchema,
  Widget,
  signUpSchema,
} from "gram/shared";
import { ErrorStyleType } from "gram/shared/components/input";
import { LogoIcon } from "public/svgs";
import { type SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslation } from "react-i18next";

export const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpSchema>({
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
    resolver: zodResolver(signUpSchema),
  });
  const { t } = useTranslation("translation");
  const onSubmit: SubmitHandler<SignUpSchema> = (data) => {
    console.log(data)
  };

  return (
    <Widget className="w-96 items-center gap-10 bg-black-700">
      <LogoIcon />
      <span className="text-center text-4xl text-black-200">
        {t('forms.signUp.name')}
      </span>
      <form
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-10"
      >
        <Input
          type="text"
          placeholder={SIGN_UP_FORM_MESSAGES.FIRSTNAME_PLACEHOLDER}
          errorStyleType={ErrorStyleType.FORM}
          isError={!!errors.firstName}
          inputMessage="test"
          inputStyleType={InputStyleType.FORM}
          {...register("firstName")}
        >
          <p className="text-red-700">{errors.firstName?.message}</p>
        </Input>
        <Input
          errorStyleType={ErrorStyleType.FORM}
          isError={!!errors.lastName}
          type="text"
          placeholder="Dudeovich"
          inputMessage="last name"
          inputStyleType={InputStyleType.FORM}
          {...register("lastName")}
        >
          <p className="text-red-700">{errors.lastName?.message}</p>
        </Input>
        <Input
          errorStyleType={ErrorStyleType.FORM}
          isError={!!errors.username}
          placeholder="DinGo"
          inputMessage="@username"
          type="text"
          inputStyleType={InputStyleType.FORM}
          {...register("username")}
        >
          <p className="text-red-700">{errors.username?.message}</p>
        </Input>
        <Input
          errorStyleType={ErrorStyleType.FORM}
          isError={!!errors.password}
          inputMessage="password"
          textDisplaySwitch={true}
          placeholder="qwerty"
          type={"text"}
          inputStyleType={InputStyleType.FORM}
          {...register("password")}
        >
          <p className="text-sm text-red-500">{errors.password?.message}</p>
        </Input>
        <Button type="submit" buttonStyleType={ButtonStyleType.SUBMIT}>
          {t('buttons.submit')}
        </Button>
      </form>
    </Widget>
  );
};
