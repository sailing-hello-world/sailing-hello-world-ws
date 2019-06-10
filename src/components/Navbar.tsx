import React from "react";
import * as S from "./Navbar.style";
import Sun from "../svg/sun";

const Navbar = () => (
  <S.Navbar>
    <S.NavbarInner>
      <S.Title>Hello World</S.Title>
      <S.Logo>
        <Sun height={150} width={150} />
      </S.Logo>
    </S.NavbarInner>
  </S.Navbar>
);

export default Navbar;
