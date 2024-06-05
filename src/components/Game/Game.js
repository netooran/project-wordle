import React, { useMemo, useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';

import { NUM_OF_GUESSES_ALLOWED, GAME_STATUS } from '../../constants';
import GameOverBanner from '../GameOverBanner';

function Game() {
  const [answer, setAnswer] = useState(sample(WORDS));
  console.info({ answer });

  const [guesses, setGuesses] = useState([]);
  const [gameStatus, setGameStatus] = useState(GAME_STATUS.RUNNING);

  const isGameOver = useMemo(
    () => gameStatus !== GAME_STATUS.RUNNING,
    [gameStatus]
  );

  const submitGuess = (tentativeGuess) => {
    const nextGuesses = [...guesses, tentativeGuess];
    setGuesses(nextGuesses);

    if (tentativeGuess === answer) setGameStatus(GAME_STATUS.WON);
    else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED)
      setGameStatus(GAME_STATUS.LOST);
  };

  const restartGame = () => {
    setAnswer(sample(WORDS));
    setGameStatus(GAME_STATUS.RUNNING);
    setGuesses([]);
  };

  return (
    <>
      <GuessInput submitGuess={submitGuess} disabled={isGameOver} />
      <GuessResults guesses={guesses} answer={answer} />

      {isGameOver && (
        <GameOverBanner
          answer={answer}
          gameStatus={gameStatus}
          noOfGuesses={guesses.length}
          restartGame={restartGame}
        />
      )}
    </>
  );
}

export default Game;
