const expect = require('chai').expect;
const setUpDirections = require('../js/Direction');

describe('Direction', () => {
  describe('.setUpDirections', () => {
    const directions = setUpDirections();

    it('generates the four primary cardinal directions', () => {

      expect(directions.north.name).to.equal("North");
      expect(directions.south.name).to.equal("South");
      expect(directions.east.name).to.equal("East");
      expect(directions.west.name).to.equal("West");
    });

    describe('.moveForwards methods', () => {
      it('north icreases the line count', () => {
        expect(directions.north.moveForwards(1, 1)).to.eql([2, 1]);
      });

      it('south decreases the line count', () => {
        expect(directions.south.moveForwards(1, 1)).to.eql([0, 1]);
      });

      it('east increases the cell count', () => {
        expect(directions.east.moveForwards(1, 1)).to.eql([1, 2]);
      });

      it('west decreases the cell count', () => {
        expect(directions.west.moveForwards(1, 1)).to.eql([1, 0]);
      });
    });
  });
});
