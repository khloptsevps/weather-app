'use client';
import React from 'react';

import Image from 'next/image';

import styles from './SearchForm.module.scss';

interface SearchFormProps {
  setCity: (city: string) => void;
  isLoading: boolean;
}

const SearchForm = ({ setCity, isLoading }: SearchFormProps) => {
  const [value, setValue] = React.useState<string>('');
  const [disabled, setDisabled] = React.useState<boolean>(true);

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    inputRef.current?.focus();
    if (value) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [value]);

  const formHandler = (e: React.FormEvent) => {
    e.preventDefault();
    setCity(value);
    setValue('');
  };
  return (
    <div>
      <form action="" onSubmit={formHandler}>
        <div className={styles.container}>
          <Image
            className={styles.icon}
            src={'/icons/search.svg'}
            alt="search"
            width={30}
            height={30}
          />
          <input
            ref={inputRef}
            type="text"
            name="city"
            className={styles.formInput}
            placeholder="City..."
            value={value}
            onChange={inputHandler}
            disabled={isLoading}
          />
          <button className={styles.button} disabled={disabled}>
            Search!
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
