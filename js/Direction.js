var Direction = function () {
	return {
		init : function (_name, _left, _right) {
			this.name = _name;
			this.left = _left;
			this.right = _right;
		},

		turnLeft : function () {
			console.log("turn left", this.left);
			return this.left;
		},

		turnRight : function () {
			console.log("turn right", this.right);
			return this.right;
		}
	}
}