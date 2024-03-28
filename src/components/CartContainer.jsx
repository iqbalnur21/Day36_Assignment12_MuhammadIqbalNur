import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { showModal } from "../features/modal/modalSlice";

const CartContainer = () => {
  const { carts, totalQuantity, totalPrice } = useSelector(
    (store) => store.cart
  );

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(showModal());
  };

  if (totalQuantity < 1) {
    return (
      <section className="cart">
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }

  return (
    <section className="cart">
      <header>
        <h2>your bag</h2>
      </header>
      <div>
        {carts.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${totalPrice}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={handleClearCart}>
          clear cart
        </button>
      </footer>
    </section>
  );
};
export default CartContainer;
