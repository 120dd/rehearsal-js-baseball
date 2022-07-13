import { createRandomNumber } from './computeNumbers.js';
import { checkInputs } from './inputCheck.js';
import { showResult } from './utils.js';
import { checkNothing, checkStrike } from './compareNumber.js';

export default class BaseballGame {
  constructor() {
    this.submitButton = document.querySelector('#submit');
    this.userInput = document.querySelector('#user-input');
    this.result = document.querySelector('#result');
    this.restartButton = document.querySelector('#game-restart-button');
    this.restartArticle = document.querySelector('#game-restart-article');
    this.init();
  }

  init() {
    this.result.innerHTML = '';
    this.pressSubmitButton();
    this.computerInputNumbers = this.getRandomNumber();
    this.restartGame();
  }

  getRandomNumber() {
    const randomNum = createRandomNumber();
    console.log(randomNum);
    return randomNum;
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
      this.restartArticle.style.display = 'block';
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
      showResult(RESULT);
    };
  }

  showResult(data) {
    this.result.innerHTML = data;
  }

  restartGame() {
    this.restartButton.onclick = () => {
      this.result.innerHTML = '';
      this.restartArticle.style.display = 'none';
      this.computerInputNumbers = this.getRandomNumber();
    };
  }
}

(() => new BaseballGame())();
