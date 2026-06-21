Notes on 6/21:

## Database

Goal: Add database support so users, games, results, and saved game progress can be stored.

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
- Test inserting one completed game result.
- Later, connect real game results to the database.











