import { INIT_HOTELS, SEARCH_HOTELS,ADD_FAVORITES } from "../actionTypes";
const windowState = JSON.parse(window.localStorage.getItem("state"));

let preloadedState = {};
if (windowState) {
  preloadedState = {
    hotels: windowState.main.hotels,
    favorites:windowState.main.favorites
  };
} else {
  preloadedState = {
    hotels: [],
    favorites:[]
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
      return {
        ...state,
        hotels: action.payload.data,
        lastSearchInfo:[{startDate:action.payload.startDate,endDate:action.payload.endDate,location:action.payload.location }]
      };
      case ADD_FAVORITES:
        const currentHotel = state.hotels.find(el=>el.hotelId==action.payload)
        return {
          ...state,
          favorites: [...state.favorites, currentHotel]
        };

    default:
      return state;
  }
};
