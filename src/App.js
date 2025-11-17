import React from "react";
import { HashRouter as Router } from "react-router-dom";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { chosenTheme } from "./theme";
import { GlobalStyles } from "./global";

function App() {
  return (
    <ThemeProvider theme={chosenTheme}>
      <>
        <GlobalStyles />
        <Router>
          <Main theme={chosenTheme} />
        </Router>
      </>
    </ThemeProvider>
  );
}
export default App;
