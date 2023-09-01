import {
  type DetailedHTMLProps,
  type InputHTMLAttributes,
  type FC,
} from "react";
import { twJoin } from "tailwind-merge";

export enum InputStyleType {
  CORRESPONDENCE = "bg-black-400 h-full w-full pl-2 text-white border-none",
  CHAT_WINDOW = "bg-black-350 w-full rounded-3xl p-2 pl-6 text-white border-none",
  MENU_WIDGET = "border-b-2 border-black-350 w-full bg-black-400 text-white h-fit pb-1",
  NONE = "",
}
type InputProps = {
  inputStyleType?: InputStyleType;
  className?: string;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export const Input: FC<InputProps> = ({
  inputStyleType = InputStyleType.NONE,
  className,
  ...props
}) => (
  <input
    className={`${twJoin(inputStyleType, className)}  outline-none`}
    {...props}
  />
);
