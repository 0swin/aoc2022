import run from "aocrunner";
import { map, split } from "lodash";

const parseInput = (rawInput: string) => rawInput;

// a variable "priority" assigns score from 1 to 26 to each lowercase letter, and 27 to 52 to each uppercase letter
const priority = (char: string) => {
  const charCode = char.charCodeAt(0);
  if (charCode >= 97 && charCode <= 122) {
    return charCode - 96;
  } else if (charCode >= 65 && charCode <= 90) {
    return charCode - 38;
  } else {
    return 0;
  }
};

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput)
    .split("\n")
    .map((line) => line.split(""));

  const compartedInput = input.map((line) => {
    const half = line.length / 2;
    return [line.slice(0, half), line.slice(half)];
  });

  const commonElements = compartedInput
    .map(([left, right]) => left.filter((element) => right.includes(element)))
    .map((array) => array[0]);

  // console.log(commonElements);

  let score = 0;
  commonElements.forEach((element) => {
    score += priority(element);
  });
  // console.log(score);

  return score.toString();
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput)
    .split("\n")
    .map((line) => line.split(""));
  // console.log(input);

  // split input every 3 lines;
  let elvesGroups: string[][][] = [];
  input.forEach((line, index) => {
    if (index % 3 === 0) {
      elvesGroups.push([line]);
    } else {
      elvesGroups[elvesGroups.length - 1].push(line);
    }
  });
  // console.log(elvesGroups);

  const commonElements = elvesGroups.map((group) => {
    const [left, middle, right] = group;
    const common = left.filter((element) => middle.includes(element));
    return common.filter((element) => right.includes(element))[0];
  });
  // console.log(commonElements);

  let score = 0;
  commonElements.forEach((element) => {
    score += priority(element);
  });
  // console.log(score);

  return score.toString();
};

run({
  part1: {
    tests: [
      {
        input: `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`,
        expected: "157",
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`,
        expected: "70",
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
