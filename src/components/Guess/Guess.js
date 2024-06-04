import React from 'react';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED, WORD_LENGTH } from '../../constants';

function Guess({ guesses }) {
  const getRow = (index) => {
    return guesses[index]?.result || range(WORD_LENGTH);
  };

  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((_, row) => (
        <p key={row} className="guess">
          {getRow(row).map((cell, col) => (
            <span key={col} className={`cell ${cell.status}`}>
              {cell.letter || ''}
            </span>
          ))}
        </p>
      ))}
    </div>
  );
}

export default Guess;
