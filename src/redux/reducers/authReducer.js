import {AUTH_SUCSESSFULLY, LOGOUT} from '../actionTypes'

const windowState = JSON.parse(window.localStorage.getItem("state"));

let preloadedState = {};
if (windowState) {
  preloadedState = {
    isAuth: windowState.auth.isAuth,
  };
} else {
  preloadedState = {
    isAuth: false,
  };
}

export const authReducer = (state = preloadedState, action) => {
  switch (action.type) {
    case AUTH_SUCSESSFULLY:
      return {
        ...state,
        isAuth: true,
      };
    case LOGOUT:
      window.localStorage.clear();
      return {
        ...state,
        isAuth: false,
      };

    default:
      return state;
  }
};
