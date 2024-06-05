import React from 'react';
import { GAME_STATUS } from '../../constants';
import Banner from '../Banner';
import RestartButton from '../RestartButton';

function WonBanner({ noOfGuesses, restartGame }) {
  return (
    <Banner status="happy">
      <p>
        <strong>Congratulations!</strong> Got it in{' '}
        <strong>{noOfGuesses} guesses</strong>.{' '}
        <RestartButton restartGame={restartGame} />
      </p>
    </Banner>
  );
}

function LostBanner({ answer, restartGame }) {
  return (
    <Banner status="sad">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.{' '}
        <RestartButton restartGame={restartGame} />
      </p>
    </Banner>
  );
}

function GameOverBanner({ gameStatus, answer, noOfGuesses, restartGame }) {
  if (gameStatus === GAME_STATUS.WON)
    return <WonBanner noOfGuesses={noOfGuesses} restartGame={restartGame} />;
  else if (gameStatus === GAME_STATUS.LOST)
    return <LostBanner answer={answer} restartGame={restartGame} />;
  return undefined;
}

export default GameOverBanner;
