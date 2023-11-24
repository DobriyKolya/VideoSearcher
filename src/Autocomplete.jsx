// Autocomplete.jsx
import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import './Autocomplete.css';

const Autocomplete = ({ onSelect, onInputChange, inputValue, onEnterPress }) => {
  const [suggestions, setSuggestions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [hasValue, setHasValue] = useState(false);

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    onSelect(selectedOption.value);
  };

  const handleInputChange=(value)=>{
    setHasValue(Boolean(value));
    onInputChange?.(value);
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e?.target?.blur()
      onEnterPress(); // Вызываем функцию обработки нажатия Enter
    }
  };

  useEffect(() => {
    const fetchSuggestions = async () => {
      try {
        const response = await fetch(`https://gruninhost.bsite.net/api/searchtips?search=${encodeURIComponent(inputValue)}`);
        const data = await response.json();
        setSuggestions(data?.map(tip=>({label: tip, value: tip})||[]));
      } catch (error) {
        console.error('Ошибка при запросе к серверу:', error);
      }
    };

    fetchSuggestions();
  }, [inputValue]);

  useEffect(() => {
    setSelectedOption(null);
  }, [suggestions]);

  const customStyles = {
    container:  ()=>({
      width: '100%',
      textAlign: 'left'
    }),
    control: (provided, state) => ({
      ...provided,
      borderRadius: state.menuIsOpen && hasValue ? '10px 0 0 0': '10px 0 0 10px',
      border: '1px solid transparent',
      padding: '0.6em 1.2em',
      fontSize: '1em',
      fontWeight: '500',
      fontFamily: 'inherit',
      backgroundColor: '#1a1a1a',
      cursor: 'text',
      transition: 'border-color 0.25s',
      boxSizing: 'border-box',
      outline: 'none',
      borderColor: state.isFocused ? '#646cff' : provided.borderColor,
      boxShadow: 'none',
      zIndex:1,
      ':hover' : {
        borderColor: '#646cff'
      }
    }),
    input: (provided) => ({
      ...provided,
      color: 'white',
    }),
    singleValue: (provided) => ({
      ...provided,
      color: 'white',
    }),
    menu: (provided, state) => ({
      ...provided,
      backgroundColor: '#1a1a1a',
      paddingTop:8,
      top: 40,
      zIndex:0,
      boxShadow: 'none',
      borderRadius: '0 0 10px 10px',
      display: hasValue ? 'block': 'none'
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? '#646cff' : provided.backgroundColor,
    }),
    menuPortal: (provided) => ({
      ...provided,
      zIndex: 9,
    }),
  };

  return (
    <Select
      value={selectedOption}
      onChange={handleChange}
      options={suggestions}
      onInputChange={handleInputChange}
      inputValue={inputValue}
      placeholder="Поиск видео..."
      styles={customStyles}
      onKeyDown={handleKeyDown}
      noOptionsMessage={({inputValue})=>{
        if(!inputValue) {
          return ""
        }        

        return"Подсказки не найдены"}}
    />
  );
};

export default Autocomplete;
