import React, { useState, useEffect } from 'react'
import axios from '../../axios'
import './style.css'
// import Banner from '../Banner/Banner'
import YouTube from 'react-youtube'
import  movieTrailer from 'movie-trailer'



const base_url = "https://image.tmdb.org/t/p/original/";
export const Row = ({ title, fetchUrl,isLargeRow }) => {

    const [movie, setMovie] = useState([])
    const [trailerUrl,setTrailerUrl] = useState()
    useEffect(() => {

        async function fetchData() {
            const request = await axios.get(fetchUrl);
            console.log(request.data.results);
            setMovie(request.data.results);
            return (request);
        }

        fetchData();
    }, [fetchUrl]);
  const opts = {
      height:"390",
      width:"100%",
      playerVars:{
          autoplay:1,
      }
  }
 const handleTrailer = (movie) =>{
     if(trailerUrl){
         setTrailerUrl("");
     } else{
         movieTrailer(movie?.name || "")
         .then((url) =>{
          const urlParams = new URLSearchParams (new URL(url).search);
          setTrailerUrl(urlParams.get('v'));
         })
         .catch(() => console.log("Temporary Unavailable"));
     }
 }

    return (
        <div className='row_main'>
            <h2>{title}</h2>
            <div className='row_1st_container'>
              <div className='row_1st_container_list'>  
                {movie.map(movie => (
                    <div className='row_1st_container_list1' key={movie.id}>
                        <img 
                           onClick={() =>handleTrailer(movie)}
                           src={`${base_url}${
                            isLargeRow? movie.poster_path:movie.backdrop_path}`} alt={movie.name} 
                            className={`poster ${isLargeRow && "row_posterlarge"}`} />

                    </div>
                ))}
                </div>
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
            
        </div>
    )
}
