Notes on 6/21:

## Database

Draft 1: Add database support so users, games, results, and saved game progress can be stored.

Database Usage:
- Save user accounts.
- Save games won/loss.
- Save unfinished games if the user refreshes or exits.
- Allow users to continue an existing game later.

First Database Implementation Plan:
- Create Supabase project.
- Create users table.
- Create games table.
- Create user_stats table.
- Connect frontend JavaScript to Supabase.
- Test inserting one completed game result with a test function.

Test Results:
<img width="1429" height="538" alt="image" src="https://github.com/user-attachments/assets/26636769-011f-4f2c-9f34-7e1970db13b6" />

<img width="1868" height="370" alt="image" src="https://github.com/user-attachments/assets/b3ee42f9-147a-420a-8117-10136ccb605b" />

## Game and User_stats Table

Draft 2: Save the actual completed Blackjack game result into the games table and users_stats table.

Player Stats:
- Track total wins.
- Track total losses.
- Track total ties/pushes.
- Track total games played.

Expected Example:

Player Hand: K | 8

Dealer Hand: 10 | 9

Result: Player wins!

Database Row:
- player_hand = K | 8
- dealer_hand = 10 | 9
- result = Player wins!
- status = completed

Testing Plan:
- Finish one normal game.
- Check Supabase games and users_stats table.
- Confirm a new row appears with the real cards and result.

<img width="1857" height="912" alt="image" src="https://github.com/user-attachments/assets/82101a4b-2a26-4da4-9d50-1c4ea79d8ba9" />

<img width="1566" height="86" alt="image" src="https://github.com/user-attachments/assets/0adb6e46-89ac-41c2-bdb7-bfbad42caa96" />

**Note:** The user_stats' table was not saving values correctly from Splits but this has been fixed.

## Users Table

Draft 3: Allow multiple users to create accounts and have their own Blackjack statistics.

Home Page Changes:
- Add username input field.
- Keep Start New Game button.
- Keep Join Existing Game button.

Start New Game:
- Creates a new user.
- Creates a matching user_stats record.
- Prevent duplicate usernames.
- Saves current user_id locally.

Join Existing Game:
- Finds an existing username.
- Loads the corresponding user_id.
- Saves current user_id locally.

<img width="1556" height="222" alt="image" src="https://github.com/user-attachments/assets/7747f3eb-f7b6-4906-bbdc-bb3729ef35e9" />

<img width="864" height="250" alt="image" src="https://github.com/user-attachments/assets/5516a352-4bb6-438f-8f81-db7f234d6ab3" />

## Leaderboard

Draft 4: Add a leaderboard to the home page that displays the top Blackjack players.

Requirements:
- Show the top 10 users.
- Display each user's username.
- Display wins, losses, ties, and games played.
- Rank players by most wins.
- If wins are tied, rank by most ties.
- If wins and ties are tied, rank by fewest losses.

Leaderboard Query Idea:
- Join users and user_stats using user_id.
- Order by wins DESC, ties DESC, losses ASC.
- Limit results to 10.

**Note:** Moved the username input to be in between the two buttons.

<img width="1106" height="532" alt="image" src="https://github.com/user-attachments/assets/c6c72853-c809-436b-8f15-7776c69cabae" />

## Exit Without Saving Button

Draft 5: Fixed the functionality in the case when a user does not want to save their data.

Save and Exit = keep the completed game/stats if already saved, then go home
Exit Without Saving = delete this user’s latest saved game and undo latest stats update, then go home

**New Logic:**
- New Game = accept/save the previous game permanently
- Exit Without Saving = only undo the current/latest completed game



