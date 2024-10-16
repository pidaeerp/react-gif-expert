import React, { Fragment, useState } from "react";
// import { AddCategory } from "./components/AddCategory";
// import { GifGrid } from "./components/GifGrid";
import { AddCategory, GifGrid } from "./components"; // está apuntando al index.js dentro del components

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);
  //   console.log(categories);
  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) {
      return;
    }

    //console.log(newCategory);
    setCategories([newCategory, ...categories]);
    //O
    //setCategories((cat) => [...cat, "Valorant"]);
  };

  return (
    <Fragment>
      {/* Título */}
      <h1>GifExpertApp</h1>

      {/* Input */}
      <AddCategory
        //setCategories={setCategories}
        onNewCategory={onAddCategory}
      />

      {/* <button onClick={onAddCategory}>Agregar</button> */}

      {/* Lista de Gif */}
      {/* <ol> */}
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
      {/* <li></li> */}
      {/* </ol> */}

      {/* Gif Items */}
    </Fragment>
  );
};
