class State {
  constructor(board) {
    this.board = board;
  }

  gameState() {
    const winOrContinue = this.isWin()
      ? 'Land is cleared! GOOD JOB!'
      : 'Continue';
    return this.isLose() ? 'BOOM! - Game Over' : winOrContinue;
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
