const { Board } = require('./board.js');
const { GameEngine } = require('./gameEngine.js');
const { State } = require('./state.js');

const board = [
  [-1, 0, 1],
  [1, 0, 0],
  [-1, 0, 1],
];

// // For a winning statse:
// const board = [
//   [-1, 0, 0],
//   [-1, 0, 0],
//   [-1, 0, 0],
// ];
const gameBoard = new Board(board);
const gameEngine = new GameEngine(gameBoard.getBoard());

let cell;
function wait(timeout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}

async function game() {
  console.log(gameBoard.draw());
  while (new State(gameBoard.getBoard()).gameState() === 'Continue') {
    const i = Math.floor(Math.random() * 3);
    const j = Math.floor(Math.random() * 3);

    console.log('i: ', i, ' j: ', j);

    cell = gameBoard.getBoard()[i][j];
    gameEngine.clickCell(cell);
    console.log(gameBoard.draw());
    console.log(new State(gameBoard.getBoard()).gameState());

    await wait(2000);
  }
}
game();
