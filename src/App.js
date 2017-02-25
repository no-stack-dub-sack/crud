import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import GamesPage from './components/GamesPage';
import GameFormPage from './components/GameFormPage'
import HomePage from './components/HomePage';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <div className="ui three item menu">
          <NavLink activeClassName="active item" className="item" exact to="/">Home</NavLink>
          <NavLink activeClassName="active item" className="item" exact to="/games">Games</NavLink>
          <NavLink activeClassName="active item" className="item" exact to="/games/new">Add New</NavLink>
        </div>
        
        <Route exact path="/" component={HomePage} />
        <Route exact path="/games" component={GamesPage} />
        <Route path="/games/new" component={GameFormPage} />
        <Route path="/game/:_id" component={GameFormPage} />
        
      </div>
    );
  }
}

export default App;
