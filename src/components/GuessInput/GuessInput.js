import React, { useState } from 'react';

function GuessInput({ submitGuess, disabled }) {
  const [guess, setGuess] = useState('');

  const handleSubmitGuess = (event) => {
    event.preventDefault();

    submitGuess(guess);
    setGuess('');
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmitGuess}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        required
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        disabled={disabled}
        value={guess}
        onChange={(e) => setGuess(e.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;
