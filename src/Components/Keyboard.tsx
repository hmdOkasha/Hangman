import { useEffect } from "react";

type KeyboardProps = {
  checkLetter: (letter: string) => void;
  correctLetters: string[];
  wrongLetters: string[];
  winOrLose: string;
  resetGame: () => void;
};

function Keyboard({
  checkLetter,
  correctLetters,
  wrongLetters,
  winOrLose,
  resetGame,
}: KeyboardProps) {
  const rows: string[][] = [
    ["A", "B", "C", "D", "E", "F", "G", "H", "I"],
    ["J", "K", "L", "M", "N", "O", "P", "Q", "R"],
    ["S", "T", "U", "V", "W", "X", "Y", "Z"],
  ];

  const gameEnded = winOrLose === "won" || winOrLose === "lost";

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent): void => {
      if (winOrLose === "won" || winOrLose === "lost") return;
      if (correctLetters.includes(event.key)) return;
      const upper = event.key.toUpperCase();
      console.log(upper);
      if (wrongLetters.includes(upper)) return;
      if (!event.key.match(/^[a-z]$/)) return;
      checkLetter(upper);
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [winOrLose, correctLetters, wrongLetters, checkLetter]);

  return (
    <div
      className={`flex-5 flex flex-col gap-1 min-h-[196px] ${
        gameEnded && "justify-center items-center"
      }`}
    >
      {!gameEnded ? (
        rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={`flex flex-row gap-1 ${
              rowIndex === 2 && "justify-center"
            }`}
          >
            {row.map((letter, index) => (
              <div
                key={index}
                className={`h-9 w-9 hover:cursor-pointer sm:h-12 sm:w-12 border-solid border-2 text-m sm:text-xl border-black flex flex-row justify-center items-center ${
                  correctLetters.includes(letter.toLowerCase()) && "bg-blue-400"
                } ${
                  wrongLetters.includes(letter) &&
                  "opacity-25 cursor-not-allowed"
                }`}
                onClick={() => checkLetter(letter)}
              >
                <span key={index}>{letter}</span>
              </div>
            ))}
          </div>
        ))
      ) : (
        <div className="text-2xl font-semibold">
          <button
            className="h-15 w-50 bg-green-500 text-white border rounded-xl hover:opacity-75 
          shadow-[0_6px_4px_rgb(31,181,46)] border-b-0 transition-all duration-200 ease-in-out
          active:translate-y-[6px] active:shadow-none"
            onClick={resetGame}
          >
            Play Again!
          </button>
        </div>
      )}
    </div>
  );
}

export default Keyboard;
