import { setMaze } from "./utils/mazeSolver";
import { challengeMaze } from "./resources/mazeExamples";

console.log(`Welcome to MazeSolver 1.0!`);

const mazeSeq: string[] = [
  "C",
  "C",
  "C",
  "D",
  "D",
  "D",
  "E",
  "E",
  "E",
  "D",
  "D",
  "D",
];

setMaze(challengeMaze, mazeSeq);
