'use client';
import React from 'react';
import useSWR from 'swr';
import { getWeatherData } from 'lib';

import SearchForm from 'components/searchForm/SearchForm';
import WeatherCard from 'components/card/WeatherCard';

import styles from './page.module.scss';

const Home = () => {
  const defaultCity = 'Khabarovsk';
  const [city, setCity] = React.useState<string | null>(defaultCity);

  const { data, error, isLoading } = useSWR(city, getWeatherData, {
    shouldRetryOnError: false,
    revalidateOnFocus: false,
    revalidateIfStale: false,
  });

  return (
    <div className={styles.wrapper}>
      <SearchForm setCity={setCity} isLoading={isLoading} />
      <WeatherCard weatherData={data} isLoading={isLoading} error={error} />
    </div>
  );
};

export default Home;
