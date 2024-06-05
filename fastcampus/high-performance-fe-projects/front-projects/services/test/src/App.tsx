import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ThemeProvider } from "@emotion/react";
import { vars, classes } from "@sbjang/themes";
import styled from "@emotion/styled";

const View = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Text>
          Edit <code>src/App.tsx</code> and save to reload. {vars.box.radii.base}
        </Text>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

function App() {
  const theme = {
    colors: vars.colors.$static.light,
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <View />
      </ThemeProvider>
    </>
  );
}

const Text = styled.p`
  ${classes.typography.heading["4xl"]};
  color: ${({ theme }) => {
    // @ts-ignore
    return theme.colors.red[500];
  }};
`;

export default App;
