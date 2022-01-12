class GameEngine {
  constructor(board) {
    this.board = board;
  }

  getNeighbors(x, y) {
    const neighborsArray = [];
    for (let i = -1; i < 2; i++) {
      for (let j = -1; j < 2; j++) {
        this.neighborsCondition(x, i, y, j, neighborsArray);
      }
    }

    return neighborsArray;
  }

  neighborsCondition(x, i, y, j, array) {
    const isSameCell = i === 0 && j === 0;
    if (!isSameCell && this.isInsideBoard(x + i, y + j)) {
      array.push(this.board[x + i][y + j]);
    }
  }
  /*
   * If cell is surrounded by bombs,will open it but will break the recursion
   * If cell is not surrounded by bombs, keep opening neighbors of the cell
   */
  clickCell(cell) {
    if (!cell.isOpen) {
      cell.setNumber(this.getNeighborsBombCount(cell));
      cell.open();
      const neighbors = this.getNeighbors(cell.x, cell.y);
      const areAllNotBombs = this.areAllNotNeighborsBombs(neighbors);
      if (areAllNotBombs) {
        for (const i in neighbors) {
          this.clickCell(neighbors[i]);
        }
      }
    }
  }

  getNeighborsBombCount(cell) {
    const neighbors = this.getNeighbors(cell.x, cell.y);
    let count = 0;
    for (let i in neighbors) {
      if (neighbors[i].isBomb()) count++;
    }

    return count;
  }

  areAllNotNeighborsBombs(neighborsArray) {
    return neighborsArray.every((neighbor) => !neighbor.isBomb());
  }
  isInsideBoard(x, y) {
    const boardSize = this.board.length;
    return x >= 0 && x < boardSize && y >= 0 && y < boardSize;
  }
}

module.exports = { GameEngine };
