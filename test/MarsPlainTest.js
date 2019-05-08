var MarsPlain = require('../js/MarsPlain');
var expect = require('chai').expect;

describe('MarsPlain', () => {
  var plain;

  beforeEach(() => {
    plain = new MarsPlain(5, 5);
  });

  it('returns a matrix with the given width and height', () => {
    expect(plain.width).to.equal(5);
    expect(plain.height).to.equal(5);
  });

  describe('.generateLines', () => {
    it('returns a number of tr equal to the given height', () => {
      expect(plain.generateLines().length).to.equal(5);
      expect(plain.generateLines()[0]).to.be.an.instanceof(HTMLTableRowElement);
    });
  });
});
