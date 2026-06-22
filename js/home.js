const startGameButton = document.getElementById("startGameButton");
const joinGameButton = document.getElementById("joinGameButton");

const usernameInput = document.getElementById("usernameInput");

const message = document.getElementById("message");

const leaderboard = document.getElementById("leaderboard");

const supabaseUrl = "https://hyaapdnhcirowtwvugji.supabase.co";
const supabaseKey = "sb_publishable_Azo3Dy_jbEb78dGL2p4TJw_sGJC4Dxm";

const database = supabase.createClient(
    supabaseUrl,
    supabaseKey
);

/////////////////////////////////////////////////////////////////
// Button Functions
/////////////////////////////////////////////////////////////////

startGameButton.addEventListener("click", async function () {
    const username = usernameInput.value.trim();

    if (username === "") {
        message.textContent = "Please enter a username.";
        return;
    }

    const { data: existingUser, error: checkError } = await database
        .from("users")
        .select("*")
        .eq("username", username)
        .maybeSingle();

    if (existingUser) {
        message.textContent = "Username already exists. Please join existing game.";
        return;
    }

    const { data: newUser, error: createError } = await database
        .from("users")
        .insert([
            {
                username: username
            }
        ])
        .select()
        .single();

    if (createError) {
        console.log("Error creating user:", createError);
        message.textContent = "Error creating user.";
        return;
    }

    await database
        .from("user_stats")
        .insert([
            {
                user_id: newUser.id,
                wins: 0,
                losses: 0,
                ties: 0,
                games_played: 0
            }
        ]);

    localStorage.setItem("user_id", newUser.id);
    localStorage.setItem("username", username);

    message.textContent = "Starting game...";
    window.location.href = "game.html";
});

joinGameButton.addEventListener("click", async function () {
    const username = usernameInput.value.trim();

    if (username === "") {
        message.textContent = "Please enter a username.";
        return;
    }

    const { data: existingUser, error } = await database
        .from("users")
        .select("*")
        .eq("username", username)
        .maybeSingle();

    if (error) {
        console.log("Error finding user:", error);
        message.textContent = "Error finding user.";
        return;
    }

    if (!existingUser) {
        message.textContent = "Username not found. Please start a new game.";
        return;
    }

    localStorage.setItem("user_id", existingUser.id);
    localStorage.setItem("username", existingUser.username);

    message.textContent = "Joining game...";
    window.location.href = "game.html";
});

async function loadLeaderboard() {
    leaderboard.innerHTML = "";
    
    const { data: stats, error: statsError } = await database
        .from("user_stats")
        .select("*")
        .order("wins", { ascending: false })
        .order("ties", { ascending: false })
        .order("losses", { ascending: true })
        .limit(10);

    if (statsError) {
        console.log("Error loading stats:", statsError);
        leaderboard.textContent = "Error loading leaderboard.";
        return;
    }

    leaderboard.innerHTML = "";

    for (let i = 0; i < stats.length; i++) {
        const playerStats = stats[i];

        const { data: user, error: userError } = await database
            .from("users")
            .select("*")
            .eq("id", playerStats.user_id)
            .single();

        if (userError) {
            console.log("Error loading user:", userError);
            continue;
        }

        leaderboard.innerHTML +=
            (i + 1) + ". " +
            user.username +
            " - W: " + playerStats.wins +
            " / L: " + playerStats.losses +
            " / T: " + playerStats.ties +
            " / Games: " + playerStats.games_played +
            "<br>";
    }
}

loadLeaderboard();
