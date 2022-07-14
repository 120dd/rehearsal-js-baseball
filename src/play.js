import { checkNothing, checkStrike } from './compareNumber.js';

export function play(computerInputNumbers, userInputNumbers) {
  // TODO:
  // if (???) {
  //   throw Error('input is invalid')
  // }

  console.log(computerInputNumbers);
  console.log(userInputNumbers);
  const BALL_STRIKE_COUNT = checkNothing(computerInputNumbers, userInputNumbers);
  const STRIKE_COUNT = checkStrike(computerInputNumbers, userInputNumbers);
  const BALL_COUNT = BALL_STRIKE_COUNT - STRIKE_COUNT;
  if (BALL_STRIKE_COUNT === 0) {
    return '낫싱';
  }
  if (STRIKE_COUNT === 0) {
    return `${BALL_COUNT}볼`;
  }
  if (STRIKE_COUNT === 3) {
    return '<strong>🎉 정답을 맞추셨습니다! 🎉<strong>';
  }
  return `${BALL_COUNT}볼 ${STRIKE_COUNT}스트라이크`;
}
