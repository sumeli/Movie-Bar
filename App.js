import React, { useState, useEffect } from 'react';
import './App.css';
// import Movie from './Movie';
// import Navbar from './Navbar';
import Front from './Front';
import Summary from './Summary';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Movie from './Movie';


const given_api = "https://api.tvmaze.com/search/shows?q=all"

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(given_api)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data);
      })
      .catch((error) => {
        console.log(error)
      })
  }, []);

  return (
    <Router>
      <div>
        <Switch>        
          <Route  exact path="/" component={props => <Front movies={movies} {...props}/>} />
          <Route exact path="/summary" component={props => <Summary movies={movies} {...props}/>}/>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
