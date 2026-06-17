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
