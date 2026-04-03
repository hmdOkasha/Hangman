import React from "react";

function GameStatus({ winOrLose }: { winOrLose: string }) {
  const showGameStatus = () => {
    if (winOrLose === "won") return "You win!";
    else if (winOrLose === "lost") return "Oh no :(";
    else return "placeholder";
  };

  return (
    <div
      className={`flex-2 h-10 items-center justify-center text-5xl font-semibold mt-2`}
    >
      <span
        className={` ${
          winOrLose === "won" || winOrLose === "lost" ? "visible" : "invisible"
        } ${winOrLose === "won" && "text-green-400"} ${
          winOrLose === "lost" && "text-red-500"
        }`}
      >
        {showGameStatus()}
      </span>
    </div>
  );
}

export default GameStatus;
