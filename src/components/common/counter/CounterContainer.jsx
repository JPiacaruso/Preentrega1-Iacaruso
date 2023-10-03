import { useState, useEffect } from "react";
import CounterPresentacional from "./counterPresentacional";

const CounterContainer = ({ stock }) => {
  const [contador, setContador] = useState(1);
  const [nombre, setNombre] = useState("pepito");

  const sumar = () => {
    if (contador < stock) {
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
  console.log("me monte o actualize");

  useEffect(() => {
    console.log("Se realizo una peticion");
  }, [nombre]);

  return (
    <CounterPresentacional
      sumar={sumar}
      restar={restar}
      contador={contador}
      nombre={nombre}
      setNombre={setNombre}
    />
  );
};

export default CounterContainer;
