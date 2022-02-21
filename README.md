# Wordle Solver

https://brendon-k.github.io/wordle-solver/

This application will suggest words that you should guess in the game Wordle, lets you input the answer you got, and then guess again from the list of valid words based on the clues given.

### TODO

- [x] Fix issues with repeating letters
- [x] Automatically mark letter as correct in new guesses if it was correct before
- [x] Remove newest guess from valid word list immediately
- [x] Allow users to enter their own words for a game in progress
  - [x] Fix alignment issues when entering text
  - [ ] Align keyboard buttons so it looks more like an actual keyboard
  - [ ] Fix having to press button twice to enter a manual guess
- [ ] Guess better words maybe
- [ ] Make page prettier
- [x] Allow keyboard commands (typing, backspace)
  - [ ] Let user hit enter to go to next guess  
  (I don't actually know if I'll do this just because you have to click the squares first before submitting your guess anyways, so it seems pointless, but adding it to the to do list anyways)
- [x] Allow user submitted word to see how the program solves it
  - [ ] Make validation more accurate to how to would be in a real game
  - [ ] Actually validate the input correctly instead of doing it like a weirdo