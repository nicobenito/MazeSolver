import { MazeSolution } from "../models/MazeSolution";
import { deepCopy } from "../helpers/mazeCopier";
import { MazePosition } from "../models/MazePosition";
import { print } from "../utils/mazePrinter";
import { challengeMaze } from "../resources/mazeExamples";
import { getUserResponse } from "../helpers/userInteraction";
import { Block } from "../resources/constants"

let mazeToSolve: string[][];
let iterations: number = 0;
let mazeSeq: string[];

export const setMaze = async (
  maze: string[][],
  sequence: string[]
): Promise<boolean> => {
  iterations = 0;
  mazeToSolve = deepCopy(maze);
  mazeSeq = sequence;
  const initialPos: MazePosition = await getUserResponse();
  console.time("Time");

  const solution: MazeSolution = {
    solved: mazeSolver(initialPos.x, initialPos.y),
    mazeSolution: mazeToSolve,
    iterations,
  };
  if (solution.solved) {
    console.log("\nExit found!");
    console.log(`Iterations: ${solution.iterations}`);
  } else {
    console.log("\nNo solution was found");
  }
  print(solution.mazeSolution, deepCopy(challengeMaze));
  console.timeEnd("Time");
  return solution.solved;
};

const mazeSolver = (x: number, y: number, seqPos: number = 0): boolean => {
  iterations++;
  console.log(`\nX:${x} - Y:${y}`);
  if (mazeToSolve[y] == undefined || mazeToSolve[y][x] == undefined) {
    console.log("Out of range");
    return false;
  }

  if (mazeToSolve[y][x] == Block.GOAL && iterations > 1) {
    console.log("Exit");
    return true;
  }

  if (mazeToSolve[y][x] != Block.ENTRY) {
    if (mazeToSolve[y][x] == Block.VISITED) {
      console.log("Visited");
      return false;
    }
    console.log(`Value: ${mazeToSolve[y][x]}`);
    if (mazeToSolve[y][x] == Block.BLOCKED) {
      console.log("Blocked");
      return false;
    }
    if (mazeToSolve[y][x] != mazeSeq[seqPos]) {
      console.log("Sequence wrong");
      return false;
    } else {
      seqPos++;
    }

    if (seqPos >= mazeSeq.length) {
      seqPos = 0;
    }
  }

  mazeToSolve[y][x] = Block.VISITED;

  if (mazeSolver(x, y - 1, seqPos)) return true;

  if (mazeSolver(x + 1, y, seqPos)) return true;

  if (mazeSolver(x, y + 1, seqPos)) return true;

  if (mazeSolver(x - 1, y, seqPos)) return true;

  mazeToSolve[y][x] = Block.NOPATH;
  return false;
};
