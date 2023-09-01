import { AppWrapper, ModalOverlay } from "gram/shared";
import { type FC, type ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <ModalOverlay>
      <AppWrapper>{children}</AppWrapper>
    </ModalOverlay>
  );
};

export default Layout;
