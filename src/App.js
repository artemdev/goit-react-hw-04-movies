import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/home';
import Movies from './components/movies';
import MovieDetailsPage from './components/movieDetailsPage';
import NotFound from './components/notFoundView';

export default function App() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/movies" exact component={Movies} />
      <Route path="/movies/:movieId" component={MovieDetailsPage} />
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}
