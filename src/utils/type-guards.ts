import { OpenWeaterResponse } from 'types';

export const isOpenWeatherData = (
  weatherData: any,
): weatherData is OpenWeaterResponse => {
  return 'id' in weatherData;
};
