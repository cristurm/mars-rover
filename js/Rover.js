var Rover = function () {
	return {
		init : function (_posLine, _posCell, _direction) {
			this.roverElement = document.getElementById("mars-rover");
			this.posLine = parseInt(_posLine, 10);
			this.posCell = parseInt(_posCell, 10);
			this.direction = _direction;

			this.coordinatesMap = [["L", "R", "M"], [this.turnLeft, this.turnRight, this.move]];

			this.move(this.posLine, this.posCell);
		},

		move : function () {
			
			
			console.log("move", this.posLine, this.posCell, this.direction);

			this.posLine = _line;
			this.roverElement.style.top = APP.plain.marsPlainMatrix[_line][this.posCell].offsetTop;

			this.posCell = _cell;
			this.roverElement.style.left = APP.plain.marsPlainMatrix[this.posLine][_cell].offsetLeft;
		},

		turnLeft : function () {
			console.log("turn left", this.posLine, this.posCell, this.direction);
			this.direction = this.direction.left;
		},

		turnRight : function () {
			console.log("turn right", this.posLine, this.posCell, this.direction);
			this.direction = this.direction.right;
		},

		receiveInstrictions : function (_coordinates) {
			var index = 0;

			for (index = 0; index < _coordinates.length; index += 1) {
				var mapPosition = this.coordinatesMap[0].indexOf(_coordinates[index].toUpperCase());

				if (mapPosition >= 0) {
					this.coordinatesMap[1][mapPosition].call(this);
				} else {
					console.log("Sir, I don't know this instruction: ", _coordinates[index]);
				}
			}
		}
	}
}