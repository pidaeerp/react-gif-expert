import React, { Fragment, useEffect, useState } from "react";
//import { getGifts } from "../helpers/getGifts";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  //// const [counter, setCounter] = useState(10);
  // const [images, setImages] = useState([]);
  // const getImages = async () => {
  //   const newImages = await getGifts(category);
  //   setImages(newImages);
  // };

  // useEffect(() => {
  //   getImages();
  // }, []);

  const { images, isLoading } = useFetchGifs(category);
  console.log({ images, isLoading });

  return (
    <Fragment>
      <h3>{category}</h3>
      {/* {isLoading ? <h2>Cargando...</h2> : null} */}
      {/* O */}
      {isLoading && <h2>Cargando...</h2>}

      <div className="card-grid">
        {images.map((img) => (
          <GifItem key={img.id} {...img} />
        ))}
      </div>
      {/* <h5>{counter}</h5>
      <button onClick={() => setCounter(counter + 1)}>+1</button> */}
    </Fragment>
  );
};
