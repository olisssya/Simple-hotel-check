import { INIT_HOTELS, SEARCH_HOTELS,ADD_FAVORITES,SORT_RATING,SORT_PRICE } from "../actionTypes";
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
        const favoriteHotel = state.favorites.find(el=>el.hotelId==action.payload)
        if(favoriteHotel){
          return {
            ...state,
            favorites: [...state.favorites.filter(el=>el.hotelId!=action.payload)]
          };
        } else
        return {
          ...state,
          favorites: [...state.favorites, currentHotel]
        };

        case SORT_PRICE:
          return {
            ...state,
            favorites: [...state.favorites.sort((a,b)=>(b.priceAvg-a.priceAvg))]
          };
          case SORT_RATING:
          return {
            ...state,
            favorites: [...state.favorites.sort((a,b)=>(b.stars-a.stars))]
          };

    default:
      return state;
  }
};
