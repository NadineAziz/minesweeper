class Cell {
  constructor(number, x, y) {
    this.shape = this.toShape(number);
    this.isOpen = false;
    this.x = x;
    this.y = y;
  }

  toShape(number) {
    switch (number) {
      case 0:
        return 0;
      case 1:
        return 'X';
      case -1:
        return '_';
    }
  }

  setNumber = (number) => {
    if (this.isNumber()) this.shape = number;
  };
  
  open = () => {
    if (!this.isFlag()) {
      this.isOpen = true;
    }
  };

  isNumber = () => Number.isInteger(this.shape);

  isEmpty = () => this.shape === '_';

  isBomb = () => this.shape === 'X';
  flag = () => {
    this.shape = '*';
  };
  isFlag = () => this.shape === '*';
}
module.exports = {
  Cell,
};
