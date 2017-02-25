import React from 'react';
import GameCard from './GameCard';

const GamesList = ({ games, deleteGame }) => {
  const emptyMessage = (
    <p>There are no games in your collection yet.</p>
  );
  
  const gamesList = (
    <div className="ui four cards">
      { games.map(game => <GameCard game={game} key={game._id} deleteGame={deleteGame} /> ) }
    </div>
  );
  
  return (
    <div className="ui list">
      {games.length === 0 ? emptyMessage : gamesList}
    </div>
  );
}

GamesList.propTypes = {
  games: React.PropTypes.array.isRequired,
  deleteGame: React.PropTypes.func.isRequired
}

export default GamesList; 