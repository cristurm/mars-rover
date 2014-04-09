var App = function () {
	return {
		init : function (_posX, _posY, _direction) {
			console.log("I've been a mars rover for many's the year.");

			var north = new Direction();
			var south = new Direction();
			var east  = new Direction();
			var west  = new Direction();

			north.init("North", west, east);
			south.init("South", east, west);
			east.init("East", north, south);
			west.init("West", south, north);

			this.plain = new MarsPlain();
			this.rover = new Rover();

			this.plain.init(5, 5);
			this.rover.init(0, 0, north);

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
					that.rover.receiveInstrictions(coordinatesArray);
				} else {
					console.log("no can do.")
				}
			});
		}
	}
}

var APP = new App();
APP.init();