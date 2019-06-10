import React, { ReactNode } from "react";

type PageWideSectionProps = {
  height: number;
  children?: ReactNode;
};
const PageWideSection = ({ height, children }: PageWideSectionProps) => (
  <div style={{ width: "100%", overflow: "hidden", height }}>{children}</div>
);

export default PageWideSection;
