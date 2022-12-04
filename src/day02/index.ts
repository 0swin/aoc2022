import run from "aocrunner";

const parseInput = (rawInput: string) => rawInput;

const part1 = (rawInput: string) => {
  let score = 0;

  const input = parseInput(rawInput)
    .split("\n")
    .map((line) => line.split(" "));

  input.forEach((game) => {
    const player1 = game[0];
    const player2 = game[1]
      .replace(/X/g, "A")
      .replace(/Y/g, "B")
      .replace(/Z/g, "C");

    // Result of the match
    if (player1 === player2) {
      // Draw
      score += 3;
    } else if (
      (player1 === "A" && player2 === "C") ||
      (player1 === "B" && player2 === "A") ||
      (player1 === "C" && player2 === "B")
    ) {
      // Player 1 wins
      score += 0;
    } else {
      // Player 2 wins
      score += 6;
    }

    // Scores for player 2 plays
    score += player2 === "A" ? 1 : player2 === "B" ? 2 : 3;
  });

  return score.toString();
};

const part2 = (rawInput: string) => {
  let score = 0;
  let hands = ["A", "B", "C"];

  const input = parseInput(rawInput)
    .split("\n")
    .map((line) => line.split(" "));

  input.forEach((game) => {
    const player1 = game[0];
    const result = game[1];

    // if result is X, player 2 loses, if result is Y, its a draw, if result is Z, player 2 wins

    // find the index of player1 in hands
    const player1Index = hands.indexOf(player1);

    // player2Index is player1Index -1 if result is X, player1Index if result is Y, player1Index + 1 if result is Z, but we need to make sure that the index is between 0 and 2

    const player2Index =
      player1Index + (result === "X" ? -1 : result === "Y" ? 0 : 1);
    const player2 = hands[(player2Index + 3) % 3];

    // score += 3 if result is Y, 0 if result is X, 6 if result is Z
    score += result === "Y" ? 3 : result === "X" ? 0 : 6;

    // Scores for player 2 plays
    score += player2 === "A" ? 1 : hands[player2Index] === "B" ? 2 : 3;
  });

  return score.toString();
};

run({
  part1: {
    tests: [
      {
        input: `A Y
B X
C Z`,
        expected: "15",
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: `
A Y
B X
C Z
`,
        expected: "12",
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
