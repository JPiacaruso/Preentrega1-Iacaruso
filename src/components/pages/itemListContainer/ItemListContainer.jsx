const ItemListContainer = ({ saludo, edad }) => {
  return (
    <div>
      <h4>Cuantos años? {edad}</h4>
      <h5>Hola {saludo} como estás!</h5>
    </div>
  );
};

export default ItemListContainer;
