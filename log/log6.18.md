Notes on 6/18:

## Deck and Shuffle Logic:

First Draft: Create a normal Blackjack deck.

Requirements:
- 52 cards total.
- No jokers.
- 4 suits:
    - Hearts
    - Diamonds
    - Clubs
    - Spades
- 13 card values per suit:
    - A (1 or 11)
    - 2-10
    - J-Q-K (10)

Deck Behavior:
- A new 52-card deck is created when a new game starts.
- The deck is shuffled before cards are dealt.
- Cards are removed from the deck when dealt.
- A card can only be dealt once per game.
- A new game creates a fresh deck.

<img width="511" height="907" alt="image" src="https://github.com/user-attachments/assets/894d3b64-1415-4549-a1cc-5ab618c21948" />

Second Draft: Create deck shuffle functionality.

Requirements:
- Shuffle all 52 cards.
- Each card should have an equal chance of appearing anywhere in the deck.
- Deck size must remain 52 after shuffling.
- No cards should be duplicated or lost.

Randomization Idea:
- Start at the end of the deck.
- Pick a random card from positions 0 through current position.
- Swap the two cards.
- Move one position left.
- Repeat many times.

<img width="508" height="908" alt="image" src="https://github.com/user-attachments/assets/7fff1f1c-dc24-420e-9ffe-78211b6ab1fb" />

Third Draft: Deal the starting dealer and player hands.

Requirements:
- Use the first 4 cards from the shuffled deck.
- Deal first and third card to the player.
- Deal second and fourth card to the dealer.
- Remove dealt cards from the deck.
- Display the player's two cards.
- Display one dealer card and hide the second dealer card with ?.

Expected Display Example:
- Dealer Hand: K | ?
- Player Hand: 10 | 7

<img width="749" height="774" alt="image" src="https://github.com/user-attachments/assets/7766c74a-8e3b-400e-b510-70a3bc4f9666" />

Fourth Draft: Calculate the starting dealer and player hand scores.

Requirements:
- Number cards count as their face value.
- Face cards (J, Q, K) count as 10.
- Ace counts as 11 by default.
- If counting an Ace as 11 causes a bust, it becomes 1.
- Display player score.
- Display dealer score.

Expected Example:
- A | K
- Score: 21

<img width="739" height="776" alt="image" src="https://github.com/user-attachments/assets/6b26e2c4-784b-4030-9381-975a6d6bd799" />







