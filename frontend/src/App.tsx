import Main from "./pages/Main";

import Header from "organisms/Header";
import Menu from "organisms/Menu";

import { MainContextProvider } from "contexts/MainContext";

import GlobalStyle from "./global/styles";

function App() {
  return (
    <MainContextProvider>
      <GlobalStyle />

      <Header />
      <Menu />
    </MainContextProvider>
  );
}

export default App;
