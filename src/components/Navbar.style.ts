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
  margin-top: 30px;
`;

export const Logo = styled.div``;
