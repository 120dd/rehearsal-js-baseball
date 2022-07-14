const assert = require('assert');
const { play } = require('./play');

describe('play.js', () => {
  describe('#play(computerInputNumbers, userInputNumbers)', () => {
    it('should return "1볼 1스트라이크" when answer is 425 and input is 456', () => {
      // TODO
      const res = play([4, 2, 5], [4, 5, 6]);

      assert.ok(res, '1볼 1스트라이크');
    });
  });
});
