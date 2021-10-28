import React from 'react'
import Movie from './Movie';
import Navbar from './Navbar';
import './App.css';

function Front(props) {
   
    return (
        <div className="movie_container">
            <Navbar />
            {props.movies.length > 0 && props.movies.map((movie) =>
            <Movie key={movie.id} movie={movie} />
            )} 
            
        </div>
    )
}

export default Front
