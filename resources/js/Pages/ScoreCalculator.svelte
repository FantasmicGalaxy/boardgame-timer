<script>
    import { slide } from "svelte/transition";
    import { SettingsIcon } from "svelte-feather-icons";

    let players = [
        {
            name: "e",
            scores: [],
        },
    ];

    function addUpScore(player, scoreIndex) {
        let sum = 0;
        for (let i = 0; i < scoreIndex && i < player.scores.length; i++) {
            sum += player.scores[i];
        }
        return sum;
    }

    let newScore;
</script>

<main>
    <h1>Score Calculator <button><SettingsIcon size="32" /></button></h1>

    <form
        class="player"
        on:submit={(e) => {
            e.preventDefault();
            if (!newScore) {
                return;
            }
            players[0].scores.push(newScore);
            players = players;

            newScore = "";
        }}
    >
        <div class="player-name">Player 1</div>
        <div class="player-score">
            <span class="current-score">
                {addUpScore(players[0], players[0].scores.length)}
            </span>
            <ul>
                {#each players[0].scores as scores, i}
                    <div transition:slide>
                        <li>
                            {addUpScore(players[0], i)}
                        </li>
                        <li>
                            {players[0].scores[i]}
                        </li>
                    </div>
                {/each}
            </ul>
        </div>
        <input
            type="number"
            name="new-score"
            id="new-score"
            placeholder="Enter score"
            bind:value={newScore}
        />
    </form>
</main>

<style>
    main {
        max-width: 700px;
        margin: 0 auto;
        position: relative;

        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
        margin-bottom: 2rem;
    }
    h1 {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.5rem;
    }
    h1 button {
        display: inline;
        color: var(--color-text-muted);
        cursor: pointer;
        border: none;
        padding: 0.5rem;
    }

    .player {
        width: 300px;
        text-align: center;
    }
    .player-name {
        font-size: 3rem;
        padding: 0 1rem;
        border: var(--border);
        border-radius: var(--border-radius) var(--border-radius) 0 0;
    }

    .player-score {
        border-left: var(--border);
        border-right: var(--border);
        padding: 0.5rem;

        max-height: 400px;
        overflow-y: scroll;

        display: flex;
        flex-direction: column-reverse;
    }
    .player-score ul {
        list-style: none;
        margin-bottom: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: right;
    }
    .player-score ul li {
        margin-bottom: 0;
        font-size: 1.5rem;
        position: relative;
        padding-left: 1.2ch;
        width: 5rem;
    }
    .player-score ul li:nth-child(2n - 1) {
        color: var(--color-text-muted);
    }
    .player-score ul li:nth-child(2n) {
        border-bottom: var(--border);
    }
    .player-score ul li:nth-child(2n)::before {
        content: "+";
        color: var(--color-text-muted);
        position: absolute;
        /* for alignment */
        left: 4px;
        top: -1px;
    }
    .player-score .current-score {
        font-size: 2.5rem;
        font-weight: bold;
        color: var(--color-text);
        text-align: center;
    }
    .player input {
        width: 100%;
        height: auto;
        border-radius: 0 0 var(--border-radius) var(--border-radius);
        font-size: 2rem;
        text-align: center;
    }
</style>
