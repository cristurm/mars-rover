class Direction {
	constructor(_name) {
		this.name = _name;
	}

	setUp(options) {
		this.left = options.left;
		this.right = options.right;
		this.moveForwards = options.moveForwards;
	}
}

setUpDirections = () => {
	let north = new Direction("North");
	let south = new Direction("South");
	let east  = new Direction("East");
	let west  = new Direction("West");

	north.setUp({
		left: west,
		right: east,
		moveForwards: (_line, _cell) => [_line + 1, _cell]
	});

	south.setUp({
		left: east,
		right: west,
		moveForwards: (_line, _cell) => [_line - 1, _cell]
	});

	east.setUp({
		left: north,
		right: south,
		moveForwards: (_line, _cell) => [_line, _cell + 1]
	});

	west.setUp({
		left: south,
		right: north,
		moveForwards: (_line, _cell) => [_line, _cell - 1]
	});

	return {north, south, east, west};
}

module.exports = setUpDirections;
