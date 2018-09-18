const gameFuncs = require('./gameFunctions.js');

const dummyItem = {
  level: 0,
  durability: 100,
  failCount: 0,
}

describe('gameFunctions', () => {

  describe('enhance function', () => {
    it('should increase level by 1 if under level 15', () => {
      // arrange
      const item = dummyItem;

      // act
      const actual = gameFuncs.enhance(item);

      // assert
      expect(actual.level).toBe(1);
      expect(gameFuncs.enhance(actual).level).toBe(2);
    });

    it('should increase by roman numberals when at or above level 15', () => {
      const item = dummyItem;
      item.level = 15;
      const actual = gameFuncs.enhance(item);
      const funcActual = gameFuncs.enhance(actual);
      console.log(funcActual);
      expect(actual.level).toBe('I');
      // expect(gameFuncs.enhance(gameFuncs.enhance(actual)).level).toBe('II');
      expect(gameFuncs.enhance(funcActual).level).toBe('III');
    });
  });

  describe('fail function', () => {
    it('should decrease durability by 5 and increase failCount by 1 on failure under level 15', () => {
      // arrange
      const item = dummyItem;
      // act
      const actual = gameFuncs.fail(item);
      // assert
      expect(actual.durability).toBe(95);
      expect(actual.failCount).toBe(1);
    });

    it('should increase failCount as many levels as is above 15, and decrease durability by 5*(levels above 15) when greater than level 15', () => {
      const item = dummyItem;
      item.level = 'III';
      const actual = gameFuncs.fail(item);
      expect(actual.durability).toBe(80);
      expect(actual.failCount).toBe(4)
    })
  });

  describe('repair function', () => {
    it('should increase durability by 10pts on repair', () => {
      const item = dummyItem;
      item.durability = 90;
      const actual = gameFuncs.repair(item);
      expect(actual.durability).toBe(100);
    });

    it('should increase any durability score above 90 to full power', () => {
      const item = dummyItem;
      item.durability = 95;
      const actual = gameFuncs.repair(item);
      expect(actual.durability).toBe(100)
    })
  })
});
