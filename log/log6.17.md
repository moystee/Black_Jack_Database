Notes on 6/17:

## Game Screen:

First Draft: Create the Blackjack game screen with the following:
- Dealer hand display
- Player hand display
- Dealer score display
- Player score display
- Game message area
- Hit button
- Stand button
- Exit button
- Split button

Game Message Area Examples:
- Blackjack!
- You bust!
- Dealer wins.
- Push (tie).
- Split available.

Hit/Stand/Exit Button Behavior:
- Always appears on the screen.
- Stand will disable Hit and Split while the dealer finishes their turn.
- Hit will add a card to the player's hand.
- Exit will open a pop-up screen with two buttons:
    - Do not save and exit.
    - Save and exit.

Split Button Behavior:

- Always appears on the screen.
- It is disabled and greyed out by default.
- It becomes enabled when:
    - The player has exactly two cards.
    - The two cards have the same value.

Edge Cases to consider:
- User exits a game before it is completed.
- User refreshes the page during a game.

Design plan: When the user starts or joins a game, they will navigate from `home.html` to `game.html`.

home.html -> Home screen.

game.html  -> Blackjack game.

First, I created the game screen and buttons without game logic:

<img width="2878" height="1018" alt="image" src="https://github.com/user-attachments/assets/67817787-0bad-4127-b087-8132fef87879" />

Next, I hardcoded values to Blackjack hands and scores:

**Note:** I ran into an issue with spacing each card value, so instead I solved this using `|` rather than multiple spaces.

<img width="2880" height="970" alt="image" src="https://github.com/user-attachments/assets/0be93324-1c3d-4d3f-a94d-ffddd2ad802f" />

Next, added the exit pop-up screen:

Current Exit Behavior:

- Save and Exit closes the game tab.
- Exit Without Saving closes the game tab.

Future Behavior:

- Save and Exit saves game state to the database before closing.
- Exit Without Saving discards game state and closes the tab.

<img width="2850" height="1546" alt="image" src="https://github.com/user-attachments/assets/37f83141-48f9-4562-9524-d4b75934cd0e" />












