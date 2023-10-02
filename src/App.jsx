import Navbar from "./components/layaout/navbar/Navbar";
import { Home } from "./components/pages/home/Home";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import Login from "./components/pages/login/Login";
import MaterialUi from "./components/pages/materialUI/MaterialUi";

function App() {
  let saludo = "juancito";

  return (
    <div>
      <Home />
      <Login />
      <Navbar />
      <MaterialUi />
      <ItemListContainer x={saludo} edad={12} />
    </div>
  );
}

export default App;
