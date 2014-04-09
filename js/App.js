var App = function () {
	return {
		init : function (_posX, _posY, _direction) {
			console.log("I've been a mars rover for many's the year.");

			var north = new Direction();
			var south = new Direction();
			var east  = new Direction();
			var west  = new Direction();

			north.init("North", west, east, function (_line, _cell) { return [_line + 1, _cell] });
			south.init("South", east, west, function (_line, _cell) { return [_line - 1, _cell] });
			east.init("East", north, south, function (_line, _cell) { return [_line, _cell + 1] });
			west.init("West", south, north, function (_line, _cell) { return [_line, _cell - 1] });

			this.plain = new MarsPlain();
			this.rover = new Rover();

			this.plain.init(5, 5);
			this.rover.init(0, 0, north, 0);

			this.bindEvents();
		},

		bindEvents : function () {
			var that = this,
				coordinatesForm = document.getElementById("rover-coordinates"),
				coordinatesInput = document.getElementById("coordinates"),
				coordinatesArray = [];

			coordinatesForm.addEventListener("submit", function (_event) {
				_event.preventDefault();

				coordinatesArray = coordinatesInput.value.trim().replace(/\s/g, "");
				coordinatesInput.value = coordinatesArray;
				coordinatesArray = coordinatesArray.split("");

				if (coordinatesArray.length > 0) {
					that.rover.receiveInstructions(coordinatesArray);
				}
			});
		}
	}
}

var APP = new App();
APP.init();