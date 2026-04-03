type WordContainerProps = {
  wordToGuess: string;
  letters: string[];
  winOrLose: string;
  lettersNotGuessed: string[];
};

function WordContainer({
  wordToGuess,
  letters,
  winOrLose,
  lettersNotGuessed,
}: WordContainerProps) {
  return (
    <div className="flex-2 flex flex-row gap-4 items-center mb-5">
      {[...wordToGuess].map((letter, index) => (
        <div key={index} className="flex flex-col items-center">
          <div
            className={`text-2xl sm:text-5xl font-semibold ${
              letters[index] !== "_" ? "visible" : "invisible"
            } ${winOrLose === "won" && "text-green-400"}
            ${winOrLose === "lost" && "visible"} ${
              winOrLose === "lost" && lettersNotGuessed.includes(letter)
                ? "text-red-500"
                : ""
            }`}
          >
            {letter.toUpperCase()}
          </div>
          <div className="w-6 h-1.5 sm:w-10 bg-black"></div>
        </div>
      ))}
    </div>
  );
}

export default WordContainer;
