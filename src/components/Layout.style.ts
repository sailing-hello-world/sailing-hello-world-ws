import styled from "@emotion/styled";
import { css } from "@emotion/core";

export const globalStyle = css`
  @import url("https://fonts.googleapis.com/css?family=Montserrat|Nunito&display=swap");
  html,
  body {
    margin: 0;
    padding: 0;
    height: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    > div {
      height: 100%;
      > div {
        height: 100%;
      }
    }
  }
`;

export const MainContainer = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 100px auto;
  font-family: "Nunito", sans-serif;
`;
