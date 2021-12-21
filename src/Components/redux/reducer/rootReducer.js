import {
  ON_SEARCH,
  ON_CLOSE,
  ON_FILTER,
  ON_STYLE,
  ON_ADD_CITIES,
  ON_ADD_CITIE,
} from "../actions/actions";

// import swal from "sweetalert";

const initialState = {
  cities: [],
  citie: [],
  style: true,
};

function rootReducer(state = initialState, actions) {
  switch (actions.type) {
    case ON_SEARCH:
        return {
          ...state,
          cities: [...state.cities, actions.payload],
        };
      

    case ON_CLOSE:
      return {
        ...state,
        cities: state.cities.filter((city) => city.id !== actions.payload),
      };

    case ON_FILTER:
      return {
        ...state,
        citie: state.cities.filter(
          (city) => city.id === parseInt(actions.payload)
        ),
      };

    case ON_STYLE:
      return {
        ...state,
        style: state.style ? false : true,
      };
    case ON_ADD_CITIE:
      return {
        ...state,
        citie: actions.payload,
      };
    case ON_ADD_CITIES:
      return {
        ...state,
        cities: actions.payload,
      };

    default:
      return state;
  }
}

export default rootReducer;
