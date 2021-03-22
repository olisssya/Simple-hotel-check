import { INIT_HOTELS } from "../actionTypes";

const windowState = JSON.parse(window.localStorage.getItem("state"));

let preloadedState = {};
if (windowState) {
  preloadedState = {
    hotels: windowState.main.hotels,
  };
} else {
  preloadedState = {
    hotels: [],
  };
}

export const mainReducer = (state = preloadedState, action) => {
  switch (action.type) {
    case INIT_HOTELS:
      console.log(action.payload);
      return {
        ...state,
        hotels: action.payload,
      };

    default:
      return state;
  }
};
