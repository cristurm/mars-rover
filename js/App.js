var App = function () {
	return {
		init: function (_posX, _posY, _direction) {
			console.log("I've been a mars rover for many's the year.");

			var {north, south, east, west} = setUpDirections();

			this.plain = new MarsPlain(5, 5);
			this.render();

			this.rover = new Rover();
			this.rover.init(0, 0, north, 0);

			this.bindEvents();
		},

		bindEvents: function () {
			var that = this,
				coordinatesForm = document.getElementById("rover-coordinates"),
				coordinatesInput = document.getElementById("coordinates"),
				coordinatesSubmit = document.getElementById("coordinates-submit"),
				coordinatesArray = [],
				coordinatesCallback = function () {
					coordinatesForm.setAttribute("data-state", "active");
					coordinatesSubmit.disabled = false;
				};

			coordinatesForm.addEventListener("submit", function (_event) {
				_event.preventDefault();

				if (this.getAttribute("data-state") === "active") {
					coordinatesForm.setAttribute("data-state", "disabled");
					coordinatesSubmit.disabled = true;

					coordinatesArray = coordinatesInput.value.trim().replace(/\s/g, "");
					coordinatesInput.value = coordinatesArray;
					coordinatesArray = coordinatesArray.split("");

					if (coordinatesArray.length > 0) {
						that.rover.receiveInstructions(coordinatesArray, coordinatesCallback);
					} else {
						coordinatesCallback();
					}
				}
			});
		},

		render: function () {
			// document.getElementById("mars-plain").appendChild(this.plain.render());
		}
	}
}

var APP = new App();
APP.init();
