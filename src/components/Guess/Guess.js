import React, { useMemo } from 'react';

import { range } from '../../utils';
import { WORD_LENGTH } from '../../constants';
import { checkGuess } from '../../game-helpers';

function Cell({ status, children }) {
  return <span className={`cell ${status || ''}`}>{children}</span>;
}

function Guess({ guess, answer }) {
  const result = useMemo(() => checkGuess(guess, answer), [guess, answer]);

  return (
    <p className="guess">
      {range(WORD_LENGTH).map((index) => (
        <Cell key={index} status={result?.[index]?.status}>
          {result?.[index]?.letter}
        </Cell>
      ))}
    </p>
  );
}

export default Guess;
