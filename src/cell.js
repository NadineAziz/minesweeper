class Cell {
  constructor(number, x, y) {
    this.shape = this.toShape(number);
    this.isOpen = false;
    this.x = x;
    this.y = y;
  }

  toShape(number) {
    return number === 0 ? 0 : 'X';
  }
  open = () => {
    this.isOpen = true;
  };
}
module.exports = {
  Cell,
};
