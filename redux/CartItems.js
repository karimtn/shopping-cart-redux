import * as actionTypes from "./actionsTypes";

const initialState = [];

const cartItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      return [...state, action.payload];
    case actionTypes.REMOVE_FROM_CART:
      return state.filter((cartItem) => cartItem.id !== action.payload.id);
    default:
      return state;
  }
};

export default cartItemReducer;
