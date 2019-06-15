import React, { ReactNode } from "react";
import Navbar from "./Navbar";
import * as S from "./Layout.style";
import { Global } from "@emotion/core";
import Helmet from "react-helmet";

// Head tag, injected with react-helmet
type HeadProps = {
  title: string;
};
const Head = ({ title }: HeadProps) => (
  <Helmet>
    <title>{title}</title>
    <meta
      name="description"
      content="Sailing Hello World is the story of two crazy people in their late-twenties leaving their 9-5 jobs and selling everything they had to sail the world. This webpage includes inspirational journey log entries, practical information for those who want to follow, and some content for system developers."
    />
  </Helmet>
);

type LayoutProps = {
  children?: ReactNode;
};

const Layout = ({ children }: LayoutProps) => (
  <>
    <Head title="Sailing Hello World" />
    <Global styles={S.globalStyle} />
    <S.MainContainer>
      <Navbar />
      {children}
    </S.MainContainer>
  </>
);

export default Layout;
