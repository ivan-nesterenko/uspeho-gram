import { Button, ButtonStyleType, useAnimate, useOverlay } from "gram/shared";
import {
  BookmarkIcon,
  ContactsIcon,
  GroupIcon,
  MegaphoneIcon,
  MoonIcon,
  SettingsIcon,
} from "public/svgs";
import { UserProfile } from "./user-profile";
import { ContactList } from "./contact-list";
import { Settings } from "./settings";
import { useTranslation } from "react-i18next";
import { twJoin, twMerge } from "tailwind-merge";
import { FormWidget, WidgetType } from "./widget/form-widget";
import { useEffect, useRef, useState } from "react";
import { useAnimate as useAnimateIvan } from "gram/shared/hooks/use-animate";
import { useShortAnimate } from "gram/shared/hooks/short-use-Animate";

export const Menu = () => {
  const { closeModal, openModalWithoutHistory, ModalWrapper, closeAllModals } =
    useOverlay();

  const { t } = useTranslation("translation");
  const [click, setClick] = useState(false);

  // const ref = useRef<HTMLDivElement>(null);
  // const { toggleInAnimation, toggleOutAnimation } = useAnimate({
  //   in: {
  //     className: "animate-slideInLeft",
  //     timing: 2000,
  //   },
  //   out: {
  //     className: "animate-slideOutLeft",
  //     timing: 900,
  //   },
  //   ref,
  //   onAnimationFinish: (isInAnimation) => {
  //     console.log(1);
  //     if (isInAnimation) return;
  //     closeModal();
  //   },
  //   onToggleInAnimation: () => {
  //     setClick(true);
  //   },
  // });

  // const { toggleOutAnimation, toggleInAnimation } = useShortAnimate({
  //   in: {
  //     className: "animate-slideInLeft",
  //     timing: 2000,
  //   },
  //   out: {
  //     className: "animate-slideOutLeft",
  //     timing: 900,
  //   },
  //   ref,
  //   toggler: setClick,
  // });
  const { toggleInAnimation, toggleOutAnimation, ref } = useAnimateIvan({
    in: {
      className: "",
      // className: "translate-x-0",
      onAnimationEnd: () => {
        console.log("in end");
      },
      onAnimationStart: () => {
        console.log("in start");
      },
    },
    out: {
      className: "translate-x-[-100%] ",
      onAnimationEnd: () => {
        console.log("out end");
        // setClick(false);
        closeModal();
      },
      onAnimationStart: () => {
        console.log("out start");
      },
    },
    onToggleInAnimation: () => {
      setClick(true);
    },
  });

  return (
    <>
      {/* <ModalWrapper
        onBgClick={() => {
          toggleOutAnimation();
        }}
      > */}
      {/* <Button onClick={toggleInAnimation}>in</Button>
      <Button onClick={toggleOutAnimation}>out</Button>
      {click && (
        <div
          ref={ref}
          className="absolute h-[200px] w-[200px] bg-slate-700 transition-all"
        />
      )}*/}
      {/* </ModalWrapper> */}
      <ModalWrapper onBgClick={toggleOutAnimation}>
        <div
          ref={ref}
          className={twJoin("flex h-screen w-fit flex-col gap-4 bg-black-400 ")}
        >
          <UserProfile />
          <div
            onClick={() => setClick((prev) => !prev)}
            className={twMerge("w-fit border-t-2 border-black-600")}
          >
            <Button
              buttonStyleType={ButtonStyleType.MENU}
              onClick={() => {
                openModalWithoutHistory(
                  <FormWidget widgetType={WidgetType.GROUP} />,
                );
              }}
            >
              <GroupIcon />
              {t("menu.group")}
            </Button>
            <Button
              buttonStyleType={ButtonStyleType.MENU}
              onClick={() => {
                openModalWithoutHistory(
                  <FormWidget widgetType={WidgetType.CHANNEL} />,
                );
              }}
            >
              <MegaphoneIcon />
              {t("menu.channel")}
            </Button>
            <Button
              buttonStyleType={ButtonStyleType.MENU}
              onClick={() => {
                openModalWithoutHistory(<ContactList />);
              }}
            >
              <ContactsIcon />
              {t("menu.contacts.name")}
            </Button>
            <Button buttonStyleType={ButtonStyleType.MENU}>
              <BookmarkIcon />
              {t("menu.saved")}
            </Button>
            <Button
              buttonStyleType={ButtonStyleType.MENU}
              onClick={() => {
                openModalWithoutHistory(<Settings />);
              }}
            >
              <SettingsIcon />
              {t("menu.settings.name")}
            </Button>
            <Button buttonStyleType={ButtonStyleType.MENU} className="gap-16">
              <div className="flex gap-5">
                <MoonIcon />
                {t("menu.themeMode")}
              </div>
              <div className="h-full w-16 bg-white">ads</div>
            </Button>
          </div>
        </div>
      </ModalWrapper>
    </>
  );
};
