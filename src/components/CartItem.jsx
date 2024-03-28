import { useDispatch, useSelector } from "react-redux";
import { ChevronDown, ChevronUp } from "../icons";
import {
  decreaseAmount,
  deleteItem,
  increaseAmount,
  increaseSingleItem,
  decreaseSingleItem,
} from "../features/cart/cartSlice";

const CartItem = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch();

  const { carts } = useSelector((store) => store.cart);

  const handleAmountDecrease = (id, title, price, img) => {
    let currentAmount = carts.filter((item) => item.id === id)[0]["amount"];
    currentAmount--;
    if (currentAmount < 1) return dispatch(deleteItem(id));
    if (carts.length > 1) {
      dispatch(decreaseAmount(id, price, currentAmount));
    } else {
      dispatch(decreaseSingleItem(id, price, currentAmount));
    }
  };

  const handleAmountIncrease = (id, title, price, img) => {
    let currentAmount = carts.filter((item) => item.id === id)[0]["amount"];
    currentAmount++;
    if (carts.length > 1) {
      dispatch(increaseAmount(id, price, currentAmount));
    } else {
      dispatch(increaseSingleItem(id, price, currentAmount));
    }
  };

  const handleRemoveItem = (id) => {
    dispatch(deleteItem(id));
  };

  return (
    <article className="cart-item" key={id}>
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        <button className="remove-btn" onClick={() => handleRemoveItem(id)}>
          remove
        </button>
      </div>
      <div>
        <button
          className="amount-btn"
          onClick={() => handleAmountIncrease(id, title, price, img)}
        >
          <ChevronUp />
        </button>
        <p className="amount">{amount}</p>
        <button
          className="amount-btn"
          onClick={() => handleAmountDecrease(id, title, price, img)}
        >
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};
export default CartItem;
