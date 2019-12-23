const apiKey = "e4423073e0be50d8d5da6f41a3e96a8b";
const baseURL = "api.openweathermap.org/data/2.5/forecast?id=";

const meerbuschID = "2872504";
const ibizaID = "2516479";
const kitzbuehelID = "2774347";

const getWeatherData = (cityID) => {
    return fetch(`https://${baseURL + cityID}&APPID=${apiKey}`)
    .then(resp => resp.json())
};

const weatherMeerbusch = () => {
    return getWeatherData(meerbuschID)
}
const weatherIbiza = () => {
    return getWeatherData(ibizaID)
}
const weatherAurach = () => {
    return getWeatherData(kitzbuehelID)
}


export default {
    weatherMeerbusch,
    weatherIbiza,
    weatherAurach
};
