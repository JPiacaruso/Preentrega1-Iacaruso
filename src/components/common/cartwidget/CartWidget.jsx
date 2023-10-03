import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export const CartWidget = () => {
  return (
    <div className="cartwidget">
      <div>
        <Badge badgeContent={4} showZero color="primary">
          <ShoppingCartIcon color="action" />
        </Badge>
      </div>
    </div>
  );
};

export default CartWidget;
