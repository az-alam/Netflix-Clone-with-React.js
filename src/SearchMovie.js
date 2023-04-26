import axios from 'axios'
import React, { useState } from 'react'

function SearchMovie() {
    const [input, setinput] = useState('')
    const [moviearray, setmoviearray] = useState([])
    const img_full_path = "https://image.tmdb.org/t/p/original"

    function handlechange(e) {
        setinput(e.target.value)
    }

    function handlesubmit(e) {
        e.preventDefault()
        return axios.get(`https://api.themoviedb.org/3/search/movie?api_key=9600d9a3bcd52f86c4f65924813b03bb&language=en-US&query=${input}&page=1&include_adult=false`)
            .then((result) => {
                console.log(result.data.results)
                setmoviearray(result.data.results)
            })
    }

    return (
        <>
            <form onSubmit={handlesubmit}>
                <input type='text' placeholder='Enter Movie Name' onChange={handlechange} value={input}></input>
                <button>Search</button>
            </form>
            <div>
                {
                    moviearray.map((movie, index) => {
                        return (
                            <div key={index} className='movie'>
                                <div className='movie-image'>
                                    <img src={img_full_path + movie.poster_path} alt={movie.title || movie.original_title}></img>
                                </div>
                                <div>
                                <h1>{movie.title}</h1>
                                <p>{movie.overview }</p> 
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default SearchMovie