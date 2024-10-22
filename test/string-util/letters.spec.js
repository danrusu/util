const { expect } = require('chai');
const { getUniqueLetters } = require('../../src');

describe('letters utilities test', () => {
  it('should return unique letters', () => {
    const EXPECTED_LETTERS = [
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
      'g',
      'h',
      'i',
      'j',
      'k',
      'l',
      'm',
      'n',
      'o',
      'p',
      'q',
      'r',
      's',
      't',
      'u',
      'v',
      'w',
      'x',
      'y',
      'z',
    ];

    expect(
      getUniqueLetters('The quick brown fox jumps over the lazy dog'),
    ).to.deep.equal(EXPECTED_LETTERS);
  });
});
