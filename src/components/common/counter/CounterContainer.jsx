import { useState } from "react";

const CounterContainer = () => {
  const [contador, setContador] = useState(0);

  const stock = 5;

  const sumar = () => {
    if (setContador < stock) {
      setContador(contador + 1);
    } else {
      alert("Cantidad Máxima");
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };
  return (
    <div>
      <button onClick={sumar}>Sumar</button>
      <button>{contador}</button>
      <button onClick={restar}>Restar</button>
    </div>
  );
};
export default CounterContainer;
