## Minesweeper Graduation

### Mine Sweeper - Game Rules:		
#### You are presented with a board of squares. Some squares contain mines (bombs), others don't. If you step on a square containing a bomb, you lose. If you manage to clear all the squares (without clicking on any bombs) you win. 
#### Clearing a square which doesn't have a bomb reveals the number of neighboring squares containing bombs. If you guess a square contains a bomb mark it with a flag. 
#### A squares "neighbors" are the squares adjacent above, below, left, right, and all 4 diagonals. Squares on the sides of the board or in a corner have fewer neighbors. The board does not wrap around the edges. If you clear a square with 0 neighboring bombs, all its neighbors will automatically open; recursively. 
#### The first square you open could be a bomb. 
#### You don't have to mark all the bombs to win; you just need to open all non-bomb squares.

### Marks:
- ⚠ TODO
- 🚧 IN PROGRESS
- ✅ DONE

### User stories and acceptance tests
#### User Story 1: ⚠
```
As a player,I want to see different outputs displayed so that I can play
```
##### User Acceptance Test 1: ⚠
```
Given a new board when displayed then I want to get an empty board
```
##### User Acceptance Test 2: ⚠
```
Given a board when a number is inserted then I want to get a board with that number shown
```
##### User Acceptance Test 3: ⚠
```
Given a board when I click on a bomb then I want to get a board with 'X' shown
```
##### User Acceptance Test 4: ⚠
```
Given a board when I click on an empty then I want to get a board with '_' shown
```