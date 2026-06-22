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

<img width="1859" height="458" alt="image" src="https://github.com/user-attachments/assets/a5e33e3b-8183-4149-a14d-6f49721e001b" />

<img width="1566" height="86" alt="image" src="https://github.com/user-attachments/assets/0adb6e46-89ac-41c2-bdb7-bfbad42caa96" />

**Note:** The user_stats' table was not saving values correctly from Splits but this has been fixed.

## Users Table

Draft 3: Allow multiple users to create accounts and have their own Blackjack statistics.

Requirements:
- Create new users.
- Login existing users.
- Store username.
- Associate games with the logged-in user.
- Associate user_stats with the logged-in user.
- Remove dependency on the hardcoded test user_id.

## Leaderboard

Leaderboard:
- Show the top 10 players on the home page.
- Rank players by number of wins.
- If wins are tied, possibly rank by win percentage.

Leaderboard Query Idea:
- ORDER BY wins DESC, losses ASC, ties DESC





