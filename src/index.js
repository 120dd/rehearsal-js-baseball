import { createRandomNumber } from './computeNumbers.js';
import { checkInputs } from './inputCheck.js';
import { showResult } from './utils.js';
import { play } from './play.js';

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

  pressSubmitButton() {
    this.submitButton.onclick = (e) => {
      e.preventDefault();
      const userInputValue = this.userInput.value;
      if (!checkInputs(userInputValue)) {
        alert('값을 확인해주세요!');
        return;
      }
      const RESULT = play(userInputValue, this.computerInputNumbers);
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
