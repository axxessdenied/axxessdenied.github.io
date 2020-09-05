import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import logo from '../assets/images/windows95_logo.png';
import { styleReset, Button, List, ListItem, Divider } from 'react95';
// pick a theme of your choice
import original from "react95/dist/themes/original";
// original Windows95 font (optionally)
import ms_sans_serif from "react95/dist/fonts/ms_sans_serif.woff2";
import ms_sans_serif_bold from "react95/dist/fonts/ms_sans_serif_bold.woff2";

const Centered = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body {
    font-family: 'ms_sans_serif';
  }
  ${styleReset}
`;

const Windows95 = (children) => (
    <div>
        <ThemeProvider theme={original}>
        <GlobalStyles />
        <List>
            <ListItem>🎤 Sing</ListItem>
            <ListItem>💃🏻 Dance</ListItem>
            <Divider />
            <ListItem disabled>😴 Sleep</ListItem>
        </List>
        <Button>Test!</Button>
        </ThemeProvider>
    </div>
)

export default Windows95;