import { useState } from "react";
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Head from 'next/head';
import db from '../db.json';
// import { BtnTema } from "../src/components/UI";
// import SwitcherTheme from "../src/components/SwitcherTheme";

const GlobalStyle = createGlobalStyle`
  html {
    overflow-x: hidden;
    scroll-behavior: smooth;
  }
  
  body {
    box-sizing: border-box;
    overflow: hidden;
    line-height: 1;
    color: ${({ theme }) => theme.colors.primary};
    font-family: Arial, Helvetica, sans-serif;
  }
  
  /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
  */

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`

export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState(true);

  const toggleTema = () => {
    setTheme((theme) => !theme);
  };
  
  return (
    <>
      <Head>
        <title>
          {db.siteTitle}
        </title>
      </Head>
      <ThemeProvider theme={theme ? db.theme.bright : db.theme.dark}>
        <GlobalStyle />
        {/* <BtnTema onClick={toggleTema}>
          <SwitcherTheme theme={theme} />
        </BtnTema> */}
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
