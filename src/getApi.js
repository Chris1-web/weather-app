import { cardView, clearView, errorView } from "./uiView";

// change to also accept type of temperature units
const getWeatherData = async function (country, units) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${country}&APPID=49b1ffc7c1a6bf06784254cac84864a9&units=${units}`,
      { mode: "cors" }
    );
    const getData = await response.json();
    if (getData.cod === "404") {
      throw Error("Country cannot be found");
    }
    return getData;
  } catch (error) {
    errorView();
  }
};

const convertDataToObject = async function (country, unit) {
  const locationWeatherData = await getWeatherData(country, unit);
  const data = locationWeatherData;
  if (data !== undefined) {
    cardView(data, unit);
  } else {
    clearView();
  }
};

export default convertDataToObject;
