class State {
  constructor(board) {
    this.board = board;
  }

  gameState() {
    return this.isLose()
      ? 'BOOM! - Game Over'
      : this.isWin()
      ? 'Land is cleared! GOOD JOB!'
      : 'Continue';
  }

  isLose() {
    const flattenBoard = this.board.flat();
    return flattenBoard.some((x) => x.isBomb() && x.isOpen);
  }

  isWin() {
    return !this.board.flat().some((x) => x.isNumber() && !x.isOpen);
  }
}

module.exports = {
  State,
};
