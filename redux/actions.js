import * as actionTypes from "./actionsTypes";

export const addItem = (item) => {
  return { type: actionTypes.ADD_TO_CART, payload: item };
};

export const removeItem = (item) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: item,
  };
};
