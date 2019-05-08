var expect = require('chai').expect;
var simple = require('simple-mock');

var MarsPlain = require('../js/MarsPlain');


describe('MarsPlain', () => {
  describe('.constructor', () => {
    var plain;

    beforeEach(() => {
      plain = new MarsPlain(5, 5);
    });

    it('returns a matrix with the given width and height', () => {
      expect(plain.width).to.equal(5);
      expect(plain.height).to.equal(5);
    });

    it('returns an array of arrays', () => {
      expect(plain.matrix.length).to.equal(5);
      expect(plain.matrix[0].length).to.equal(5);
    });
  });

  describe('.generateLines', () => {
    it('returns an array with a length equal to the given height', () => {
      expect(new MarsPlain(5, 5).generateLines().length).to.equal(5);
    });
  });

  describe('.generateCells', () => {
    it('returns an array with a length equal to the given width', () => {
      expect(new MarsPlain(5, 5).generateCells().length).to.equal(5);
    });
  });

  describe('.generateMatrix', () => {

  });
});
