import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import Modal from "./components/Modal";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fulfilled, pending } from "./features/cart/cartSlice";
import cartItems from "./cartItems";

const App = () => {
  const { isOpen } = useSelector((store) => store.modal);
  const { isLoading } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pending());
    setTimeout(() => {
      dispatch(fulfilled(cartItems));
    }, 1500);
  }, []);

  if (isLoading) {
    return (
      <section className="cart">
        <header>
          <h2>Loading...</h2>
        </header>
      </section>
    );
  }

  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
};
export default App;
