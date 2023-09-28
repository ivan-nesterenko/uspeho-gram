import {
  type ButtonHTMLAttributes,
  type DetailedHTMLProps,
  type FC,
  type ReactNode,
} from "react";
import { twJoin } from "tailwind-merge";

// enum Icons {
//   BOOKMARK = "BookmarkIcon",
//   CALLICON = "CallIconIcon",
//   CONTACTS = "ContactsIcon",
//   GROUP = "GroupIcon",
//   MEGAPHONE = "MegaphoneICon",
//   MENU = "MenuIcon",
//   MOON = "MoonIcon",
//   PLUS = "PlusIcon",
//   SETTINGS = "SettingsIcon",
//   SEARCH = "SearchIcon",
//   FOLDER = "FolderIcon",
//   GROUPSETTINGS = "GroupSettingsIcon",
//   MESSAGES = "MessagesIcon",
//   NONE = "",
// }

export enum ButtonStyleType {
  GROUP = "p-3 flex items-center justify-center hover:bg-black-300 flex-col text-s w-[4.4rem] text-black-200",
  LEAVE = "p-2 rounded-xl hover:backdrop-brightness-150 hover:text-white transition-all duration-300",
  MENU = "w-full p-3 flex gap-3 items-center text-white hover:bg-black-350 pl-5 pr-5 text-sm",
  WIDGET = "text-blue-600 pl-4 pr-4 p-2 hover:bg-black-300 rounded-md",
  REGULAR = "rounded-md p-1 hover:backdrop-brightness-150 hover:text-white text-black-200",
  SUBMIT = "bg-purple-600 rounded-md p-3 hover:bg-purple-800",
  PASSWORD = "flex items-center justify-center p-1",
  NONE = "",
}

type ButtonProps = {
  children?: ReactNode;
  className?: string;
  buttonStyleType?: ButtonStyleType;
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const Button: FC<ButtonProps> = ({
  children,
  className,
  buttonStyleType = ButtonStyleType.REGULAR,
  ...props
}) => {
  return (
    <button
      className={`${twJoin(className, buttonStyleType)} break-words`}
      {...props}
    >
      {children}
    </button>
  );
};
