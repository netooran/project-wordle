import React, { useState } from 'react';

function GuessInput({ addGuess, disabled }) {
  const [guess, setGuess] = useState('');

  const submitGuess = (event) => {
    event.preventDefault();
    console.log({ guess });
    addGuess(guess);
    setGuess('');
  };

  return (
    <form className="guess-input-wrapper" onSubmit={submitGuess}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        required
        minLength={5}
        maxLength={5}
        disabled={disabled}
        value={guess}
        onChange={(e) => setGuess(e.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;
