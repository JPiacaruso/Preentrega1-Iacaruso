import { CartWidget } from "../../common/cartwidget/CartWidget";

export const Navbar = () => {
  return (
    <div>
      <nav>
        <h3>Logo</h3>
        <ul>
          <li>Todos los productos</li>
          <li>De autor</li>
          <li>Basicas y Lisas</li>
          <li>Estampadas</li>
        </ul>
      </nav>
      {/* WIDGET CARRITO */}
      <CartWidget />
    </div>
  );
};
