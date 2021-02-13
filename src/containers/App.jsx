import React, { useState, useEffect } from "react";
import "../assets/styles/App.scss";
import Header from "../components/Header";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import Footer from "../components/Footer";
import useInitialiState from "../hooks/useInitialState";

const App = () => {
  const API = "http://localhost:3000/initialState";
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
      <Categories title="Tendencias">
        <Carousel>
          {initialState?.trends?.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>
      <Categories title="Originales de PlatziVideo">
        <Carousel>
          {initialState?.originals?.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>
      <Footer />
    </>
  );
};

export default App;
