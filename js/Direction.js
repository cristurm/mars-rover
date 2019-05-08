var Direction = function () {
	return {
		init : function (_name, _left, _right, _moveForwardsMethod) {
			this.name = _name;
			this.left = _left;
			this.right = _right;
			this.moveForwards = _moveForwardsMethod;
		}
	}
}
