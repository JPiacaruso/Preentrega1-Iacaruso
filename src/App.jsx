import { Navbar } from "./components/layaout/navbar/Navbar";
import { Home } from "./components/pages/home/Home";
import { Login } from "./components/pages/login/Login";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Login />
    </div>
  );
}

export default App;
