import { useDispatch, useSelector } from "react-redux";
import { deleteAll } from "../features/cart/cartSlice";
import { showModal } from "../features/modal/modalSlice";

const Modal = () => {
  const { isOpen } = useSelector((store) => store.modal);
  const dispatch = useDispatch();

  const handleConfirmBtn = () => {
    dispatch(showModal());

    setTimeout(() => {
      dispatch(deleteAll());
    }, 100);
  };

  const handleCancelBtn = () => {
    dispatch(showModal());
  };

  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>remove all items from your shopping cart?</h4>
        <div className="btn-container">
          <button
            type="button"
            className="btn confirm-btn"
            onClick={handleConfirmBtn}
          >
            confirm
          </button>
          <button
            type="button"
            className="btn clear-btn"
            onClick={handleCancelBtn}
          >
            cancel
          </button>
        </div>
      </div>
    </aside>
  );
};
export default Modal;
