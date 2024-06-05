import React from 'react';

function RestartButton({ restartGame }) {
  return (
    <button className="btn link" onClick={restartGame}>
      Restart
    </button>
  );
}

export default RestartButton;
