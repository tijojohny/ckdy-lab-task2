import {
  GET_DATA_FAILED_ACTION,
  GET_DATA_SUCESS,
  ADD_TO_CART,
} from "./authActions";
const initialState = {
  products: "",
  cart: [],
};

export function AuthReducer(state = initialState, action) {
  if (action.type === GET_DATA_SUCESS) {
    console.log("state", state);

    console.log("in get reducer", action.payload);

    return {
      ...state,
      products: action.payload,
    };
  }
  if (action.type === GET_DATA_FAILED_ACTION) {
    return {
      ...state,
      errorMessage: action.payload,
    };
  }
  if (action.type === ADD_TO_CART) {
    console.log("in reducer");
    return {
      ...state,
      cart: [...state.cart, action.payload],
    };
  }

  return state;
}
