"use client";

import { useState, useEffect } from "react";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";

/* =========================
   PUZZLE LIST
========================= */
const puzzles = [
    {
        fen: "6rk/6pp/5Q2/6N1/8/8/8/4K3 w - - 0 1",
        solution: { from: "g5", to: "f7" },
    },
    {
        fen: "r1bqkbnr/pppp1ppp/2n5/4p3/1b1P4/5N2/PPPPPPPP/RNBQKB1R w KQkq - 2 3",
        solution: { from: "d4", to: "e5" },
    },
    {
        fen: "8/8/8/2k5/8/3K4/8/8 w - - 0 1",
        solution: { from: "d3", to: "c4" },
    },
];

/* =========================
   DAILY PUZZLE LOGIC
========================= */
const getDailyPuzzle = () => {
    const today = new Date();

    const seed =
        today.getFullYear() * 10000 +
        (today.getMonth() + 1) * 100 +
        today.getDate();

    return puzzles[seed % puzzles.length];
};

export default function PuzzleSection() {
    const [mounted, setMounted] = useState(false);

    const dailyPuzzle = getDailyPuzzle();

    const [gamePosition, setGamePosition] = useState(dailyPuzzle.fen);
    const [moveFrom, setMoveFrom] = useState("");
    const [optionSquares, setOptionSquares] = useState({});
    const [message, setMessage] = useState("");
    const [solved, setSolved] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    /* =========================
       GET GAME INSTANCE
    ========================= */
    const getGame = () => {
        try {
            return new Chess(gamePosition);
        } catch {
            const c = new Chess();
            c.load(gamePosition);
            return c;
        }
    };

    /* =========================
       HANDLE MOVE
    ========================= */
    const handleMove = (sourceSquare, targetSquare) => {
        if (solved) return false;

        const game = getGame();

        try {
            const move = game.move({
                from: sourceSquare,
                to: targetSquare,
                promotion: "q",
            });

            if (move === null) return false;

            setGamePosition(game.fen());

            if (
                sourceSquare === dailyPuzzle.solution.from &&
                targetSquare === dailyPuzzle.solution.to
            ) {
                setMessage("🔥 Brilliant!");
                setTimeout(() => setSolved(true), 300);
            } else {
                setMessage("❌ Try Again");

                setTimeout(() => {
                    setGamePosition(dailyPuzzle.fen);
                    setMessage("");
                }, 1000);
            }

            return true;
        } catch {
            return false;
        }
    };

    /* =========================
       HIGHLIGHT MOVES
    ========================= */
    const getMoveOptions = (square) => {
        const game = getGame();
        const moves = game.moves({
            square,
            verbose: true,
        });

        if (moves.length === 0) {
            setOptionSquares({});
            return false;
        }

        const newSquares = {};

        moves.forEach((move) => {
            newSquares[move.to] = {
                background:
                    game.get(move.to) &&
                        game.get(move.to).color !== game.get(square).color
                        ? "radial-gradient(circle, rgba(255,0,0,0.3) 85%, transparent 85%)"
                        : "radial-gradient(circle, rgba(0,0,0,.2) 25%, transparent 25%)",
                borderRadius: "50%",
            };
        });

        newSquares[square] = {
            background: "rgba(255,255,0,0.4)",
        };

        setOptionSquares(newSquares);
        return true;
    };

    /* =========================
       EVENTS
    ========================= */
    const onDrop = (sourceSquare, targetSquare) => {
        setMoveFrom("");
        setOptionSquares({});
        return handleMove(sourceSquare, targetSquare);
    };

    const onSquareClick = (square) => {
        if (solved) return;

        if (!moveFrom) {
            const hasMoves = getMoveOptions(square);
            if (hasMoves) setMoveFrom(square);
            return;
        }

        const moved = handleMove(moveFrom, square);

        if (!moved) {
            const hasMoves = getMoveOptions(square);
            if (hasMoves) {
                setMoveFrom(square);
            } else {
                setMoveFrom("");
                setOptionSquares({});
            }
        } else {
            setMoveFrom("");
            setOptionSquares({});
        }
    };

    /* =========================
       RESET
    ========================= */
    const resetPuzzle = () => {
        const puzzle = getDailyPuzzle();
        setGamePosition(puzzle.fen);
        setSolved(false);
        setMessage("");
        setOptionSquares({});
        setMoveFrom("");
    };

    return (
        <section className="section puzzle">
            <div className="container" style={{ maxWidth: "600px", margin: "0 auto" }}>
                <div className="puzzle-copy glass-panel">
                    <h2 style={{ textAlign: "center", marginBottom: '8px' }}>🔥 Daily Puzzle</h2>
                    <p className="eyebrow" style={{ textAlign: "center", marginBottom: '24px', display: 'block' }}>
                        {new Date().toDateString()}
                    </p>

                    <div style={{ maxWidth: "400px", margin: "20px auto" }}>
                        {mounted && (
                            <Chessboard
                                position={gamePosition}
                                onPieceDrop={onDrop}
                                onSquareClick={onSquareClick}
                                customSquareStyles={optionSquares}
                                customDarkSquareStyle={{ backgroundColor: "#4a3f2c" }}
                                customLightSquareStyle={{ backgroundColor: "#c9b37e" }}
                            />
                        )}
                    </div>

                    <p style={{ textAlign: "center", minHeight: "30px", fontWeight: 'bold' }}>
                        {message}
                    </p>

                    {solved && (
                        <div
                            style={{
                                textAlign: "center",
                                background: "var(--gold)",
                                color: "#111",
                                padding: "12px",
                                borderRadius: "var(--radius-sm)",
                                marginTop: "10px",
                                fontWeight: "bold",
                            }}
                        >
                            🎉 Puzzle Solved!
                        </div>
                    )}

                    <div style={{ textAlign: "center", marginTop: "24px" }}>
                        <button
                            onClick={resetPuzzle}
                            className="button"
                        >
                            Reset Puzzle
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}