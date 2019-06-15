import React, { ReactNode } from "react";
import Navbar from "./Navbar";
import * as S from "./Layout.style";
import { Global } from "@emotion/core";
import Helmet from "react-helmet";
import mapbox from "mapbox-gl";

// Head tag, injected with react-helmet
type HeadProps = {
  title: string;
};
const Head = ({ title }: HeadProps) => {
  mapbox.accessToken =
    "pk.eyJ1IjoiaGF3a2FhIiwiYSI6ImNqd3g2ZHZ5cDBkemw0OHBqOW90em1uMmUifQ.JW05ZOtFI5E9QyWm_TlCuQ";
  return (
    <Helmet>
      <title>{title}</title>
      <meta
        name="description"
        content="Sailing Hello World is the story of two crazy people in their late-twenties leaving their 9-5 jobs and selling everything they had to sail the world. This webpage includes inspirational journey log entries, practical information for those who want to follow, and some content for system developers."
      />
    </Helmet>
  );
};

type LayoutProps = {
  children?: ReactNode;
};

const Layout = ({ children }: LayoutProps) => (
  <div style={{ height: "100%" }}>
    <Head title="Sailing Hello World" />
    <Global styles={S.globalStyle} />
    <S.MainContainer>
      <Navbar />
      {children}
    </S.MainContainer>
  </div>
);

export default Layout;
