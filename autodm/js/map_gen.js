class Map {

	constructor(x, y, chunk_size, num_dungeons, num_towns) {
		this.size_x = x;
		this.size_y = y;
		this.size_chunks = chunk_size;
		this.num_dungeons = num_dungeons;
		this.num_towns = num_towns;

		// Init Map Cells
		let tmpboard = [];
		for(let i = 0; i < y; i++) {
			let tmpboardn = [];
			for(let n = 0; n < x; n++) {
				tmpboardn.push(new Cell(this.rdmTerrain(), false, false));
			}
			tmpboard.push(tmpboardn);
		}

		// Create chunks of terrain from cells
		tmpboard = this.createChunks(tmpboard);

		// Init Dungeons
		for(let i = 0; i < num_dungeons; i++) {
			let rdm_x = rdmInt(0, x - 1);
			let rdm_y = rdmInt(0, y - 1);
			if(tmpboard[rdm_y][rdm_x].terrain == 'water') { i--; } // this prevents dungeons from being generated in water
			else { tmpboard[rdm_y][rdm_x].dungeon = true; }

			// DEBUG ONLY
			//if(tmpboard[rdm_y][rdm_x].terrain != 0) console.log('DUNGEON @ '+rdm_x+', '+rdm_y);
		}

		// Init Towns
		for(let i = 0; i < num_towns; i++) {
			let rdm_x = rdmInt(0, x - 1);
			let rdm_y = rdmInt(0, y - 1);
			if(tmpboard[rdm_y][rdm_x].terrain == 'water') { i--; } // doesn't allow towns in water
			else { tmpboard[rdm_y][rdm_x].town = true; }
		}

		this.board = tmpboard;

	}

	rdmTerrain() {
		let terrain = rdmInt(0, 8);
		if(terrain == 0){ return 'water'; }
		else if(terrain > 0 && terrain < 4){ return 'forest'; }
		else if(terrain == 4){ return 'dark_forest'; }
		else if(terrain == 5){ return 'mountain'; }
		else if(terrain > 5){ return 'plains'; }
	}

	createChunks(board) {
		let tmpboard = board;
		for(let i = 0; i < tmpboard.length; i++) {
			for(let n = 0; n < tmpboard[i].length; n++) {
				let polarity_x = rdmInt(0, 1);
				if(polarity_x == 0) { polarity_x = -1; }
				let polarity_y = rdmInt(0, 1);
				if(polarity_y == 0) { polarity_y = -1; }
				let rdm = rdmInt(0, 8);
				if(rdm == 6) {
					if((n + polarity_x) < tmpboard[i].length && (n + polarity_x) >= 0) {
						tmpboard[i][n + polarity_x].terrain = tmpboard[i][n].terrain;
					}
				}
				else if(rdm == 7) {
					if((i + polarity_y) < tmpboard.length && (i + polarity_y) >= 0) {
						tmpboard[i + polarity_y][n].terrain = tmpboard[i][n].terrain;
					}
				}
				else if(rdm == 8) {
					if((n + polarity_x) < tmpboard[i].length && (n + polarity_x) >= 0) {
						tmpboard[i][n + polarity_x].terrain = tmpboard[i][n].terrain;
					}
					if((i + polarity_y) < tmpboard.length && (i + polarity_y) >= 0) {
						tmpboard[i + polarity_y][n].terrain = tmpboard[i][n].terrain;
					}
				}
			}
		}
		return tmpboard;
	}

}

class Cell {
	constructor(terrain_type, contains_dungeon, part_of_town) {
		this.terrain = terrain_type;
		this.dungeon = contains_dungeon;
		this.town = part_of_town;
	}
}

function rdmInt(min, max) {
	return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + min;
}
