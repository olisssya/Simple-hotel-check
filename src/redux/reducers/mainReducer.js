import { INIT_HOTELS, SEARCH_HOTELS } from "../actionTypes";

const windowState = JSON.parse(window.localStorage.getItem("state"));

let preloadedState = {};
if (windowState) {
  preloadedState = {
    hotels: windowState.main.hotels,
  };
} else {
  preloadedState = {
    hotels: [],
    lastSearchInfo:[]
  };
}

export const mainReducer = (state = preloadedState, action) => {
  switch (action.type) {
    case INIT_HOTELS:
      return {
        ...state,
        hotels: action.payload,
      };
    case SEARCH_HOTELS:
      console.log(action.payload);
      return {
        ...state,
        hotels: action.payload.data,
        lastSearchInfo:[{startDate:action.payload.startDate,endDate:action.payload.endDate,location:action.payload.location }]
      };

    default:
      return state;
  }
};
