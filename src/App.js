import React, { useState } from "react";

import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";
import { GlobalStyle } from "./Components/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { whiteTheme, blackTheme } from "./Components/ui/themes";
import { BtnTheme } from "./Components/ui";
import SwitchTheme from "./Components/SwitchTheme";

function App() {
  const [theme, setTheme] = useState(false);

  const toggleTheme = () => {
    setTheme((theme) => !theme);
  };

  return (
    <ThemeProvider theme={theme ? whiteTheme : blackTheme}>
      <BtnTheme onClick={toggleTheme}>
        <SwitchTheme theme={theme} />
      </BtnTheme>
      <GlobalStyle />
      <Cabecalho />
      <Container />
    </ThemeProvider>
  );
}

export default App;
