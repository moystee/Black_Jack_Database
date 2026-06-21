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
- email: The user's email address.
- created_at: The date and time the account was created.

### games
This table stores each Blackjack game that was played.

- id: A unique identifier for each game.
- user_id: Connects the game to the user who played it.
- player_hand: The cards the player had during the game.
- dealer_hand: The cards the dealer had during the game.
- result: The outcome of the game, such as win, lose, tie, or blackjack.
- created_at: The date and time the game was played.

### Steps Taken
1. Create GitHub repository.
2. Create README.md.
3. Create BRAINSTORM.md.
4. Create the home page files:
    - home.html
    - home.css
    - home.js
4. Create the game page files:
    - game.html
    - game.css
    - game.js
5. Connect home page to game page.
6. Temporary hardcode and test card and button values.
7. Create exit pop-up screen to connect game page back to home page.
8. Create a standard 52-card Blackjack deck.
9. Add and test deck shuffling.
10. Deal starting player + dealer hands from the shuffled deck and display on game screen.
11. Calculate and display starting hand scores.
12. Add and test Hit Button functionality.
13. Add and test Stand Button functionality.
14. Add initial Blackjack Scenarios.
15. Add and test Split Button functionality.
16. Add and test New Game Button functionality.
