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

Dealer: 5 | K | 6

Result: Blackjack! Player wins!

Player: A | K

Dealer: A | Q

Result: Push. It's a tie!

<img width="597" height="488" alt="image" src="https://github.com/user-attachments/assets/bbd2f9b9-2cd8-4460-b20c-96767842b9b7" />

Draft 2: Implement Split Functionality

Goal: Allow the player to split their hand into two separate hands when the initial two cards have the same value.

Requirements:
- Split button is disabled by default.
- Split button becomes enabled only if:
  - The player has exactly two cards.
  - Both cards have the same value.
- Clicking Split creates two separate player hands.
- Each split hand receives one additional card from the deck.
- Scores are calculated separately for each hand.
- The player plays the first hand, then the second hand.

Expected Example:

**Before Split:**

Player Hand: 8 | 8

**After Split:**

Hand 1: 8 | K

Hand 2: 8 | 5

Edge Cases:
- Aces may be split.
- Split is unavailable after the player Hits.
- Split is unavailable after the player Stands.
- Split is unavailable if the first two cards have different values.

**Note:** Since Split functionality is being implemented, the game design will be enlarged and organized a bit differently.

<img width="1110" height="925" alt="image" src="https://github.com/user-attachments/assets/77599d4d-d19b-4ce7-8721-110ae1923e4f" />

Draft 3: Play the Split Hands

Goal: Allow the player to play Hand 1 first, then Hand 2.

Requirements:
- After Split, Hand 1 becomes active first.
- Hit affects only the active hand.
- Stand moves from Hand 1 to Hand 2.
- After Hand 2 stands, dealer takes their turn.













