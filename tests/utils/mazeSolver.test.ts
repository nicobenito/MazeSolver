import { mazes, sequences } from "../mock/mazes";
import { setMaze } from "../../src/utils/mazeSolver";
import { deepCopy } from "../../src/helpers/mazeCopier";
import * as userAction from "../../src/helpers/userInteraction";
import { expect } from "chai";
import { SinonStatic, SinonSandbox } from "sinon";
import sinon from "sinon";

let sandbox: SinonSandbox;
let maze: string[][] = [];
beforeEach(function () {
  sandbox = sinon.createSandbox();
});

afterEach(function () {
  sandbox.restore();
});

describe("MazeSolver Test", () => {
  let result: boolean;
  beforeEach(async () => {
    maze = deepCopy(mazes.challengeMaze);
  });
  afterEach(() => {
    maze = [];
  });
  describe("when exit the maze successfully", () => {
    beforeEach(async () => {
      sandbox.stub(userAction, "getUserResponse").resolves({ x: 1, y: 0 });
      result = await setMaze(maze, sequences.challengeSeq);
    });

    it("should return solved as true", () => {
      expect(result).equal(true);
    });
  });

  describe("when not founding an exit", () => {
    beforeEach(async () => {
      sandbox.stub(userAction, "getUserResponse").resolves({ x: 11, y: 10 });
      result = await setMaze(maze, sequences.challengeSeq);
    });

    it("should return solved as false", () => {
      expect(result).equal(false);
    });
  });
});
