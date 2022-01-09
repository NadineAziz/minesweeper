class Board {
  constructor(board) {
    this.board = board;
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
}
module.exports = { Board };
