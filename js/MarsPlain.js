var MarsPlain = function () {
	return {
		init : function (_width, _height) {
			this.marsPlainElement = document.getElementById("mars-plain");
			this.width = parseInt(_width, 10);
			this.height = parseInt(_height, 10);
			this.marsPlainMatrix = [];

			for (var counter = 0; counter < _width; counter += 1) {
				this.marsPlainMatrix[counter] = new Array(_height);
			}

			this.renderMatrix();
		},

		renderMatrix : function () {
			var lines = document.createElement("ol");

			lines.id = "lines";

			for (var lineCounter = 0; lineCounter < this.height; lineCounter += 1) {
				var liLine = document.createElement("li"),
					columns = document.createElement("ol");

				columns.className = "columns";
				liLine.id = "line-" + lineCounter;
				liLine.className = "line";

				for (var columnCounter = 0; columnCounter < this.width; columnCounter += 1) {
					var liCell = document.createElement("li");

					liCell.id = "cell-" + columnCounter;
					liCell.className = "column";

					columns.appendChild(liCell);
					this.marsPlainMatrix[lineCounter][columnCounter] = liCell;
				}

				liLine.insertBefore(columns, liLine.firstChild);
				lines.insertBefore(liLine, lines.firstChild)
			}

			this.marsPlainElement.appendChild(lines);
		}
	}
}
