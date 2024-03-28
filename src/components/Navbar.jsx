import { useSelector } from "react-redux";
import { CartIcon } from "../icons";

const Navbar = () => {
  const { totalQuantity } = useSelector((store) => store.cart);
  return (
    <>
      <nav>
        <div className="nav-center">
          <h3>Learning Redux</h3>
          <div className="nav-container">
            <CartIcon />
            <div className="amount-container">
              <p className="total-amount">{totalQuantity}</p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
