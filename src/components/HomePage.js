import React from 'react';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to CRUD Games!</h1>
        
        <div className="ui container">
          <div className="ui bulleted list ui-center">
            <Link className="item" to="/games">Games</Link>
            <Link className="item" to="/games/new">Add New Game</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;