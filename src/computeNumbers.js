import { checkOverlap, checkZero } from './inputCheck.js';
import { convertToArray } from './utils.js';

export const createRandomNumber = () => {
  let randomNum;
  let randomNumArray;
  do {
    randomNum = window.MissionUtils.Random.pickNumberInRange(123, 987);
    randomNumArray = convertToArray(randomNum);
  } while (!(checkOverlap(randomNumArray) && checkZero(String(randomNum))));

  return randomNumArray;
};

export function getRandomNumber() {
  return createRandomNumber();
}
