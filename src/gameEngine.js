class GameEngine {
  constructor(board) {
    this.board = board;
  }

  getNeighbors(x, y) {
    const neighborsArray = [];
    for (let i = -1; i < 2; i++) {
      for (let j = -1; j < 2; j++) {
        const isSameCell = i === 0 && j === 0;
        if (!isSameCell && this.isInsideBoard(x + i, y + j)) {
          neighborsArray.push(this.board[x + i][y + j]);
        }
      }
    }

    return neighborsArray;
  }

  getNeighborsBombCount(cell) {
    const neighbors = this.getNeighbors(cell.x, cell.y);
    let count = 0;
    for (let i in neighbors) {
      if (neighbors[i].isBomb()) count++;
    }

    return count;
  }

  isInsideBoard(x, y) {
    const boardSize = this.board.length;
    return x >= 0 && x < boardSize && y >= 0 && y < boardSize;
  }
  areAllNotNeighborsBombs(neighborsArray) {
    return neighborsArray.every((neighbor) => !neighbor.isBomb());
  }
}

module.exports = { GameEngine };
