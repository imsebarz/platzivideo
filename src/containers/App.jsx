import React, { useState, useEffect } from "react";
import "../assets/styles/App.scss";
import Header from "../components/Header";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import Footer from "../components/Footer";
import useInitialiState from "../hooks/useInitialState";
require("dotenv").config();

const App = () => {
  const API = `
  https://api.themoviedb.org/3/movie`;
  const initialState = useInitialiState(API);
  const [myList, setMyList] = useState(initialState.myList);
  return (
    <>
      <Header />
      <Search />
      {myList?.length > 0 ? (
        <Categories title="Mi lista">
          <Carousel>
            <CarouselItem />
          </Carousel>
        </Categories>
      ) : (
        ""
      )}
      <Categories title="Populares">
        <Carousel>
          {initialState?.popular?.slice(0, 6).map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>
      <Categories title="Mejores Rankeadas">
        <Carousel>
          {initialState?.topRated?.slice(0, 6).map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>
      <Footer />
    </>
  );
};

export default App;
