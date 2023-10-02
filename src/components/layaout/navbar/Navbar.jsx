import CartWidget from "../../common/cartwidget/CartWidget";

const Navbar = () => {
  return (
    <div>
      <h4>Logo</h4>
      <ul>
        <li>Ceramicas de autor</li>
        <li>Cerámicas Lisas</li>
        <li>Accesorios</li>
      </ul>
      {/* widget Carrito */}
      <CartWidget />
    </div>
  );
};

export default Navbar;
