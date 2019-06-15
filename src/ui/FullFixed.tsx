import React, { ReactNode } from "react";

type FullFixedProps = {
  children?: ReactNode;
};
const FullFixed = ({ children }: FullFixedProps) => (
  <div style={{ width: "100%", overflow: "hidden", height: "100%" }}>
    {children}
  </div>
);

export default FullFixed;
