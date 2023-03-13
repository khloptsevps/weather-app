import { LocalWeather, OpenWeaterResponse } from 'types';

export const extractWeather = (res: OpenWeaterResponse): LocalWeather => ({
  id: res.id,
  name: res.name,
  main: {
    feelsLike: res.main.feels_like,
    humidity: res.main.humidity,
    pressure: res.main.pressure,
    temp: res.main.temp,
    tempMax: res.main.temp_max,
    tempMin: res.main.temp_min,
  },
  base: res.base,
  weather: res.weather,
  sys: res.sys,
  coord: res.coord,
  clouds: res.clouds,
  cod: res.cod,
  dt: res.dt,
  wind: res.wind,
  visibility: res.visibility,
  timezone: res.timezone,
});
