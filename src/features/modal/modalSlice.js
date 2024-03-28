const initialStateModal = {
  isOpen: false,
};

const modalReducer = (state = initialStateModal, action) => {
  switch (action.type) {
    case "modal/showModal":
      return {
        isOpen: !state.isOpen,
      };

    default:
      return state;
  }
};

export const showModal = () => {
  return {
    type: "modal/showModal",
  };
};

export default modalReducer;
