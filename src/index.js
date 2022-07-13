import { createRandomNumber } from './computeNumbers.js';
import { checkInputs } from './inputCheck.js';
import { checkNothing, checkStrike } from './utils.js';

export default class BaseballGame {
  constructor() {
    this.submitButton = document.querySelector('#submit');
    this.userInput = document.querySelector('#user-input');
    this.result = document.querySelector('#result');
    this.init();
  }

  init() {
    this.result = '';
    this.pressSubmitButton();
    this.computerInputNumbers = this.getRandomNumber();
  }

  getRandomNumber() {
    return createRandomNumber();
  }

  play(computerInputNumbers, userInputNumbers) {
    const BALL_STRIKE_COUNT = checkNothing(userInputNumbers, computerInputNumbers);
    const STRIKE_COUNT = checkStrike(userInputNumbers, computerInputNumbers);
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

  pressSubmitButton() {
    this.submitButton.onclick = (e) => {
      e.preventDefault();
      const userInputValue = this.userInput.value;
      if (!checkInputs(userInputValue)) {
        alert('값을 확인해주세요!');
        return;
      }
      const RESULT = this.play(userInputValue, this.computerInputNumbers);
      console.log(RESULT);
    };
  }
}
//
// const submit = document.querySelector('#submit');
// const userInput = document.querySelector('#user-input');
// const restartBtn = document.querySelector('#game-restart-button');
// const GAME_RESTART_ARTICLE = document.querySelector('#game-restart-article');
//
// let userInputNumbers;
// const computerInputNumbers = createRandomNumber();
//
// submit.onclick = (e) => {
//   e.preventDefault();
//   const userInputValue = userInput.value;
//   if (!checkSign(userInputValue)) {
//     alert('양의 정수를 입력해주세요');
//     return;
//   }
//   if (!checkLength(userInputValue)) {
//     alert('숫자 3개를 입력해주세요 ex) 123');
//     return;
//   }
//   const USER_INPUT_ARRAY = convertToArray(userInputValue);
//   if (!checkZero(USER_INPUT_ARRAY)) {
//     alert('0은 입력할 수 없습니다');
//     return;
//   }
//   if (!checkOverlap(USER_INPUT_ARRAY)) {
//     alert('중복되지않는 숫자를 입력해주세요');
//     return;
//   }
//   userInputNumbers = USER_INPUT_ARRAY;
//   console.log(USER_INPUT_ARRAY);
//   console.log(computerInputNumbers);
//   const BALL_STRIKE_COUNT = checkNothing(userInputNumbers, computerInputNumbers);
//   console.log(BALL_STRIKE_COUNT);
//   if (BALL_STRIKE_COUNT === 0) {
//     showResult('낫싱');
//     return;
//   }
//   const STRIKE_COUNT = checkStrike(userInputNumbers, computerInputNumbers);
//   const BALL_COUNT = BALL_STRIKE_COUNT - STRIKE_COUNT;
//
//   if (STRIKE_COUNT === 0) {
//     showResult(`${BALL_COUNT}볼`);
//     return;
//   }
//   if (STRIKE_COUNT === 3) {
//     showResult('');
//     GAME_RESTART_ARTICLE.style.display = 'block';
//     return;
//   }
//   showResult(`${BALL_COUNT}볼 ${STRIKE_COUNT}스트라이크`);
// };

// restartBtn.onclick = () => {
//   computerInputNumbers = createRandomNumber();
//   userInput.value = '';
//   showResult('');
//   GAME_RESTART_ARTICLE.style.display = 'none';
// };

(() => new BaseballGame())();
