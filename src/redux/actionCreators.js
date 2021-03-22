import {
  AUTH_SUCSESSFULLY,
  LOGOUT,
  INIT_HOTELS,
  INIT_FETCH,
  ERROR,
} from "./actionTypes";

export const authSucsessAC = () => ({ type: AUTH_SUCSESSFULLY });

export const logoutAC = () => ({ type: LOGOUT });
export const initAC = (data) => ({ type: INIT_HOTELS, payload: data });
export const initFetchAC = () => ({ type: INIT_FETCH });
export const errorAC = () => ({ type: ERROR });
