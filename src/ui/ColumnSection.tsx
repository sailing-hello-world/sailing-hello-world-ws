import React, { ReactNode } from "react";

type PageWideSectionProps = {
  children?: ReactNode;
};
const ColumnSection = ({ children }: PageWideSectionProps) => (
  <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
    <div style={{ width: 800 }}>{children}</div>
  </div>
);

export default ColumnSection;
