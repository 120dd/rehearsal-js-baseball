const assert = require('assert');
const { play } = require('./play');
const { getRandomNumber } = require('./computeNumbers');

describe('play.js', () => {
  describe('#play(computerInputNumbers, userInputNumbers)', () => {
    it('should return "1볼 1스트라이크" when answer is 425 and input is 456', () => {
      const res = play([4, 2, 5], [4, 5, 6]);
      assert.ok(res, '1볼 1스트라이크');
    });

    it('should throw error when answer is string array', () => {
      const testFn = () => play(['4', '2', '5'], [4, 5, 6]);
      assert.throws(testFn);
    });
  });
});
