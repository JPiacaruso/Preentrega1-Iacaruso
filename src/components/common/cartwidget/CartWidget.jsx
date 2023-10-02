import { FaShoppingCart } from "react-icons/fa";
import "./CartWidget.css";

export const CartWidget = () => {
  return (
    <div className="cartwidget">
      <div>
        <FaShoppingCart />
        <span>2</span>
      </div>
    </div>
  );
};

export default CartWidget;
