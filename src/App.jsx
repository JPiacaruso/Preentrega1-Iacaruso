import { CartWidget } from "./components/common/cartwidget/CartWidget";
import Footer from "./components/layaout/footer/Footer";
// import Navbar from "./components/layaout/navbar/Navbar";  (Mas adelante tal vez haga de 0 el Navbar)
// import { Home } from "./components/pages/home/Home";
import ItemListContainer from "./components/pages/itemListContainer/itemListContainer";
// import { Login } from "./components/pages/login/Login";
import ResponsiveAppBar from "./components/pages/materialUI/ResponsiveAppBar";

function App() {
  let saludo = "Hola Juan Carlos, como estás hoy?";

  return (
    <div>
      <ResponsiveAppBar />
      <ItemListContainer saludo={saludo} />
      <CartWidget />
      {/* <Home />
      <Login /> */}
      <Footer />
    </div>
  );
}

export default App;
