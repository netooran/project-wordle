import React from 'react';

function GameResult({ hasWon, answer, noOfGuesses }) {
  return (
    <>
      <div class={`${hasWon ? 'happy' : 'sad'} banner`}>
        <p>
          {hasWon ? (
            <>
              <strong>Congratulations!</strong> Got it in
              <strong> {noOfGuesses} guesses</strong>.
            </>
          ) : (
            <>
              Sorry, the correct answer is <strong>{answer}</strong>.
            </>
          )}
        </p>
      </div>
    </>
  );
}

export default GameResult;
