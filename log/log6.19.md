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
- Disable Hit, Split, and Stand.
- Let dealer draw until reaching at least 17.
- Compare player and dealer scores.
- Display win, loss, or tie message.

<img width="890" height="960" alt="image" src="https://github.com/user-attachments/assets/7a047fa2-e90c-4d71-a844-71bf3c7de0f7" />

Draft 3: Dealer Turn Logic

Requirements:

- After Stand is clicked, reveal dealer's hidden card.
- Dealer draws cards until reaching at least 17.
- Dealer's hand display updates after each draw.
- Dealer's score updates after each draw.
- Dealer stops drawing when score is 17 or higher.
- 
Expected Example:

Dealer Score: 14 -> Dealer draws 5 -> Dealer Score: 19 -> Dealer stops.

Future Improvement: Add short delay between dealer draws so user can see the dealer's actions.

<img width="978" height="970" alt="image" src="https://github.com/user-attachments/assets/4c1af14d-1023-4c50-a0a1-15c3d92b5665" />

Draft 4: Determine Game Result after the Dealer's turn

Requirements:
- If dealer score is over 21, player wins.
- If player score is greater than dealer score, player wins.
- If dealer score is greater than player score, dealer wins.
- If both scores are equal, the result is a tie/push.

Expected Example Scenarios:
- Dealer Score: 25, Player Score: 19 -> Dealer busts. Player wins.
- Dealer Score: 18, Player Score: 20 -> Player wins.
- Dealer Score: 20, Player Score: 18 -> Dealer wins.
- Dealer Score: 19, Player Score: 19 -> Push.

Editor Notes:
- Addressed the issue of the dealer's turn not occurring when I press the Hit button and I achieve 21.
- Fixed the issue of being able to click the Stand button even after busting from the Hit button.













