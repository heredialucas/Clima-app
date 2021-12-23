import swal from "sweetalert";

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
      const city = state.cities.find((city) => city.id === actions.payload.id);
      console.log(actions.payload);
      if (actions.payload.cod === "404") {
        swal({
          icon:"error",
          title: "Ciudad no encontrada",
        });
        return {...state}
      } else if (!city) {
        return {
          ...state,
          cities: [...state.cities, actions.payload],
        };
      } else {
        swal({
          icon:"warning",
          title: "No es posible repetir una ciudad",
        });
        return state;
      }
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
        style: state.style ? actions.payload : !actions.payload,
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
