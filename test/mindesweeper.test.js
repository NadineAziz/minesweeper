const { Board } = require('../src/board.js');
const { Cell } = require('../src/cell.js');
describe('MineSweeper', () => {
  describe('User Story 1: As a player,I want to see different outputs displayed so that I can play', () => {
    it('Given a new board when displayed then I want to get an empty board', () => {
      const board = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ];
      const drawBoard = new Board(board).draw();
      expect(drawBoard).toBe(
        '+-+-+-+-+-+-+\n|   |   |   | \n+-+-+-+-+-+-+\n|   |   |   | \n+-+-+-+-+-+-+\n|   |   |   | \n+-+-+-+-+-+-+\n'
      );
    });
    it('Given a board when a number is inserted then I want to get a board with that number shown', () => {
      const board = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ];
      const number = new Cell(0, 0, 0);
      number.open();
      expect(new Board(board).prettyPrint(number)).toBe(0);
    });
    it(`Given a board when I click on a bomb then I want to get a board with 'X' shown`, () => {
      const board = [
        [1, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ];
      const bomb = new Cell(1, 0, 0);
      bomb.open();
      expect(new Board(board).prettyPrint(bomb)).toBe('X');
    });
  });
});
