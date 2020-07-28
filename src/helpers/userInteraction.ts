import * as readline from "readline";
import { MazePosition } from "../models/MazePosition";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export const ask = (query: string) => {
  return new Promise<string>((resolve) =>
    rl.question(query, (ans: string) => {
      resolve(ans);
    })
  );
};

export const getUserResponse = (): Promise<MazePosition> => {
  console.log("\nSelected maze has two entries, select one");
  let startPos: MazePosition;
  return ask("Top entry or bottom entry [t/b]: ").then((r) => {
    rl.close();
    switch (r.toLocaleLowerCase()) {
      case "t":
        startPos = { x: 1, y: 0 };
        break;
      case "b":
        startPos = { x: 11, y: 10 };
        break;
      default:
        console.log("Invalid answer, using top as default");
    }

    return startPos;
  });
};
