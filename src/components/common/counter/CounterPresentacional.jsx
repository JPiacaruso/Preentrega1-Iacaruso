const CounterPresentacional = ({
  sumar,
  restar,
  contador,
  nombre,
  setNombre,
}) => {
  return (
    <div>
      <button onClick={sumar}>Sumar</button>
      <button>{contador}</button>
      <button onClick={restar}>Restar</button>
      <h4>{nombre}</h4>
      <button onClick={() => setNombre("juan")}>Cambiar Nombre</button>
    </div>
  );
};

export default CounterPresentacional;
