import * as userAction from "../../src/helpers/userInteraction";
import { getUserResponse } from "../../src/helpers/userInteraction";
import sinon, { SinonSandbox } from "sinon";
import { expect } from "chai";
import { MazePosition } from "../../src/models/MazePosition";

let sandbox: SinonSandbox;
beforeEach(function () {
  sandbox = sinon.createSandbox();
});

afterEach(function () {
  sandbox.restore();
});
describe("UserInteraction Test", () => {
  let result: MazePosition;
  afterEach(() => {
  });
  describe("when user selects top entry", () => {
    beforeEach(async () => {
      sandbox.stub(userAction, "ask").resolves("t");
    });

    it("should return top entry position", async() => {
      result = await getUserResponse();
      expect(result).deep.equal({ x: 1, y: 0 });
    });
  });

  describe("when user selects bottom entry", () => {
    beforeEach(async () => {
      sandbox.stub(userAction, "ask").resolves("b");
    });

    it("should return bottom entry position", async () => {
      result = await getUserResponse();
      expect(result).deep.equal({ x: 11, y: 10 });
    });
  });
});
