export const deepCopy = (arr: string[][]): string[][] => {
  let copy: string[][] = [];
  arr.forEach((elem) => {
    copy.push(elem.slice());
  });
  return copy;
};
