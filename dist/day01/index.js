import run from "aocrunner";
const parseInput = (rawInput) => rawInput;
const part1 = (rawInput) => {
  const input = parseInput(rawInput).split("\n\n").map((x) => x.split("\n"));
  const calories = input.map((x) => x.reduce((a, b) => a + parseInt(b), 0));
  const maximum = Math.max(...calories);
  return maximum.toString();
};
const part2 = (rawInput) => {
  const input = parseInput(rawInput).split("\n\n").map((x) => x.split("\n"));
  const calories = input.map((x) => x.reduce((a, b) => a + parseInt(b), 0));
  calories.sort((a, b) => b - a);
  const maximum = calories.slice(0, 3).reduce((a, b) => a + b, 0);
  return maximum.toString();
};
run({
  part1: {
    tests: [
      {
        input: `1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`,
        expected: "24000"
      }
    ],
    solution: part1
  },
  part2: {
    tests: [
      {
        input: `1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`,
        expected: "45000"
      }
    ],
    solution: part2
  },
  trimTestInputs: true,
  onlyTests: false
});
//# sourceMappingURL=index.js.map
