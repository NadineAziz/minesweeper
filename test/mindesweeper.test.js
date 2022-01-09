const { Board } = require('../src/board.js');

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
        [1, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ];
      expect(new Board(board).prettyPrint(1)).toBe(0);
    });
  });
});
