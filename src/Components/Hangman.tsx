type HangmanProps = {
  wrongLetters: string[];
};

function Hangman({ wrongLetters }: HangmanProps) {
  return (
    <div className="flex-6">
      <div className="relative w-100 h-85">
        <div className="h-1.5 w-40 bg-black absolute left-10 bottom-0"></div>
        <div className="h-80 w-1.5 bg-black absolute bottom-0 left-30"></div>
        <div className="h-1.5 w-40 bg-black absolute top-5 left-30"></div>
        <div
          className={`w-1.5 h-10 bg-black absolute top-5 left-70 ${
            wrongLetters.length >= 1 ? "visible" : "invisible"
          }`}
        />
        <div
          className={`border-solid border-black border-5 h-10 w-10 absolute left-[263px] top-15 rounded-full ${
            wrongLetters.length >= 2 ? "visible" : "invisible"
          }`}
        />
        <div
          className={`w-1.5 h-25 bg-black absolute top-25 left-70 ${
            wrongLetters.length >= 3 ? "visible" : "invisible"
          }`}
        />
        <div
          className={`h-15 w-1.5 bg-black absolute top-23 left-[307px] transform rotate-60 ${
            wrongLetters.length >= 4 ? "visible" : "invisible"
          }`}
        />
        <div
          className={`h-15 w-1.5 bg-black absolute top-23 left-[253px] transform rotate-300 ${
            wrongLetters.length >= 5 ? "visible" : "invisible"
          }`}
        />

        <div
          className={`h-15 w-1.5 bg-black absolute top-[193px] left-[295px] transform rotate-150 ${
            wrongLetters.length >= 6 ? "visible" : "invisible"
          }`}
        />
        <div
          className={`h-15 w-1.5 bg-black absolute top-[193px] left-[265px] transform rotate-210 ${
            wrongLetters.length >= 7 ? "visible" : "invisible"
          }`}
        />
      </div>
    </div>
  );
}

export default Hangman;
