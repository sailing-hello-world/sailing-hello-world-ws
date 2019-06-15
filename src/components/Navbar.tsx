import React from "react";
import * as S from "./Navbar.style";
import Sun from "../svg/Sun";
import { Link } from "gatsby";

const Navbar = () => (
  <S.Navbar>
    <S.NavbarInner>
      <S.Title>Hello World</S.Title>
      <S.Menu>
        <Link to="/">Blog</Link>
        <Link to="/map/">Map</Link>
        <Link to="/about/">About</Link>
      </S.Menu>
      <S.Logo>
        <Sun height={150} width={150} />
      </S.Logo>
    </S.NavbarInner>
  </S.Navbar>
);

export default Navbar;
