class Cell {
  constructor(number, x, y) {
    this.shape = this.toShape(number);
    this.isOpen = false;
    this.x = x;
    this.y = y;
  }

  toShape(number) {
    switch (number){
		case 0:
			return 0;
		case 1:
			return 'X';
	}
  }
  open = () => {
    this.isOpen = true;
  };
}
module.exports = {
  Cell,
};
