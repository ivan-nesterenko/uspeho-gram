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

export const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInSchema>({
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
    resolver: zodResolver(signInSchema),
  });
  const onSubmit: SubmitHandler<SignInSchema> = (data) => console.log(data);
  return (
    <Widget className="w-96 items-center gap-10 bg-black-700">
      <LogoIcon />
      <span className="text-center text-4xl text-black-200">
        Sign in to telegram
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
          {...register("username", {
            required: {
              message: "It's required field",
              value: true,
            },
            maxLength: {
              message: "Your username is to large",
              value: 32,
            },
            minLength: {
              message: "Write at least a symbol...",
              value: 1,
            },
          })}
        />
        <Input
          errorStyleType={ErrorStyleType.FORM}
          isError={!!errors.password}
          inputMessage="password"
          placeholder="qwerty"
          type={"text"}
          textDisplaySwitch={true}
          inputStyleType={InputStyleType.FORM}
          {...register("password", {
            required: {
              message: `It's required field`,
              value: true,
            },
            maxLength: 90,
            minLength: 4,
          })}
        >
          <p className="text-sm text-red-500">{errors.password?.message}</p>
        </Input>
        <Button type="submit" buttonStyleType={ButtonStyleType.SUBMIT}>
          Submit
        </Button>
      </form>
    </Widget>
  );
};
