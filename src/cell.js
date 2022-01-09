class Cell {
  constructor(number, x, y) {
    this.shape = this.toShape(number);
    this.isOpen = false;
    this.x = x;
    this.y = y;
  }

  toShape(number) {
    const numberOrBomb = number === 0 ? 0 : 'X';
    return number === -1 ? '_' : numberOrBomb;
  }
  open = () => {
    this.isOpen = true;
  };
}
module.exports = {
  Cell,
};
