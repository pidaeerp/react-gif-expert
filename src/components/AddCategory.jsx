import PropTypes from "prop-types";
import React, { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target }) => {
    //console.log(target.value);
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    //console.log("Hola mundo desde onSubmit");
    event.preventDefault();
    //console.log(inputValue);

    if (inputValue.trim().length <= 1) {
      return;
    }

    //setCategories((categories) => [inputValue, ...categories]);
    setInputValue("");
    onNewCategory(inputValue.trim());
  };

  return (
    <form onSubmit={onSubmit} aria-label="form">
      <input
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
};
