const assert = require('assert');
const index = require('./index');

describe('index.js', () => {
  describe('#play(computerInputNumbers, userInputNumbers)', () => {
    it('should return "1볼 1스트라이크" when answer is 425 and input is 456', () => {
      // TODO
      const res = index.play([4, 2, 5], [4, 5, 6]);

      assert.ok(res, '1볼 1스트라이크');
    });
  });
});
