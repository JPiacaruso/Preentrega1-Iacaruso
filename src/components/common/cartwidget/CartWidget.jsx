import { TiShoppingCart } from "react-icons/ti";
import "./CartWidget.css";

export const CartWidget = () => {
  return (
    <div className="cartwidget">
      <div>
        <TiShoppingCart />
        <span>2</span>
      </div>
    </div>
  );
};
