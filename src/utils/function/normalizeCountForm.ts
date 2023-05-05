export function normalizeCountForm(number: number, wordsArr: string[]) {
  number = Math.abs(number);
  if (Number.isInteger(number)) {
    const options = [2, 0, 1, 1, 1, 2];
    return number + ' ' + wordsArr[(number % 100 > 4 && number % 100 < 20) ? 2 : options[(number % 10 < 5) ? number % 10 : 5]];
  }
  return number + wordsArr[1];
}
