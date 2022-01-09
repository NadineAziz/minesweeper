const { Board } = require('../src/board.js');
const { Cell } = require('../src/cell.js');
const { GameEngine } = require('../src/gameEngine.js');
const { State } = require('../src/state.js');

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
    it('Given a board when inserting a flag then I want to get a flag within the board', () => {
      const flagged = new Cell(-1, 1, 2);
      flagged.flag();
      expect(flagged.isFlag()).toBe(true);
    });
    it('Given a board when the cell is closed then I want to check that the cell is not flagged', () => {
      const notFlagged = new Cell(-1, 2, 2);
      expect(notFlagged.isFlag()).toBe(false);
    });
  });
  describe('User Story 3: As a player,I want to check the if the cell is opened or closed so that I can know if I can insert into it', () => {
    it("Given a board when I try inserting to an opened then the cell doesn't change its value", () => {
      const open = new Cell(0, 0, 0);
      open.open();
      expect(open.isOpen).toBe(true);
    });
    it("Given a board when I try inserting to an opened then the cell doesn't change its value unless it's flagged", () => {
      const open = new Cell(-1, 1, 2);
      open.flag();
      open.open();
      expect(open.isOpen).toBe(false);
    });
  });
  describe('User Story 4: As a game board, I want to get the shape that the user has inserted so that I can determine its shape', () => {
    it('Given a board when a user inserts a bomb then it is a 1', () => {
      const board = [
        [-1, -1, -1],
        [1, 0, 0],
        [1, 0, 0],
      ];
      const newBoard = new Board(board).getBoard();
      expect(newBoard[1][0].isBomb()).toBe(true);
    });
    it('Given a board when user inserts a number then it is a 0', () => {
      const board = [
        [-1, -1, -1],
        [1, 0, 0],
        [1, 0, 0],
      ];
      const newBoard = new Board(board).getBoard();
      expect(newBoard[1][0].isBomb()).toBe(true);
    });
    it('Given a board when user inserts an empty then it is a -1', () => {
      const board = [
        [-1, -1, -1],
        [1, 0, 0],
        [1, 0, 0],
      ];
      const newBoard = new Board(board).getBoard();
      expect(newBoard[0][0].isEmpty()).toBe(true);
    });
  });

  describe('User Story 5: As a game, I want to checkout the neighbors of the cell so that I can run the game engine.', () => {
    const mockMath = Object.create(global.Math);
    mockMath.random = () => 1;
    global.Math = mockMath;

    it('Given a cell in the board when I want to check its neighbors then it should return the list of neighbors', () => {
      const board = [
        [-1, -1, -1],
        [1, 0, 0],
        [1, 0, 0],
      ];
      const newBoard = new Board(board).getBoard();
      expect(
        new GameEngine(newBoard).getNeighbors(1, 1).map((x) => x.shape)
      ).toEqual(['_', '_', '_', 'X', 0, 'X', 0, 0]);
    });

    it('Given a cell in the board when I want to check if its neighbors are not bombs then it should pass', () => {
      const board = [
        [-1, -1, -1],
        [0, 5, 0],
        [0, 0, 0],
      ];
      const newBoard = new Board(board).getBoard();
      const testBoard = new GameEngine(newBoard).getNeighbors(1, 1);
      expect(new GameEngine(newBoard).areAllNotNeighborsBombs(testBoard)).toBe(
        true
      );
    });
    it('Given a cell in the board when I want to check if its inside the board then it should pass', () => {
      const board = [
        [-1, -1, -1],
        [1, 0, 0],
        [1, 0, 0],
      ];
      const newBoard = new Board(board).getBoard();
      expect(new GameEngine(newBoard).isInsideBoard(1, 0)).toBe(true);
      expect(new GameEngine(newBoard).isInsideBoard(3, 3)).toBe(false);
    });
  });
  describe('User Story 6: As a player I want to get the state of the game so that I know if I lost or won', () => {
    it('Given the board when I click on a bomb then I lose', () => {
      const board = [
        [0, 0, 0],
        [1, 0, 0],
        [0, 0, 0],
      ];
      const newBoard = new Board(board).getBoard();
      const gameEngine = new GameEngine(newBoard);
      for (const i in newBoard) {
        for (const j in newBoard) {
          gameEngine.clickCell(newBoard[i][j]);
        }
      }
      expect(new State(newBoard).gameState()).toEqual('BOOM! - Game Over');
      expect(newBoard[1][0].isBomb()).toEqual(true);
    });
    it('Given the board when I dont click on any bomb then I win', () => {
      const board = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ];
      const newBoard = new Board(board).getBoard();
      const gameEngine = new GameEngine(newBoard);
      for (const i in newBoard) {
        for (const j in newBoard) {
          gameEngine.clickCell(newBoard[i][j]);
        }
      }
      expect(new State(newBoard).gameState()).toEqual(
        'Land is cleared! GOOD JOB!'
      );
    });
    it('Given the board when the game is still ongoing then it is state continue', () => {
      const board = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ];
      const newBoard = new Board(board).getBoard();
      expect(new State(newBoard).gameState()).toEqual('Continue');
    });
  });
});
