import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Home } from "./Home";

function App() {
  let nombre = "pepitopopin";

  const sumar = () => {
    console.log("Estoy sumando");
  };

  return (
    <div>
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
