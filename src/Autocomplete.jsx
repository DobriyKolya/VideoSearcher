// Autocomplete.jsx

import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import './Autocomplete.css';

const Autocomplete = ({ onSelect, onInputChange, inputValue }) => {
  const [suggestions, setSuggestions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    onSelect(selectedOption.value);
  };

  useEffect(() => {
    // Выполняем запрос к серверу при изменении inputValue
    const fetchSuggestions = async () => {
      try {
        const response = await fetch(`http://localhost:5173/search?q=${query}`);
        const data = await response.json();
        setSuggestions(data);
      } catch (error) {
        console.error('Ошибка при запросе к серверу:', error);
      }
    };

    // Вызываем функцию для выполнения запроса
    fetchSuggestions();
  }, [inputValue]);

  useEffect(() => {
    setSelectedOption(null); // Сброс выбранной опции при изменении suggestions
  }, [suggestions]);

  // Стили для выпадающего списка
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      width: '500px',
      borderRadius: '10px 0 0 10px',
      border: '1px solid transparent',
      padding: '0.6em 1.2em',
      fontSize: '1em',
      fontWeight: '500',
      fontFamily: 'inherit',
      backgroundColor: '#1a1a1a',
      cursor: 'text',
      transition: 'border-color 0.25s',
      borderColor: state.isFocused ? '#646cff' : provided.borderColor,
      
    }),
    input: (provided) => ({
      ...provided,
      color: 'white', // Цвет текста в поле ввода
    }),
    singleValue: (provided) => ({
      ...provided,
      color: 'white', // Цвет текста выбранного значения
    }),
    menu: (provided) => ({
        ...provided,
        backgroundColor: '#1a1a1a',
      }),
      option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isFocused ? '#646cff' : provided.backgroundColor,
      }),
      menuPortal: (provided) => ({
        ...provided,
        zIndex: 9999, // Устанавливаем высокий zIndex для положения списка наверху других элементов
      }),
    };

  return (
    <Select
      value={selectedOption}
      onChange={handleChange}
      options={suggestions}
      onInputChange={onInputChange}
      inputValue={inputValue}
      placeholder="Поиск видео..."
      styles={customStyles}
    />
  );
};

export default Autocomplete;
