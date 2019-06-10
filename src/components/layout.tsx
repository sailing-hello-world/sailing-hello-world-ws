import React, { ReactNode } from "react";
import Navbar from "./Navbar";
import * as S from "./Layout.style";
import { Global } from "@emotion/core";

type LayoutProps = {
  children?: ReactNode;
};
const Layout = ({ children }: LayoutProps) => (
  <>
    <Global styles={S.globalStyle} />
    <S.MainContainer>
      <Navbar />
      {children}
    </S.MainContainer>
  </>
);

export default Layout;
