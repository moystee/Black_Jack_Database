# Blackjack Database

## Goal
Build a web app for Blackjack using vanilla JavaScript, with user accounts and game data saved in a database.

## Details
- Frontend: HTML, CSS, Vanilla JavaScript
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
4. Create the frontend home page files:
    - home.html
    - home.css
    - home.js
4. Create the frontend game page files:
    - game.html
    - game.css
    - game.js
5. Hardcode and test card values.
6. Create exit pop-up screen.
  




