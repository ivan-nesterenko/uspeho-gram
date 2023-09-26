import { EyeOffIcon, EyeIcon } from "public/svgs";
import {
  type DetailedHTMLProps,
  type InputHTMLAttributes,
  type ReactNode,
  forwardRef,
  memo,
  useState,
  useRef,
} from "react";
import { twJoin } from "tailwind-merge";
import { Button, ButtonStyleType } from "./button";

export enum InputStyleType {
  CORRESPONDENCE = "bg-black-400 h-full w-full pl-2 text-white border-none",
  CHAT_WINDOW = "bg-black-350 w-full rounded-3xl p-2 pl-6 text-white border-none",
  MENU_WIDGET = "border-b-2 border-black-350 w-full bg-black-400 text-white h-fit pb-1",
  FORM = "w-full bg-black-600 rounded-md p-3 border-2 border-black-350 hover:border-purple-800",
  NONE = "",
}
export enum ErrorStyleType {
  FORM = "border-red-700",
  NONE = "",
}
{
  /* <Button
onClick={() => setShown((prev) => !prev)}
buttonStyleType={ButtonStyleType.PASSWORD}
className="absolute right-2 top-2"
>
{isShown ? <EyeOffIcon /> : <EyeIcon />}
</Button> */
}
type InputProps = {
  textDisplaySwitch?: boolean;
  inputStyleType?: InputStyleType;
  className?: string;
  type?: string;
  children?: ReactNode;
  isError?: boolean;
  errorStyleType?: ErrorStyleType;
  inputMessage?: string;
  inputMessageClassName?: string;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export const Input = memo(
  forwardRef<HTMLInputElement, InputProps>(
    (
      {
        children,
        inputStyleType = InputStyleType.NONE,
        className,
        isError,
        type,
        inputMessage,
        inputMessageClassName,
        textDisplaySwitch,
        errorStyleType = ErrorStyleType.NONE,
        ...props
      },
      ref,
    ) => {
      const [isShown, setShown] = useState(false);
      const refInputContainer = useRef<HTMLDivElement | null>(null);

      return (
        <div className="relative w-full" ref={refInputContainer}>
          {inputMessage && (
            <div
              className={twJoin(
                "opacity-1 relative left-3 top-[2px] h-[2px] w-fit bg-black-700 pl-2 pr-2 transition-opacity",
              )}
            >
              <span
                className={twJoin(
                  inputMessageClassName,
                  "relative -top-[700%] text-sm text-black-200",
                )}
              >
                {inputMessage}
              </span>
            </div>
          )}
          <input
            ref={ref}
            type={textDisplaySwitch ? (isShown ? type : "password") : type}
            className={`${twJoin(
              inputStyleType,
              className,
              isError && errorStyleType,
            )} outline-none placeholder:text-gray-500`}
            {...props}
          />
          {children}
          {textDisplaySwitch && (
            <Button
              onClick={() => setShown((prev) => !prev)}
              buttonStyleType={ButtonStyleType.PASSWORD}
              className="absolute right-2 top-2"
            >
              {isShown ? <EyeOffIcon /> : <EyeIcon />}
            </Button>
          )}
        </div>
      );
    },
  ),
);
