import { useEffect, useState } from "react";

const useInitialState = (API) => {
  const [videos, setVideos] = useState([]);
  const API_KEY = process.env.API_KEY;

  const getMovies = async () => {
    const allMovies = {
      myList: [],
    };
    const popular = await fetch(
      `${API}/popular?api_key=${API_KEY}`
    ).then((response) => response.json());
    const topRated = await fetch(
      `${API}/top_rated?api_key=${API_KEY}&languaje=es-US`
    ).then((response) => response.json());
    Promise.all([popular, topRated]).then((data) => {
      allMovies.popular = data[0].results;
      allMovies.topRated = data[1].results;
      setVideos(allMovies);
    });
  };
  useEffect(() => {
    getMovies();
  }, []);
  console.log(videos);
  return videos;
};

export default useInitialState;
