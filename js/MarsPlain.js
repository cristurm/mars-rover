class MarsPlain {
	constructor (height, width) {
		this.height = height;
		this.width = width;

		this.matrix = this.generateLines(this.generateCells());
	}

	generateLines(cells) {
		return new Array(this.height).fill(cells);
	}

	generateCells() {
		return new Array(this.width).fill('empty cell');
	}

	// render() {
	// 	var table = document.createElement('table');
	// 	var plain = this;
	//
	// 	this.matrix.forEach(function(line, index) {
	// 		var newRow = table.insertRow();
	//
	// 		line.forEach(function(cell, index2) {
	// 			var newCell = newRow.insertCell();
	//
	// 			plain.matrix[index][index2] = newCell;
	// 		});
	// 	});
	//
	// 	console.log(this.matrix);
	//
	// 	return table;
	// }
};

module.exports = MarsPlain;
