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
  GROUP = "p-3 flex items-center justify-center hover:bg-black-300 flex-col text-white text-s w-[4.4rem]",
  LEAVE = "p-2 rounded-xl hover:backdrop-brightness-150 hover:text-white transition-all duration-300",
  MENU = "w-full p-3 flex gap-5 items-center text-white hover:bg-black-350 pl-5 pr-5 text-sm",
  WIDGET = "text-blue-600 pl-4 pr-4 p-2 hover:bg-black-300 rounded-md",
  REGULAR = "rounded-md p-1 hover:backdrop-brightness-150 hover:text-white",
  NONE = "",
}

type ButtonProps = {
  children: ReactNode;
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
