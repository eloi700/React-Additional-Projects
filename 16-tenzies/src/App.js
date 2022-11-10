import React, { useState, useEffect } from 'react';
import './App.scss';
import Die from './Die';
import Confetti from 'react-confetti';
const { nanoid } = require('nanoid');

function App() {
  const [dice, setDice] = useState(allNewDice());
  const [tenzies, setTenzies] = useState(false);

  /**
   * Challenge: Check the dice array for these winning conditions:
   * 1. All dice are held, and
   * 2. all dice have the same value
   *
   * If both conditions are true, set `tenzies` to true and log
   * "You won!" to the console
   */
  useEffect(() => {
    const allHeld = dice.every((die) => die.isHeld);
    const firstValue = dice[0].value;
    const allSameValue = dice.every((die) => die.value === firstValue);
    if (allHeld && allSameValue) {
      setTenzies(true);
    }
  }, [dice]);

  function generateNewDie() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    };
  }

  // FUNCTION FOR RANDOMIZED 6 NUMBERS IN ARRAY OF 10
  function allNewDice() {
    const newArrayDice = [];
    for (let i = 0; i < 10; i++) {
      // newArrayDice.push(Math.ceil(Math.random() * 6));
      newArrayDice.push(generateNewDie());
    }
    return newArrayDice;
  }

  // FUNCTION FOR ROLL DICE
  function rollDice() {
    if (!tenzies) {
      setDice((oldDice) =>
        oldDice.map((die) => {
          return die.isHeld ? die : generateNewDie();
        })
      );
    } else {
      setTenzies(false);
      setDice(allNewDice());
    }
  }

  // FUNCTION HOLD DICE
  function holdDice(id) {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  }

  const diceElements = dice.map((die) => (
    <Die
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      holdDice={() => holdDice(die.id)}
    />
  ));

  return (
    <main className='tenzies-container'>
      {tenzies && <Confetti />}
      <h1>Tenzies</h1>
      <p>
        Roll untill all dice are the same. Click each die to freeze it at its
        current value between rolls
      </p>
      <div className='dice-container'>{diceElements}</div>
      <button className='roll-dice' onClick={rollDice}>
        {tenzies ? 'New Game' : 'Roll'}
      </button>
    </main>
  );
}

export default App;

/**
 * Challenge: Tie off loose ends!
 * 1. If tenzies is true, Change the button text to "New Game"
 * 2. If tenzies is true, use the "react-confetti" package to
 *    render the <Confetti /> component 🎉
 *
 *    Hint: don't worry about the `height` and `width` props
 *    it mentions in the documentation.
 */
