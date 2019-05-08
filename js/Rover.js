class Rover {
	constructor(_posLine, _posCell, _direction, _angle) {
		this.posLine = parseInt(_posLine, 10);
		this.posCell = parseInt(_posCell, 10);
		this.direction = _direction;
		this.angle = _angle;
		this.roverElement = document.getElementById("mars-rover");
		this.coordinatesMap = [["L", "R", "M"], [this.turnLeft.bind(this), this.turnRight.bind(this), this.move.bind(this)]];

		this.setTopAndLeft();
		this.setRotation();
	}

	move() {
		var newPosition = this.direction.moveForwards(this.posLine, this.posCell);

		if (newPosition[0] >= 0 && newPosition[0] < APP.plain.height &&
			newPosition[1] >= 0 && newPosition[1] < APP.plain.width) {

			this.posLine = newPosition[0];
			this.posCell = newPosition[1];

			this.setTopAndLeft();
		} else {
			console.log("Sir, I can't go " + this.direction.name + " any further.");
		}
	}

	turnLeft() {
		this.direction = this.direction.left;
		this.angle -= 90;
		this.setRotation();
	}

	turnRight() {
		this.direction = this.direction.right;
		this.angle += 90;
		this.setRotation();
	}

	setTopAndLeft() {
		console.log("Line: ", this.posLine, "Cell: ", this.posCell);

		// console.log(APP.plain.matrix[this.posLine][this.posCell]);
		// console.log(APP.plain.matrix[this.posLine][this.posCell].getBoundingClientRect());
		//
		// this.roverElement.style.top = APP.plain.matrix[this.posLine][this.posCell].getBoundingClientRect().top;
		// this.roverElement.style.left = APP.plain.matrix[this.posLine][this.posCell].getBoundingClientRect().left;
	}

	setRotation() {
		console.log("Direction: ", this.direction.name);

		this.roverElement.style.transform = "rotate(" + this.angle + "deg)";
	}

	receiveInstructions(_coordinates, _callback) {
		const that = this;
		let index = 0, interval, mapPosition;

		interval = setInterval(() => {
			mapPosition = that.coordinatesMap[0].indexOf(_coordinates[index].toUpperCase());

			if (mapPosition >= 0) {
				that.coordinatesMap[1][mapPosition]();
			} else {
				console.log("Sir, I don't know this instruction: ", _coordinates[index]);
			}

			index += 1;

			if (index >= _coordinates.length) {
				clearInterval(interval);
				_callback();
			}
		}, 700);
	}
}

module.exports = Rover;
