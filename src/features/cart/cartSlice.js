// import cartItems from "../../cartItems";

const initialState = {
  carts: [],
  totalQuantity: 0,
  totalPrice: 0,
  isLoading: false,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "cart/pending":
      return {
        ...state,
        isLoading: true,
      };
    case "cart/fulfilled":
      return {
        ...state,
        carts: action.payload.carts,
        totalQuantity: action.payload.carts
          .map((item) => item.amount)
          .reduce((acc, amt) => acc + amt),
        totalPrice: action.payload.carts
          .map((item) => parseFloat(item.price))
          .reduce((acc, item) => item + acc),
        isLoading: false,
      };
    case "cart/increaseAmount":
      return {
        ...state,
        carts: state.carts.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              amount: action.payload.amount,
            };
          } else {
            return item;
          }
        }),

        totalQuantity: state.totalQuantity + 1,

        totalPrice: (
          state.carts
            .filter((item) => item.id !== action.payload.id)
            .map((item) => item.amount * parseFloat(item.price))
            .reduce((acc, amt) => acc + amt) +
          action.payload.amount * parseFloat(action.payload.price)
        ).toFixed(2),
      };
    case "cart/increaseSingleItem":
      return {
        ...state,
        carts: state.carts.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              amount: action.payload.amount,
            };
          } else {
            return item;
          }
        }),

        totalQuantity: state.totalQuantity + 1,

        totalPrice: (
          action.payload.amount * parseFloat(action.payload.price)
        ).toFixed(2),
      };
    case "cart/decreaseAmount":
      return {
        ...state,
        carts: state.carts.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              amount: action.payload.amount,
            };
          } else {
            return item;
          }
        }),

        totalQuantity: state.totalQuantity - 1,

        totalPrice: (
          state.carts
            .filter((item) => item.id !== action.payload.id)
            .map((item) => item.amount * parseFloat(item.price))
            .reduce((acc, amt) => acc + amt) +
          action.payload.amount * parseFloat(action.payload.price)
        ).toFixed(2),
      };

    case "cart/decreaseSingeItem":
      return {
        ...state,
        carts: state.carts.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              amount: action.payload.amount,
            };
          } else {
            return item;
          }
        }),

        totalQuantity: state.totalQuantity - 1,

        totalPrice: (
          action.payload.amount * parseFloat(action.payload.price)
        ).toFixed(2),
      };
    case "cart/deleteItem":
      return {
        ...state,
        carts: state.carts.filter((item) => item.id !== action.payload.id),
        totalQuantity:
          state.totalQuantity -
          state.carts.filter((item) => item.id === action.payload.id)[0].amount,
        totalPrice: (
          parseFloat(state.totalPrice) -
          parseFloat(
            state.carts.filter((item) => item.id === action.payload.id)[0][
              "price"
            ] *
              state.carts.filter((item) => item.id === action.payload.id)[0][
                "amount"
              ]
          )
        ).toFixed(2),
      };
    case "cart/deleteAll":
      return {
        ...state,
        carts: [],
        totalQuantity: 0,
        totalPrice: 0,
      };
    default:
      return state;
  }
};

export const pending = () => {
  return {
    type: "cart/pending",
  };
};

export const fulfilled = (carts) => {
  return {
    type: "cart/fulfilled",
    payload: {
      carts: carts,
    },
  };
};

export const increaseAmount = (id, price, amount) => {
  return {
    type: "cart/increaseAmount",
    payload: {
      id: id,
      price: price,
      amount: amount,
    },
  };
};

export const increaseSingleItem = (id, price, amount) => {
  return {
    type: "cart/increaseSingleItem",
    payload: {
      id: id,
      price: price,
      amount: amount,
    },
  };
};

export const decreaseSingleItem = (id, price, amount) => {
  return {
    type: "cart/decreaseSingeItem",
    payload: {
      id: id,
      price: price,
      amount: amount,
    },
  };
};

export const decreaseAmount = (id, price, amount) => {
  return {
    type: "cart/decreaseAmount",
    payload: {
      id: id,
      price: price,
      amount: amount,
    },
  };
};

export const deleteItem = (id) => {
  return {
    type: "cart/deleteItem",
    payload: {
      id: id,
    },
  };
};

export const deleteAll = () => {
  return {
    type: "cart/deleteAll",
  };
};

export default cartReducer;
