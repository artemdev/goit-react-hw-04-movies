import './App.css';
import React from 'react';
import { Route } from 'react-router-dom';
import Navbar from './components/navbar'
import Home from './components/home'
import Movies from './components/movies'

export default function App() {

  return (
    <>
      <Route path="/" component={Navbar} />
      <Route path="/" exact component={Home} />
      <Route path="/movies" exact component={Movies} />
    </>
  );
}
