Notes on 6/16:

First Draft: Create a home screen with two buttons:
- Start New Game
- Join Existing Game

Edge Case:
  -If the user clicks Start New Game, the Blackjack game screen will open.
  -If the user clicks Join Existing Game and no prior games exist, the page will display:
  "No existing games found. Please start a new game."
  
Current Implementation:
- Join Existing Game always displays: "No existing games found. Please start a new game."

Future Implementation:
- Query database for active games.
- If active games exist, allow user to join.
- Otherwise display the error message by default.
