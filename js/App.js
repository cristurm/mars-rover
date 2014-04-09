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
		}
	}
}

var APP = new App();
APP.init();