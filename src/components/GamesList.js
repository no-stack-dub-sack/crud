import React from 'react';

const GamesList = ({ games }) => {
  const emptyMessage = (
    <p>There are no games in your collection yet.</p>
  );
  
  const gamesList = (
    <p>Dummy list</p>
  );
  return (
    <div>
      {games.length === 0 ? emptyMessage : gamesList}
    </div>
  );
}

GamesList.propTypes = {
  games: React.PropTypes.array.isRequired
}

export default GamesList; 