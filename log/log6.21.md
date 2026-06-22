Notes on 6/21:

## Database

Draft 1: Add database support so users, games, results, and saved game progress can be stored.

Database Usage:
- Save user accounts.
- Save games won/loss.
- Save unfinished games if the user refreshes or exits.
- Allow users to continue an existing game later.

**Additional Database Features:**

Player Stats:
- Track total wins.
- Track total losses.
- Track total ties/pushes.
- Track total games played.

Leaderboard:
- Show the top 10 players on the home page.
- Rank players by number of wins.
- If wins are tied, possibly rank by win percentage.

Possible Table Addition:

user_stats
- id
- user_id
- wins
- losses
- ties
- games_played
- created_at
- updated_at

Leaderboard Query Idea:
- ORDER BY wins DESC, losses ASC, ties DESC

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

Draft 2: Save the actual completed Blackjack game result into the games table.

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
- Check Supabase games table.
- Confirm a new row appears with the real cards and result.










