import { ThemeProvider } from "@emotion/react";
import { customTheme } from "./themeConfig";
import Navbar from "./components/layaout/navbar/Navbar";
import { Home } from "./components/pages/home/Home";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import Login from "./components/pages/login/Login";
import MaterialUi from "./components/pages/materialUI/MaterialUi";
import PruebaResponsive from "./components/pages/pruebaResponsive/PruebaResponsive";
import CounterContainer from "./components/common/counter/CounterContainer";
import { useState } from "react";
import ItemDetailContainer from "./components/pages/itemDetailContainer/ItemDetailContainer";
import { FetchUno } from "./components/fetching/FetchUno";
import FetchDos from "./components/fetching/FetchDos";
import { FetchTres } from "./components/fetching/FetchTres";

function App() {
  return (
    <>
      {/* <ThemeProvider theme={customTheme}>
        <PruebaResponsive />
      </ThemeProvider> */}
      {/* <Home /> */}
      {/* <Login /> */}
      <Navbar />
      <ItemListContainer />
      <ItemDetailContainer />
      <CounterContainer />
      <MaterialUi />
      {/* <FetchUno /> */}
    </>
  );
}

export default App;
