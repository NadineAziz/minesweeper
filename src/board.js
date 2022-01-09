const { Cell } = require('./cell.js');

class Board {
  constructor(board) {
    this.board = this.cellBoard(board);
  }

  getBoard() {
    return this.board;
  }

  draw() {
    const newBoard = this.board.map((x) =>
      x.map((cell) => this.prettyPrint(cell))
    );
    return this.drawBoardBody(newBoard);
  }

  drawBoardBody(newBoard) {
    let printedBoard = '+-+-+-+-+-+-+\n';
    for (let i in newBoard) {
      let str = '| ';
      for (let j in newBoard) {
        str += `${newBoard[i][j]} | `;
      }
      printedBoard += `${str}\n`;
      printedBoard += '+-+-+-+-+-+-+\n';
    }
    return printedBoard;
  }

  prettyPrint(cell) {
    return cell.isOpen ? cell.shape : ' ';
  }

  // Matrix with type cells
  cellBoard(board) {
    const boardGame = board;

    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        boardGame[i][j] = new Cell(board[i][j], i, j);
      }
    }

    return boardGame;
  }
}
module.exports = { Board };
