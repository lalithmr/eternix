"use client";

import { useState } from "react";

/* =========================
   SMOTHERED MATE PUZZLE
========================= */
const currentPuzzle = {
  pieceMap: {
    h8: "♚",
    g8: "♜",
    g7: "♟",
    h7: "♟",
    g5: "♘",
    f6: "♕",
    e1: "♔",
  },
  solution: {
    move: "Nf7#",
    from: "f6",
    to: "f7",
  },
  target: "f7",
};

const files = ["a", "b", "c", "d", "e", "f", "g", "h"];

/* =========================
   BOARD GENERATION
========================= */
const boardSquares = Array.from({ length: 64 }, (_, index) => {
  const row = Math.floor(index / 8);
  const col = index % 8;
  const coordinate = `${files[col]}${8 - row}`;

  return {
    coordinate,
    tone: (row + col) % 2 === 0 ? "dark" : "light",
  };
});

/* =========================
   COMPONENT
========================= */
export default function PuzzleSection() {
  const [solutionVisible, setSolutionVisible] = useState(false);

  return (
    <section className="section puzzle" id="puzzle">

      {/* HEADER */}
      <div className="section-intro puzzle-copy reveal">
        <p className="eyebrow">Puzzle</p>
        <h2>Smothered Mate</h2>
        <p>White to move and deliver checkmate.</p>
      </div>

      <div className="puzzle-layout">

        {/* =========================
            CHESS BOARD
        ========================= */}
        <div className="chessboard">
          {boardSquares.map((square) => {
            const piece = currentPuzzle.pieceMap[square.coordinate];

            return (
              <div
                key={square.coordinate}
                className={`square ${square.tone}`}
              >
                {/* ORIGINAL PIECES */}
                {piece && (
                  <span
                    className={`chess-piece ${"♔♕♖♗♘♙".includes(piece) ? "white-piece" : "black-piece"
                      }`}
                  >
                    {piece}
                  </span>
                )}

                {/* ANIMATED MOVE (Knight appears on f7) */}
                {solutionVisible &&
                  square.coordinate === currentPuzzle.solution.to && (
                    <span className="solution-piece">
                      ♘
                    </span>
                  )}

                {/* COORDINATES */}
                <span className="coord">{square.coordinate}</span>
              </div>
            );
          })}
        </div>

        {/* =========================
            SIDE PANEL
        ========================= */}
        <div className="puzzle-panel">
          <button
            className="button"
            onClick={() => setSolutionVisible(!solutionVisible)}
          >
            {solutionVisible ? "Hide Solution" : "See Solution"}
          </button>

          {solutionVisible && (
            <p className="solution-text">
              Best move: <strong>Nf7#</strong> — Smothered Mate.
            </p>
          )}
        </div>

      </div>
    </section>
  );
}