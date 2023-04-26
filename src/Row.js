import React, {useEffect, useState} from 'react';
import axios from './axios';
import './row.css'


function Row(props) {
    const img_full_path = "https://image.tmdb.org/t/p/original"
    const [movies, setmovies]=useState([])

    useEffect(()=>{
        axios.get(props.endpoint)
        .then((result)=>{
            console.log(result.data.results)
            setmovies(result.data.results)
        })
    }, [])

  return (
    <div className={props.isBigger? "row bigger" : "row"}>
      <h1>{props.heading}</h1>
      <div className='movies'>
        {
          movies.map((movie, index)=>{
            return (
              <img src={img_full_path + movie.poster_path} key={index} alt={movie.title}></img>
            )
          })
        }
      </div>
    </div>
  )
}

export default Row