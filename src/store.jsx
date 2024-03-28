import { combineReducers, createStore } from "redux";
import cartReducer from "./features/cart/cartSlice";
import { composeWithDevTools } from "redux-devtools-extension";
import modalReducer from "./features/modal/modalSlice";
const rootReducer = combineReducers({
  cart: cartReducer,
  modal: modalReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
