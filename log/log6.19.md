Notes on 6/19:

## Hit Button

First Draft: **Hit Button** should give 1 card to player.

Requirements:
- When the Hit button is clicked, the player receives the next card from the deck.
- The dealt card is removed from the deck.
- The player's hand display updates.
- The player's score updates.
- The game message area updates.

Expected Example:

Before Hit:
- Player Hand: 10 | 7
- Player Score: 17

After Hit:
- Player Hand: 10 | 7 | 2
- Player Score: 19

Potential Edge Cases:
- Player reaches exactly 21 after a Hit.
- Player Busts after a Hit.
- Player immediately has two cards that add to 21.
- Player cannot Hit after Bust or Blackjack.

<img width="1036" height="930" alt="image" src="https://github.com/user-attachments/assets/b07a5aaf-bd80-4d9a-b095-f5dd3af1a4b9" />

<img width="1046" height="970" alt="image" src="https://github.com/user-attachments/assets/941f0b82-1c23-4b86-9b78-cb69abc418a2" />

## Stand Button

Draft 2: **Stand Button** should make it the dealer's turn.
- Reveal dealer's hidden card.
- Calculate full dealer score.
- Disable Hit and Split.
- Let dealer draw until reaching at least 17.
- Compare player and dealer scores.
- Display win, loss, or tie message.









