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
    it(`Given a board when I click on an empty then I want to get a board with '_' shown`, () => {
      const board = [
        [-1, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ];
      const bomb = new Cell(-1, 0, 0);
      bomb.open();
      expect(new Board(board).prettyPrint(bomb)).toBe('_');
    });
  });
  describe('User Story 2: As a player,I want to see different board elements so that I can see them after insertion', () => {
    it('Given a board when inserting an empty then I want to get an empty within the board', () => {
      const empty = new Cell(-1, 0, 0);
      expect(empty.isEmpty()).toBe(true);
    });
    it('Given a board when inserting a number then I want to get a number within the board', () => {
      const number = new Cell(0, 0, 0);
      expect(number.isNumber()).toBe(true);
    });
    it('Given a board when inserting a bomb then I want to get a bomb within the board', () => {
      const bomb = new Cell(1, 0, 2);
      expect(bomb.isBomb()).toBe(true);
    });
  });
});
