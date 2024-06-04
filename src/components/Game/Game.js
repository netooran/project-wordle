import React, { useMemo, useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import Guess from '../Guess/Guess';

import { checkGuess } from '../../game-helpers';
import { NUM_OF_GUESSES_ALLOWED, RESULT, STATUS } from '../../constants';
import GameResult from '../GameResult/GameResult';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);
  const [result, setResult] = useState('');
  const isGameOver = useMemo(() => result !== '', [result]);

  const addGuess = (guess) => {
    const result = checkGuess(guess, answer);
    setGuesses([...guesses, { id: crypto.randomUUID(), guess, result }]);

    if (result.every(({ status }) => status === STATUS.CORRECT))
      setResult(RESULT.WON);
    if (guesses.length >= NUM_OF_GUESSES_ALLOWED - 1) setResult(RESULT.LOST);
  };

  return (
    <>
      {isGameOver && (
        <GameResult
          answer={answer}
          hasWon={result === RESULT.WON}
          noOfGuesses={guesses.length}
        />
      )}

      <GuessInput addGuess={addGuess} disabled={isGameOver} />
      <Guess guesses={guesses} />
    </>
  );
}

export default Game;
