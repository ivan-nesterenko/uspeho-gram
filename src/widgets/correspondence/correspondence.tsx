import { type FC } from "react";
import { Header } from "./header";
import { Footer } from "./footer";

export const Correspondence: FC = () => {
  return (
    <div className="border-l-1  flex h-full w-full flex-col border-l-black">
      <Header />
      <div className="bg-black-700 h-full w-full pl-4"></div>
      <Footer />
    </div>
  );
};
