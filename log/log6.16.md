Notes on 6/16:

First Draft: Create a home screen with two buttons:
- Start New Game
- Join Existing Game

Edge Case:

  -If the user clicks Start New Game, the Blackjack game screen will open and the page will display:

  "Starting game..."
  
  -If the user clicks Join Existing Game and no prior games exist, the page will display: 
  
  "No existing games found. Please start a new game."
  
Current Implementation:
- Join Existing Game always displays: "No existing games found. Please start a new game."

Future Implementation:
- Query database for active games.
- If active games exist, allow user to join.
- Otherwise display the error message by default.

Images:

<img width="563" height="235" alt="image" src="https://github.com/user-attachments/assets/161062aa-8fe1-462e-862a-4805643cf311" />

<img width="475" height="209" alt="image" src="https://github.com/user-attachments/assets/fdea6ac0-86cc-4ef5-868b-dc1604aed79c" />
