import { getData } from "./authService";

export const GET_DATA_SUCESS = "[data action] confirmed data";
export const GET_DATA_FAILED_ACTION = "[data action] failed data";
export const GET_STORE_DATA = "[data store action] confirmed data";
export const ADD_TO_CART = "[data store action] add to cart";

export function getDataAction() {
  return (dispatch) => {
    getData()
      .then((response) => {
        console.log("ressss", response);
        dispatch(getDataConfirmedAction(response.data));
      })
      .catch((error) => {
        dispatch(getDataFailedAction("Something went wrong"));
      });
  };
}

export function addToCartAction(product) {
  return (dispatch) => {
    dispatch(addToCartAction2(product));
  };
}

export function getDataConfirmedAction(data) {
  return {
    type: GET_DATA_SUCESS,
    payload: data,
  };
}

export function getDataFailedAction(error) {
  return {
    type: GET_DATA_FAILED_ACTION,
    payload: error,
  };
}
export function getStoreConfirmedAction(data) {
  return {
    type: GET_STORE_DATA,
    payload: data,
  };
}

export function addToCartAction2(data) {
  console.log("dddd", data);
  return {
    type: ADD_TO_CART,
    payload: data,
  };
}
