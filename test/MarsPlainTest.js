var expect = require('chai').expect;
var simple = require('simple-mock');

var MarsPlain = require('../js/MarsPlain');


describe('MarsPlain', () => {
  it('returns a matrix with the given width and height', () => {
    var plain = new MarsPlain(5, 5);

    expect(plain.width).to.equal(5);
    expect(plain.height).to.equal(5);
  });

  describe('.generateLines', () => {
    it('returns an array with a length equal to the given height', () => {
      expect(new MarsPlain(5, 5).generateLines().length).to.equal(5);
    });
  });

  describe('.generateRows', () => {
    it('returns an array with a length equal to the given width', () => {
      expect(new MarsPlain(5, 5).generateRows().length).to.equal(5);
    });
  });

  describe('.generateMatrix', () => {
    var marsPlain, matrix;

    beforeEach(() => {
      marsPlain = new MarsPlain(5, 5);

      simple.mock(marsPlain, 'generateLines').callOriginal();
      simple.mock(marsPlain, 'generateRows').callOriginal();

      matrix = marsPlain.generateMatrix();
    });

    it('invokes lines and rows generation methods once', () => {
      expect(marsPlain.generateLines.callCount).to.equal(1);
      expect(marsPlain.generateRows.callCount).to.equal(1);
    });

    it('returns an array of arrays', () => {
      expect(matrix.length).to.equal(5);
      expect(matrix[0].length).to.equal(5);
    });
  });
});
