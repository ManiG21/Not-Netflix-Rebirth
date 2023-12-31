import  '../CategoryBox/Categorybox.css'
import { useParams } from "react-router-dom";
import MovieList from '../MovieList/Movielist';
import { useEffect, useState } from 'react';
import { getDataApi } from '../../network-requests';


export default function Categorybox({genres}) {
    let { id } = useParams();
    const [moviesList, setMoviesList] = useState();

    useEffect(() => {
      if (moviesList) return
      getDataApi("discover/movie", `with_genres=${id}`).then((response) => {
        setMoviesList(response.results);
      });
    }, []);

    return  <div className="categorybox">
      <header>{genres?.find(genre => genre.id == id)?.name}</header>
      <MovieList moviesList= {moviesList}/>
    </div>
}