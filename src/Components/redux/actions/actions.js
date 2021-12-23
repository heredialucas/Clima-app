export const ON_SEARCH = "onSearch";
export const ON_CLOSE = "onClose";
export const ON_FILTER = "onFilter";
export const ON_STYLE = "onStyle";
export const ON_ADD_CITIE = "onAddCitie";
export const ON_ADD_CITIES = "onAddCities";

const apiKey = "4ae2636d8dfbdc3044bede63951a019b";

export function onSearch(city) {
  return function (dispatch) {
    return fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    )
      .then((r) => r.json())
      .then((json) => {
        dispatch({
          type: ON_SEARCH,
          payload: json,
        });
      })
  };
}

export function onAddCities(id) {
  return {
    type: ON_ADD_CITIES,
    payload: id,
  };
}
export function onAddCitie(id) {
  return {
    type: ON_ADD_CITIE,
    payload: id,
  };
}
export function onClose(id) {
  return {
    type: ON_CLOSE,
    payload: id,
  };
}

export function onFilter(id) {
  return {
      type: ON_FILTER,
      payload: id
  };
}

export function onStyle(value) {
  return {
    type: ON_STYLE,
    payload: value
  };
}
