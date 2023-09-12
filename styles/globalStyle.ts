"use client";

import { createGlobalStyle } from "styled-components";

import pretendardBold from "@/assets/fonts/Pretendard-Bold.woff2";
import pretendardRegular from "@/assets/fonts/Pretendard-Regular.woff2";
import markproBold from "@/assets/fonts/markpro-bold.woff2";
import markproRegular from "@/assets/fonts/markpro-regular.woff2";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "baseFont";
    font-weight: normal;
    src: url(${markproRegular}) format("woff2");
  }

  @font-face {
    font-family: "baseFont";
    font-weight: normal;
    /* unicode-range is korean and number */
    unicode-range: U+AC00-D7A3, U+0030-0039;
    src: url(${pretendardRegular}) format("woff2");
  }

  @font-face {
    font-family: "baseFont";
    font-weight: bold;
    src: url(${markproBold}) format("woff2");
  }

  @font-face {
    font-family: "baseFont";
    font-weight: bold;
    /* unicode-range is korean and number */
    unicode-range: U+AC00-D7A3, U+0030-0039;
    src: url(${pretendardBold}) format("woff2");
  }

  body {
    &::-webkit-scrollbar {
      display: none;
    }
    
    scrollbar-width: none;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "baseFont";
  }
  a {
    -webkit-tap-highlight-color: transparent;
    text-decoration: none;
  }
  button,
  input,
  textarea {
    outline: none;
    background: none;
    border: none;
  }
  button {
    cursor: pointer;
  }
  li {
    list-style: none;
  }
  img {
    -webkit-tap-highlight-color: transparent;
  }
`;

export default GlobalStyle;
