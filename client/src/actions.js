export const SET_BOOKS = "SET_BOOKS";
export const SET_MODAL = "SET_MODAL";

export const showModal = id => {
  return {
    type: SET_MODAL,
    data: {
      id,
      visible: true
    }
  };
};

export const hideModal = () => {
  return {
    type: SET_MODAL,
    data: {
      id: null,
      visible: false
    }
  };
};
