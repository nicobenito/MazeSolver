import { mazes } from "../mock/mazes";
import { deepCopy } from "../../src/helpers/mazeCopier";
import { expect } from "chai";

let testArray: string[][] = [];

describe("MazeCopier Test", () => {
  before(() => {
    testArray = deepCopy(mazes.simpleMaze);
  })
  describe("when passing multidimensional array", () => {
    it("should return same array copied", () => {
      expect(testArray).to.deep.equal(mazes.simpleMaze);
    });
  });

  describe("when modifying new array", () => {
    before(() => {
      testArray[0][0] = "other";
    })
    it("original should differ from copy", () => {
      expect(testArray[0][0]).to.not.deep.equal(mazes.simpleMaze);
    });
  });
});
