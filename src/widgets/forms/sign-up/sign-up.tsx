import {
  Button,
  ButtonStyleType,
  Input,
  InputStyleType,
  Widget,
} from "gram/shared";
import { ErrorStyleType } from "gram/shared/components/input";
import { EyeIcon, EyeOffIcon, LogoIcon } from "public/svgs";
import { useState } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";

interface IFormInput {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
}

export const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const [isShown, setShown] = useState(false);
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
  return (
    <Widget className="w-96 items-center gap-10 bg-black-700">
      <LogoIcon />
      <span className="text-center text-4xl text-black-200">
        Sign up to telegram
      </span>
      <form
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-10"
      >
        <Input
          type="text"
          placeholder="boba"
          errorStyleType={ErrorStyleType.FORM}
          isError={!!errors.firstName}
          inputMessage="test"
          inputStyleType={InputStyleType.FORM}
          {...register("firstName", {
            required: {
              value: true,
              message: "You should write your first name",
            },
            maxLength: 15,
            minLength: 2,
          })}
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
          {...register("lastName", {
            required: {
              value: true,
              message: "You should write your last name",
            },
            maxLength: 16,
            minLength: 4,
          })}
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
          {...register("username", {
            required: false,
            maxLength: 13,
            minLength: 1,
          })}
        />
        <div className="relative flex items-start">
          <Input
            errorStyleType={ErrorStyleType.FORM}
            isError={!!errors.password}
            inputMessage="password"
            placeholder="qwerty"
            type={isShown ? "text" : "password"}
            inputStyleType={InputStyleType.FORM}
            {...register("password", {
              required: {
                message: ` Write the password as simply as possible, because I don't give a
              fuck`,
                value: true,
              },
              maxLength: 27,
              minLength: 4,
            })}
          >
            <p className="text-sm text-red-500">{errors.password?.message}</p>
          </Input>
          <Button
            onClick={() => setShown((prev) => !prev)}
            buttonStyleType={ButtonStyleType.PASSWORD}
            className="absolute right-2 top-2"
          >
            {isShown ? <EyeOffIcon /> : <EyeIcon />}
          </Button>
        </div>
        <Button type="submit" buttonStyleType={ButtonStyleType.SUBMIT}>
          Submit
        </Button>
      </form>
    </Widget>
  );
};
