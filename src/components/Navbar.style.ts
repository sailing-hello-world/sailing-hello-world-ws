import styled from "@emotion/styled";
import { blue } from "../colors";

export const Navbar = styled.div`
  width: 100%;
  grid-row-start: 1;
  display: flex;
  justify-content: space-evenly;
`;

export const NavbarInner = styled.div`
  width: 800px;
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.div`
  font-family: Nunito;
  font-style: normal;
  font-weight: 600;
  color: ${blue};
  font-size: 36px;
  align-self: flex-end;
  margin-bottom: 10px;
  width: 500px;
`;

export const Logo = styled.div``;

export const Menu = styled.nav`
  font-family: Nunito;
  color: ${blue};
  font-size: 20px;
  align-self: flex-end;
  margin-bottom: 15px;
  a {
    color: inherit;
    text-decoration: none;
    margin: 10px;
  }
`;
