import run from "aocrunner";

const parseInput = (rawInput: string) => rawInput;

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput)
    .split("\n")
    .map((line) => line.split(","));

  // input contains arrays of two ranges.
  // each range is a string with two numbers separated by a dash.
  // convert each range to an array of numbers.
  // for example: ["1-3", "5-7"] becomes [[1, 2, 3], [5, 6, 7]]
  const ranges = input.map((line) => {
    return line.map((range) => {
      const [min, max] = range.split("-").map((number) => parseInt(number));
      return Array.from({ length: max - min + 1 }, (_, i) => min + i);
    });
  });

  let score = 0;

  ranges.forEach((range) => {
    const [left, right] = range;
    const intersection = left.filter((element) => right.includes(element));
    if (
      intersection.toString() === left.toString() ||
      intersection.toString() === right.toString()
    ) {
      score += 1;
    }
  });

  console.log(score);
  return score.toString();
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput)
    .split("\n")
    .map((line) => line.split(","));

  // input contains arrays of two ranges.
  // each range is a string with two numbers separated by a dash.
  // convert each range to an array of numbers.
  // for example: ["1-3", "5-7"] becomes [[1, 2, 3], [5, 6, 7]]
  const ranges = input.map((line) => {
    return line.map((range) => {
      const [min, max] = range.split("-").map((number) => parseInt(number));
      return Array.from({ length: max - min + 1 }, (_, i) => min + i);
    });
  });

  let score = 0;

  ranges.forEach((range) => {
    const [left, right] = range;
    const intersection = left.filter((element) => right.includes(element));
    if (intersection.length != 0) {
      score += 1;
    }
  });

  console.log(score);
  return score.toString();
};

run({
  part1: {
    tests: [
      {
        input: `2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8`,
        expected: "2",
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: `2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8`,
        expected: "4",
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
