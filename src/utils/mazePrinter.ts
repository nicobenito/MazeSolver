import { Block } from "../resources/constants";

export const print = (solvedMaze: string[][], baseMaze: string[][]): void => {
  console.log("\n### Solution ###");
  for (let i = 0; i < baseMaze.length; i++) {
    let mazeToPrint = "";
    for (let j = 0; j < baseMaze[i].length; j++) {
      if (solvedMaze[i][j] == Block.VISITED) {
        baseMaze[i][j] = `| \x1b[32m${baseMaze[i][j]}\x1b[0m `;
      } else {
        baseMaze[i][j] = `| ${baseMaze[i][j]} `;
      }
      mazeToPrint += baseMaze[i][j];
    }
    console.log(mazeToPrint);
  }
};
