class MarsPlain {
	constructor (width, height) {
		this.width = width;
		this.height = height;
	}

	generateLines(rows) {
		return new Array(this.height).fill(rows);
	}

	generateRows() {
		return new Array(this.width).fill('row');
	}

	generateMatrix() {
		return this.generateLines(this.generateRows());
	}

	render() {
		var table = document.createElement('table');

		for (var height = this.height; height--;) {
			var row = table.insertRow();

			for (var width = this.width; width--;) {
				var cell = row.insertCell();
			}
		}

		return table;
	}
};

module.exports = MarsPlain;
