import {
  type DetailedHTMLProps,
  type InputHTMLAttributes,
  type ReactNode,
  forwardRef,
  memo,
} from "react";
import { twJoin } from "tailwind-merge";

export enum InputStyleType {
  CORRESPONDENCE = "bg-black-400 h-full w-full pl-2 text-white border-none",
  CHAT_WINDOW = "bg-black-350 w-full rounded-3xl p-2 pl-6 text-white border-none",
  MENU_WIDGET = "border-b-2 border-black-350 w-full bg-black-400 text-white h-fit pb-1",
  FORM = "w-full bg-black-600 rounded-md p-3 border-2 border-black-350",
  NONE = "",
}
export enum ErrorStyleType {
  FORM = "border-red-700",
  NONE = "",
}
type InputProps = {
  inputStyleType?: InputStyleType;
  className?: string;
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
        inputMessage,
        inputMessageClassName,
        errorStyleType = ErrorStyleType.NONE,
        ...props
      },
      ref,
    ) => (
      <div className="relative w-full">
        <div
          className={twJoin(
            inputMessageClassName,
            "absolute -top-2 left-3 bg-black-700 pl-1 pr-1 text-s text-black-200",
          )}
        >
          {inputMessage}
        </div>
        <input
          ref={ref}
          className={`${twJoin(
            inputStyleType,
            className,
            isError && errorStyleType,
          )} outline-none placeholder:text-gray-500 hover:border-purple-800`}
          {...props}
        />
        {children}
      </div>
    ),
  ),
);
