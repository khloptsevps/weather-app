import React from 'react';

import Image from 'next/image';

import styles from './WeatherCard.module.scss';
import { LocalWeather } from 'types';
import { MoonLoader } from 'react-spinners';

interface WeatherCardProps {
  weatherData: LocalWeather | null | undefined;
  isLoading: boolean;
  error: Error | undefined;
}

const WeatherCard = ({ weatherData, isLoading, error }: WeatherCardProps) => {
  if (!weatherData) {
    return (
      <div className={styles.loader}>
        {isLoading ? <MoonLoader color="#560225" size={80} /> : error?.message}
      </div>
    );
  }

  const date = new Date(weatherData.dt * 1000).toLocaleDateString('ru-RU');
  const currentTemp = Math.round(weatherData.main.temp);

  // For code 500 - light rain icon = "10d". See below a full list of codes
  //URL is http://openweathermap.org/img/wn/10d@2x.png

  const icon = weatherData.weather[0].icon;
  const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;

  console.log(icon);

  return (
    <div className={styles.container}>
      <div className={styles.location}>
        <h2>{weatherData.name}</h2>
        <span>{date}</span>
      </div>
      <div className={styles.info}>
        <h1>{currentTemp}&deg; C</h1>
        <Image
          className={styles.icon}
          src={iconUrl}
          alt="condition"
          width={80}
          height={80}
        />
        <span>{weatherData.weather[0].main}</span>
      </div>
      <div className={styles.humidity}>
        <Image
          src={'./icons/waterDrop.svg'}
          alt="water drop"
          width={20}
          height={20}
        />
        <span>{weatherData.main.humidity}%</span>
      </div>
    </div>
  );
};
export default WeatherCard;
