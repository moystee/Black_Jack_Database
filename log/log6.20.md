Notes on 6/20:

Draft 1: Initial Player Blackjack

Requirements:

- Display "Blackjack!" on game screen.
- Disable Hit button.
- Disable Split button.
- Leave Stand enabled.
- Allow dealer turn to proceed when Stand is clicked.

Expected Example:

Player Hand: A | K

Player Score: 21

Message: Blackjack!

<img width="545" height="475" alt="image" src="https://github.com/user-attachments/assets/047a9c11-3ba7-46ed-8036-2ded8458db4d" />

<img width="604" height="479" alt="image" src="https://github.com/user-attachments/assets/9a2d7d94-6cb5-4cc9-88f5-2ebb49865ddc" />

Edge Case: 
- A player Blackjack should beat a dealer score of 21 that is achieved using more than two cards.
- A push should only occur if both the player and dealer have Blackjack on their initial two cards.

Expected Examples:

Player: A | K

Dealer: 5 | K | A | 5

Result: Player wins!

Player: A | K

Dealer: A | Q

Result: Push. It's a tie!








