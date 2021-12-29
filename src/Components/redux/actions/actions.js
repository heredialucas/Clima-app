export const ON_SEARCH = "onSearch";
export const ON_CLOSE = "onClose";
export const ON_FILTER = "onFilter";
export const ON_STYLE = "onStyle";
export const ON_ADD_CITIE = "onAddCitie";
export const ON_ADD_CITIES = "onAddCities";

// const apiKey = "4ae2636d8dfbdc3044bede63951a019b";
const apiKey = "64d0f3fa5e4ece1d2c8229c991d638d5";

export function onSearch(city) {
  return function (dispatch) {
    return fetch(
      
      // `https://pro.openweathermap.org/data/2.5/forecast/hourly?q=${city}&appid=${apiKey}`
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
