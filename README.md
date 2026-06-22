# Blackjack Database

## Goal
Build a web app for Blackjack using vanilla JavaScript, with user accounts and game data saved in a database.

## Details
- Languages: HTML, CSS, Vanilla JavaScript
- Database: Supabase
- Hosting: Render
- Version Control: GitHub

## Main Process Features
1. Users can create an account or log in.
2. Users can join/start a Blackjack game.
3. Users can hit, stand, win, lose, or tie.
4. Game history is saved.
5. User stats are stored in the database.

## Database Ideas

### users
This table stores information about each player.

- id: A unique identifier for each user.
- username: The display name chosen by the user.
- created_at: The date and time the account was created.

### user stats
This table stores lifetime statistics for each player.

- id: A unique identifier for the statistics record.
- user_id: Connects the statistics record to a user.
- wins: Total games won.
- losses: Total games lost.
- ties: Total games pushed/tied.
- games_played: Total games played.
- created_at: The date and time the statistics record was created.
- updated_at: The date and time the statistics record was last updated.

### games
This table stores each Blackjack game that was played.

- id: A unique identifier for each game.
- user_id: Connects the game to the user who played it.
- player_hand: The player's final hand. Split games store both hands.
- dealer_hand: The dealer's final hand.
- result: The outcome of the game (win, loss, tie, blackjack, split result, etc.).
- status: Indicates whether the game was completed or saved.
- created_at: The date and time the game was played.

### Steps Taken
1. Create GitHub repository.
2. Create README.md.
3. Create BRAINSTORM.md.
4. Create the home page files:
    - home.html
    - home.css
    - home.js
5. Create the game page files:
    - game.html
    - game.css
    - game.js
6. Connect home page to game page.
7. Temporary hardcode and test card and button values.
8. Create exit pop-up screen to connect game page back to home page.
9. Create a standard 52-card Blackjack deck.
10. Add and test deck shuffling.
11. Deal starting player + dealer hands from the shuffled deck and display on game screen.
12. Calculate and display starting hand scores.
13. Add and test Hit Button functionality.
14. Add and test Stand Button functionality.
15. Add initial Blackjack Scenarios.
16. Add and test Split Button functionality.
17. Add and test New Game Button functionality.
18. Created and connected via Supabase.
19. Add and test database tables:
    - users
    - user_stats
    - games
20. Add and test username functionality with:
    - Start New Game button.
    - Join Existing Game button.
21. Add and test Leaderboard.
22. Add working Exit Without Saving Button functionality.











