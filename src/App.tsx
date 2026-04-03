import { useState, useEffect, useMemo } from "react";
import "./App.css";
import Hangman from "./Components/Hangman";
import Keyboard from "./Components/Keyboard";
import WordContainer from "./Components/WordContainer";
import words from "../src/assets/wordsList/wordList.json";
import GameStatus from "./Components/GameStatus";

function App() {
  const [wordToGuess, setWordToGuess] = useState<string>(
    () => words[Math.floor(Math.random() * words.length)]
  );

  const [correctLetters, setCorrectLetters] = useState<string[]>(() =>
    [...wordToGuess].map(() => {
      return "_";
    })
  );

  const [wrongLetters, setWrongLetters] = useState<string[]>([]);

  const winOrLose = useMemo(() => {
    if (!correctLetters.includes("_")) return "won";
    if (wrongLetters.length === 7) return "lost";
    return "inGame";
  }, [correctLetters, wrongLetters]);

  const lettersNotGuessed: string[] = [...wordToGuess].reduce(
    (acc: string[], letter, index) => {
      if (winOrLose === "lost" && correctLetters[index] === "_") {
        acc.push(letter);
      }
      return acc;
    },
    []
  );

  const checkLetter = (letter: string): void => {
    const lower = letter.toLowerCase();
    if (wordToGuess.includes(lower)) {
      setCorrectLetters((prev) => {
        return [...wordToGuess].map((value, index) => {
          return value === lower ? value : prev[index];
        });
      });
      console.log(correctLetters);
    } else {
      setWrongLetters((prev) =>
        prev.includes(letter) ? prev : [...prev, letter]
      );
    }
  };

  const resetGame = (): void => {
    const newWord = words[Math.floor(Math.random() * words.length)];
    setWordToGuess(() => newWord);
    setCorrectLetters(() =>
      [...newWord].map(() => {
        return "_";
      })
    );
    setWrongLetters([]);
  };

  useEffect(() => {
    const handleKeyboardResetGame = (event: KeyboardEvent): void => {
      console.log(event.key);
      if (event.key === "Enter") {
        resetGame();
      }
    };
    window.addEventListener("keydown", handleKeyboardResetGame);

    return () => {
      window.removeEventListener("keydown", handleKeyboardResetGame);
    };
  }, []);

  return (
    <div className="box-border h-full min-h-dvh flex flex-col justify-center items-center gap-3">
      <GameStatus winOrLose={winOrLose} />
      <Hangman wrongLetters={wrongLetters} />
      <WordContainer
        wordToGuess={wordToGuess}
        letters={correctLetters}
        winOrLose={winOrLose}
        lettersNotGuessed={lettersNotGuessed}
      />
      <Keyboard
        checkLetter={checkLetter}
        correctLetters={correctLetters}
        wrongLetters={wrongLetters}
        winOrLose={winOrLose}
        resetGame={resetGame}
      />
    </div>
  );
}

export default App;
