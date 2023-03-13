import axios from 'axios';
import { OpenWeaterResponse, OpenWeatherError } from 'types';
import { extractWeather } from 'utils';

export const getWeatherData = async (city: string = 'Хабаровск') => {
  console.log(1);
  const API_URL = 'https://api.openweathermap.org/data/2.5/weather';
  const params = {
    appid: '68511623e9da208b27361682c8d5f908',
    q: city,
    units: 'metric',
  };
  try {
    const resp = await axios.get(API_URL, { params });
    const data = resp.data as OpenWeaterResponse;
    const localData = extractWeather(data);
    return localData;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const data = error.response?.data as OpenWeatherError;
      throw new Error(data.message);
    } else {
      throw new Error('Unknown error');
    }
  }
};
