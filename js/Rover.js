var Rover = function () {
	return {
		init : function (_posX, _posY, _direction) {
			this.posX = parseInt(_posX, 10);
			this.posY = parseInt(_posY, 10);
			this.direction = _direction;

			this.moveX(this.posX);
			this.moveY(this.posY);
		},

		moveX : function (_x) {
			this.posX = _x;

			console.log(APP.plain.marsPlainMatrix[this.posX][this.posY]);
		},

		moveY : function (_y) {
			this.posY = _y;
		}
	}
}