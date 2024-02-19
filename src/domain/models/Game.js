import generateRandomNumber from '../../utils/generateRandomNumber.js';
import VALID_CONSTANTS_CONFIG from '../../constants/configs/validConstantsConfig.js';

export default class Game {
  #scoreBoard;

  #attempt;

  #totalResult = [];

  constructor(scoreBoard, attempt) {
    this.#scoreBoard = scoreBoard;
    this.#attempt = attempt;
  }

  getGameResult() {
    for (let i = 0; i < this.#attempt; i += 1) {
      this.rotateRound();
      const currentRoundResult = new Map(this.#scoreBoard);
      this.#totalResult.push(Object.fromEntries(currentRoundResult));
    }
    return this.#totalResult;
  }

  rotateRound() {
    this.#scoreBoard.forEach((value, key) => {
      const randomNumber = generateRandomNumber();
      if (randomNumber >= VALID_CONSTANTS_CONFIG.CONDITIONS_FOR_MOVING_FORWARD) {
        this.#scoreBoard.set(key, this.#scoreBoard.get(key) + 1);
      }
    });
  }
}
