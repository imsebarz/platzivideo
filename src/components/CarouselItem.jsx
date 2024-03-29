import React from "react";
import "../assets/styles/components/CarouselItem.scss";
import PlayIcon from "../assets/static/play-icon.png";
import PlusIcon from "../assets/static/plus-icon.png";

const CarouselItem = ({ title, poster_path, release_date, vote_average }) => (
  <div className="carousel-item">
    <img
      className="carousel-item__img"
      src={`https://image.tmdb.org/t/p/w500${poster_path}`}
      alt={title}
    />
    <div className="carousel-item__details">
      <div>
        <img
          className="carousel-item__details--img"
          src={PlayIcon}
          alt="Play Icon"
        />
        <img
          className="carousel-item__details--img"
          src={PlusIcon}
          alt="Plus Icon"
        />
      </div>
      <p className="carousel-item__details--title">{title}</p>
      <p className="carousel-item__details--subtitle">{`📅 - ${release_date} ⭐ - ${vote_average}`}</p>
    </div>
  </div>
);

export default CarouselItem;
