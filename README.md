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
#### User Story 2: ⚠
```
As a player,I want to see different board elements so that I can see them after insertion
```
##### User Acceptance Test 1: ⚠
```
Given a board when inserting an empty then I want to get an empty within the board
```
##### User Acceptance Test 2: ⚠
```
Given a board when inserting a number then I want to get a number within the board
```
##### User Acceptance Test 3: ⚠
```
Given a board when inserting a bomb then I want to get a bomb within the board
```
##### User Acceptance Test 4: ⚠
```
Given a board when inserting an empty then I want to get a an empty within the board
```
##### User Acceptance Test 5: ⚠
```
Given a board when the cell is closed then I want to check that the cell is not flagged
```
#### User Story 3: ⚠
```
As a player,I want to check the if the cell is opened or closed so that I can know if I can insert into it
```
##### User Acceptance Test 1: ⚠
```
Given a board when I try inserting to an opened then the cell doesn't change its value
```
##### User Acceptance Test 2: ⚠
```
Given a board when I try inserting to an opened then the cell doesn't change its value unless it's flagged
```
#### User Story 4: ⚠
```
As a game board, I want to get the shape that the user has inserted so that I can determine its shape
```
##### User Acceptance Test 1: ⚠
```
Given a board when a user inserts a bomb then it is a -1
```
##### User Acceptance Test 2: ⚠
```
Given a board when user inserts a number then it is a 0
```
##### User Acceptance Test 3: ⚠
```
Given a board when user inserts an empty then it is a -1
```