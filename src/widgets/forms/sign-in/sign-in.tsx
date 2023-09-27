import {
  Button,
  ButtonStyleType,
  Input,
  InputStyleType,
  Widget,
  type SignInSchema,
  signInSchema,
} from "gram/shared";
import { ErrorStyleType } from "gram/shared/components/input";
import { LogoIcon } from "public/svgs";
import { type SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslation } from "react-i18next";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

export const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInSchema>({
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
    resolver: zodResolver(signInSchema),
  });
  const { t } = useTranslation("translation");
  const router = useRouter();

  const onSubmit: SubmitHandler<SignInSchema> = async (data) => {
    const res = await signIn("credentials", {
      data,
      redirect: false,
    });
    if (res && !res.error) await router.push("/");
    else console.log(res, res?.error);
  };
  return (
    <Widget className="w-96 items-center gap-10 bg-black-700">
      <LogoIcon />
      <span className="text-center text-4xl text-black-200">
       {t('forms.signIn.name')}
      </span>
      <form
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-10"
      >
        <Input
          errorStyleType={ErrorStyleType.FORM}
          isError={!!errors.username}
          placeholder="username_example"
          inputMessage="@username"
          type="text"
          inputStyleType={InputStyleType.FORM}
          {...register("username")}
        >
          <p className="text-sm text-red-500">{errors.username?.message}</p>
        </Input>
        <Input
          errorStyleType={ErrorStyleType.FORM}
          isError={!!errors.password}
          inputMessage="password"
          placeholder="qwerty"
          type={"text"}
          textDisplaySwitch={true}
          inputStyleType={InputStyleType.FORM}
          {...register("password")}
        >
          <p className="text-sm text-red-500">{errors.password?.message}</p>
        </Input>
        <Button type="submit" buttonStyleType={ButtonStyleType.SUBMIT}>
          {t("buttons.submit")}
        </Button>
      </form>
    </Widget>
  );
};
