<script lang="ts">
  import { onMount } from "svelte";

  import {
    dishesForDay,
    loadSavedGame,
    msUntilTomorrow,
    practiceDishes,
    ROUNDS_PER_GAME,
    saveGame,
    todayNumber,
    type SavedRound,
  } from "./daily";
  import { DISHES, type Dish } from "./dishes";
  import DishGlobe from "./DishGlobe.svelte";
  import { distanceKm, MAX_ROUND_SCORE, scoreForDistance, type LatLon } from "./geo";
  import { countryNameAt } from "./world";

  type RoundResult = { dish: Dish; distance: number; points: number; tapped: string | null };
  type Phase = "start" | "guessing" | "revealed" | "done";

  const practice =
    typeof location !== "undefined" && new URLSearchParams(location.search).has("practice");
  const day = todayNumber();

  let phase = $state<Phase>("start");
  let rounds = $state<Dish[]>([]);
  let roundIndex = $state(0);
  let guess = $state<LatLon | null>(null);
  let results = $state<RoundResult[]>([]);
  let alreadyPlayed = $state(false);
  let lightbox = $state<{ src: string; alt: string } | null>(null);
  let countdown = $state(msUntilTomorrow());

  const dish = $derived(rounds[roundIndex] ?? null);
  const totalScore = $derived(results.reduce((sum, r) => sum + r.points, 0));
  const lastResult = $derived(results[results.length - 1] ?? null);
  const maxScore = ROUNDS_PER_GAME * MAX_ROUND_SCORE;

  onMount(() => {
    if (!practice) {
      const saved = loadSavedGame();
      if (saved) {
        restoreSaved(saved.rounds);
        alreadyPlayed = true;
        phase = "done";
      }
    }
    const tick = setInterval(() => (countdown = msUntilTomorrow()), 1000);
    return () => clearInterval(tick);
  });

  function restoreSaved(saved: SavedRound[]) {
    results = saved.flatMap((round) => {
      const d = DISHES.find((candidate) => candidate.id === round.id);
      return d ? [{ dish: d, distance: round.distance, points: round.points, tapped: null }] : [];
    });
  }

  function startGame() {
    rounds = practice ? practiceDishes() : dishesForDay(day);
    results = [];
    roundIndex = 0;
    guess = null;
    phase = "guessing";
  }

  function handleTap(point: LatLon) {
    if (phase !== "guessing") return;
    guess = point;
  }

  function lockIn() {
    if (!guess || !dish) return;
    const distance = Math.round(distanceKm(guess, dish));
    results = [
      ...results,
      {
        dish,
        distance,
        points: scoreForDistance(distance),
        tapped: countryNameAt(guess.lat, guess.lon),
      },
    ];
    phase = "revealed";
  }

  function nextRound() {
    if (roundIndex + 1 >= rounds.length) {
      if (!practice) {
        saveGame({
          day,
          rounds: results.map((r) => ({ id: r.dish.id, distance: r.distance, points: r.points })),
          total: totalScore,
        });
      }
      phase = "done";
      return;
    }
    roundIndex += 1;
    guess = null;
    phase = "guessing";
  }

  function verdictFor(result: RoundResult): string {
    if (result.points >= MAX_ROUND_SCORE) return "Bullseye";
    if (result.points >= 850) return "Razor close";
    if (result.points >= 600) return "Close";
    if (result.points >= 350) return "Same neighborhood";
    if (result.points >= 120) return "Wrong region";
    return "Way off";
  }

  function finalVerdict(total: number): string {
    if (total >= 4500) return "World-class food geographer";
    if (total >= 3500) return "Globetrotting gourmet";
    if (total >= 2500) return "Seasoned traveler";
    if (total >= 1200) return "Curious taster";
    return "Time to get a passport";
  }

  function formatKm(km: number): string {
    return `${km.toLocaleString()} km`;
  }

  function formatCountdown(ms: number): string {
    const s = Math.floor(ms / 1000);
    const pad = (n: number) => String(n).padStart(2, "0");
    return `${pad(Math.floor(s / 3600))}:${pad(Math.floor((s % 3600) / 60))}:${pad(s % 60)}`;
  }

  function dishPhoto(d: Dish): string {
    return `images/dishtap/${d.id}.jpg`;
  }

  function openLightbox(d: Dish) {
    lightbox = { src: dishPhoto(d), alt: d.name };
  }

  let shareState = $state<"idle" | "copied" | "failed">("idle");

  async function shareScore() {
    const squares = results
      .map((r) =>
        r.points >= MAX_ROUND_SCORE
          ? "🎯"
          : r.points >= 850
            ? "🟢"
            : r.points >= 600
              ? "🟡"
              : r.points >= 300
                ? "🟠"
                : "⚫"
      )
      .join("");
    const url = `${location.origin}${location.pathname}`;
    const text = `DishTap #${day} — ${totalScore.toLocaleString()}/${maxScore.toLocaleString()}\n${squares}\nWhere was it born? ${url}`;
    try {
      await navigator.clipboard.writeText(text);
      shareState = "copied";
    } catch {
      try {
        await navigator.share({ text });
        shareState = "copied";
      } catch {
        shareState = "failed";
      }
    }
    setTimeout(() => (shareState = "idle"), 2500);
  }
</script>

<svelte:head>
  <title>DishTap #{day} — the daily food-geography game</title>
</svelte:head>

<svelte:window onkeydown={(e) => e.key === "Escape" && (lightbox = null)} />

<div class="dishtap-root">
  <header class="topbar">
    <div class="wordmark">
      Dish<span class="accent-text">Tap</span> <span class="daynum">#{day}</span>
    </div>
    {#if practice}
      <span class="chip practice-chip">Practice</span>
    {/if}
    {#if phase === "guessing" || phase === "revealed"}
      <div class="topbar-right">
        <span class="chip">Round {roundIndex + 1} / {rounds.length}</span>
        <div class="chip scorebox">
          <span class="scorebox-label">Score</span>
          <span class="scorebox-value">{totalScore.toLocaleString()}</span>
        </div>
      </div>
    {/if}
  </header>

  {#if phase === "guessing" && dish}
    <div class="prompt-row">
      <div class="prompt card">
        <button
          class="photo-btn"
          onclick={() => dish && openLightbox(dish)}
          aria-label="Enlarge photo of {dish.name}"
        >
          <img class="prompt-photo" src={dishPhoto(dish)} alt={dish.name} />
        </button>
        <div>
          <div class="prompt-label">Where was this born?</div>
          <div class="prompt-name">{dish.name}</div>
        </div>
      </div>
    </div>
  {/if}

  <div class="stage-row">
    <div class="globe-stage">
      <div class="globe-glow"></div>
      <DishGlobe
        guess={phase === "guessing" || phase === "revealed" ? guess : null}
        answer={phase === "revealed" ? dish : null}
        revealed={phase === "revealed"}
        interactive={phase === "guessing"}
        autoSpin={phase === "start" || phase === "done"}
        onTap={handleTap}
      />
    </div>

    {#if phase === "revealed" && lastResult}
      <aside class="reveal card">
        <button
          class="photo-btn"
          onclick={() => lastResult && openLightbox(lastResult.dish)}
          aria-label="Enlarge photo of {lastResult.dish.name}"
        >
          <img class="reveal-photo" src={dishPhoto(lastResult.dish)} alt={lastResult.dish.name} />
        </button>
        <div class="reveal-head">
          <span class="reveal-verdict">{verdictFor(lastResult)}</span>
          <span class="reveal-points accent-text">+{lastResult.points.toLocaleString()}</span>
        </div>
        <div class="reveal-answer">
          {lastResult.dish.name} · <strong>{lastResult.dish.place}</strong>
        </div>
        <div class="reveal-distance">
          {#if lastResult.points >= MAX_ROUND_SCORE}
            <strong>{formatKm(lastResult.distance)}</strong> from the source — dead on
          {:else}
            Your tap{lastResult.tapped ? ` (${lastResult.tapped})` : ""} was
            <strong>{formatKm(lastResult.distance)}</strong> away
          {/if}
        </div>
        <p class="reveal-fact">{lastResult.dish.fact}</p>
        <button class="btn btn-block" onclick={nextRound}>
          {roundIndex + 1 >= rounds.length ? "See my results" : "Next dish →"}
        </button>
      </aside>
    {/if}
  </div>

  {#if phase === "guessing"}
    <div class="actionbar">
      <button class="btn btn-lg" disabled={!guess} onclick={lockIn}>
        {guess ? "Lock it in" : "Tap the globe to guess"}
      </button>
      <span class="action-hint">{guess ? "Tap again to move your pin" : " "}</span>
    </div>
  {/if}

  {#if phase === "start"}
    <div class="panel intro card">
      <div class="intro-eyebrow">Daily puzzle #{day}</div>
      <h1 class="intro-title">Where was it <span class="accent-text">born?</span></h1>
      <p class="intro-copy">
        Five dishes. Spin the globe and pin each one's home city — the closer your tap, the more of
        the 1,000 points you keep. Same five dishes for everyone, one game a day.
      </p>
      <button class="btn btn-lg" onclick={startGame}>
        {practice ? "Start practice round" : "Play today's five"}
      </button>
      <p class="intro-credit">
        Food photos from Wikipedia / Wikimedia Commons · map data © Natural Earth
      </p>
    </div>
  {/if}

  {#if phase === "done"}
    <div class="panel summary card">
      <div class="summary-eyebrow">
        {practice ? "Practice result" : `DishTap #${day} — final score`}
      </div>
      <div class="summary-score">
        <span class="accent-text">{totalScore.toLocaleString()}</span>
        <span class="summary-max">/ {maxScore.toLocaleString()}</span>
      </div>
      <div class="summary-verdict">{finalVerdict(totalScore)}</div>
      <div class="progress">
        <div class="progress-fill" style={`width: ${(totalScore / maxScore) * 100}%`}></div>
      </div>
      <ul class="summary-rounds">
        {#each results as result (result.dish.id)}
          <li>
            <img class="summary-thumb" src={dishPhoto(result.dish)} alt={result.dish.name} />
            <span class="summary-dish">{result.dish.name}</span>
            <span class="summary-detail">{formatKm(result.distance)}</span>
            <span class="summary-points">+{result.points.toLocaleString()}</span>
          </li>
        {/each}
      </ul>
      {#if !practice}
        <button class="btn btn-lg btn-block" onclick={shareScore}>
          {shareState === "copied"
            ? "Copied — send it to a friend"
            : shareState === "failed"
              ? "Couldn't copy — try again"
              : "Share my score"}
        </button>
        <div class="countdown">
          {alreadyPlayed ? "You've played today." : "That's today's game."}
          Next five dishes in <strong>{formatCountdown(countdown)}</strong>
        </div>
        <a class="ghost-link" href="?practice=1">Practice with random dishes</a>
      {:else}
        <button class="btn btn-lg btn-block" onclick={startGame}>Play another practice</button>
        <a class="ghost-link" href={location.pathname}>Back to today's game</a>
      {/if}
    </div>
  {/if}

  {#if lightbox}
    <button class="lightbox" onclick={() => (lightbox = null)} aria-label="Close enlarged photo">
      <img src={lightbox.src} alt={lightbox.alt} />
      <span class="lightbox-caption">{lightbox.alt}</span>
    </button>
  {/if}
</div>

<style>
  .dishtap-root {
    --bg: #070b12;
    --card: #10161f;
    --card-border: rgba(255, 255, 255, 0.09);
    --text: #edf2f7;
    --text-2: rgba(237, 242, 247, 0.72);
    --text-3: rgba(237, 242, 247, 0.5);
    --accent: #22d3ee;

    position: relative;
    display: flex;
    flex-direction: column;
    height: 100dvh;
    overflow: hidden;
    background: var(--bg);
    font-family: "Satoshi", ui-sans-serif, system-ui, sans-serif;
    color: var(--text);
  }

  .accent-text {
    background: linear-gradient(90deg, #22d3ee, #7dd3fc);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }

  .card {
    background: var(--card);
    border: 1px solid var(--card-border);
    border-radius: 14px;
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5);
  }

  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 13px 24px;
    border: 1px solid transparent;
    border-radius: 999px;
    background: var(--text);
    color: #0a0f16;
    font: 600 14px "Satoshi", sans-serif;
    cursor: pointer;
    transition:
      transform 160ms ease,
      opacity 160ms ease;
  }
  .btn:hover:not(:disabled) {
    transform: translateY(-1px);
  }
  .btn:disabled {
    opacity: 0.35;
    cursor: not-allowed;
  }
  .btn-lg {
    padding: 16px 30px;
    font-size: 15px;
  }
  .btn-block {
    display: flex;
    width: 100%;
  }
  .ghost-link {
    font-size: 13px;
    color: var(--text-3);
    text-decoration: underline;
    text-underline-offset: 3px;
  }
  .ghost-link:hover {
    color: var(--text-2);
  }

  .topbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding: 14px 22px;
    flex-shrink: 0;
  }
  .wordmark {
    font-weight: 900;
    font-size: 21px;
    letter-spacing: -0.03em;
  }
  .daynum {
    font-weight: 600;
    font-size: 13px;
    color: var(--text-3);
    margin-left: 4px;
  }
  .topbar-right {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .chip {
    padding: 6px 14px;
    border-radius: 999px;
    background: var(--card);
    border: 1px solid var(--card-border);
    font-weight: 600;
    font-size: 13px;
    color: var(--text-2);
  }
  .practice-chip {
    color: var(--accent);
    border-color: rgba(34, 211, 238, 0.4);
  }
  .scorebox {
    display: flex;
    align-items: baseline;
    gap: 8px;
  }
  .scorebox-label {
    font-weight: 900;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--text-3);
  }
  .scorebox-value {
    font-weight: 700;
    font-size: 15px;
    color: var(--text);
    font-variant-numeric: tabular-nums;
  }

  .prompt-row {
    display: flex;
    justify-content: center;
    padding: 0 16px 6px;
    flex-shrink: 0;
  }
  .prompt {
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 10px 20px 10px 10px;
    max-width: min(92vw, 480px);
  }
  .prompt-photo {
    width: 64px;
    height: 64px;
    object-fit: cover;
    border-radius: 10px;
    border: 1px solid var(--card-border);
    flex-shrink: 0;
    display: block;
  }
  .prompt-label {
    font-weight: 900;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--text-3);
  }
  .prompt-name {
    font-weight: 700;
    font-size: clamp(18px, 3vw, 24px);
    letter-spacing: -0.02em;
    white-space: nowrap;
  }

  .stage-row {
    flex: 1;
    display: flex;
    min-height: 0;
    position: relative;
  }
  .globe-stage {
    flex: 1;
    min-width: 0;
    position: relative;
  }
  .globe-glow {
    position: absolute;
    left: 50%;
    top: 50%;
    width: min(85vmin, 700px);
    height: min(85vmin, 700px);
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background: radial-gradient(circle, rgba(56, 132, 255, 0.16) 30%, rgba(56, 132, 255, 0) 68%);
    pointer-events: none;
  }

  .actionbar {
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    padding: 6px 16px max(14px, env(safe-area-inset-bottom));
  }
  .action-hint {
    font-size: 12.5px;
    color: var(--text-3);
  }

  .reveal {
    width: min(400px, 38vw);
    align-self: center;
    max-height: calc(100% - 24px);
    overflow-y: auto;
    margin: 12px 16px 12px 0;
    padding: 18px 20px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    position: relative;
  }
  .photo-btn {
    border: 0;
    padding: 0;
    background: none;
    cursor: zoom-in;
    line-height: 0;
    flex-shrink: 0;
  }
  .reveal-photo {
    width: 100%;
    height: 128px;
    object-fit: cover;
    border-radius: 10px;
    border: 1px solid var(--card-border);
    margin-bottom: 4px;
    display: block;
  }
  .reveal-head {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 12px;
  }
  .reveal-verdict {
    font-weight: 900;
    font-size: 20px;
    letter-spacing: -0.02em;
  }
  .reveal-points {
    font-weight: 900;
    font-size: 24px;
    font-variant-numeric: tabular-nums;
  }
  .reveal-answer {
    font-size: 15px;
    color: var(--text-2);
  }
  .reveal-distance {
    font-size: 14px;
    color: var(--text-2);
  }
  .reveal-fact {
    margin: 2px 0 8px;
    font-size: 14px;
    line-height: 1.5;
    color: var(--text-3);
  }

  .panel {
    position: absolute;
    left: 50%;
    z-index: 10;
  }
  .intro {
    top: 50%;
    transform: translate(-50%, -50%);
    width: min(92vw, 460px);
    padding: 34px 32px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 14px;
  }
  .intro-eyebrow {
    font-weight: 900;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--accent);
  }
  .intro-title {
    font-weight: 900;
    font-size: clamp(28px, 5vw, 40px);
    letter-spacing: -0.04em;
    line-height: 1;
    margin: 0;
  }
  .intro-copy {
    margin: 0;
    max-width: 38ch;
    font-size: 15px;
    line-height: 1.55;
    color: var(--text-2);
  }
  .intro-credit {
    margin: 4px 0 0;
    font-size: 11px;
    color: var(--text-3);
  }

  .summary {
    top: 50%;
    transform: translate(-50%, -50%);
    width: min(92vw, 480px);
    max-height: min(88dvh, 660px);
    overflow-y: auto;
    padding: 28px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    text-align: center;
  }
  .summary-eyebrow {
    font-weight: 900;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--text-3);
  }
  .summary-score {
    font-weight: 900;
    font-size: 52px;
    letter-spacing: -0.04em;
    line-height: 1;
    font-variant-numeric: tabular-nums;
  }
  .summary-max {
    font-size: 18px;
    font-weight: 600;
    color: var(--text-3);
  }
  .summary-verdict {
    font-weight: 600;
    font-size: 16px;
    color: var(--text-2);
  }
  .progress {
    width: 100%;
    height: 8px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.1);
    overflow: hidden;
    margin: 6px 0 4px;
  }
  .progress-fill {
    display: block;
    height: 100%;
    border-radius: 999px;
    background: linear-gradient(90deg, #22d3ee, #7dd3fc);
  }
  .summary-rounds {
    width: 100%;
    list-style: none;
    margin: 4px 0 10px;
    padding: 0;
  }
  .summary-rounds li {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 9px 2px;
    border-bottom: 1px solid var(--card-border);
    font-size: 14px;
  }
  .summary-rounds li:last-child {
    border-bottom: none;
  }
  .summary-thumb {
    width: 36px;
    height: 36px;
    object-fit: cover;
    border-radius: 8px;
    border: 1px solid var(--card-border);
    flex-shrink: 0;
  }
  .summary-dish {
    flex: 1;
    text-align: left;
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .summary-detail {
    color: var(--text-3);
    font-size: 13px;
    font-variant-numeric: tabular-nums;
  }
  .summary-points {
    font-weight: 700;
    font-variant-numeric: tabular-nums;
    min-width: 58px;
    text-align: right;
  }
  .countdown {
    font-size: 13.5px;
    color: var(--text-2);
  }
  .countdown strong {
    font-variant-numeric: tabular-nums;
    color: var(--text);
  }

  .lightbox {
    position: fixed;
    inset: 0;
    z-index: 50;
    border: 0;
    padding: 24px;
    background: rgba(0, 0, 0, 0.75);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
    cursor: zoom-out;
  }
  .lightbox img {
    max-width: min(92vw, 880px);
    max-height: 80dvh;
    object-fit: contain;
    border-radius: 14px;
    background: #10161f;
    box-shadow: 0 24px 60px rgba(0, 0, 0, 0.6);
  }
  .lightbox-caption {
    font-weight: 700;
    font-size: 16px;
    color: #fff;
  }

  @media (max-width: 760px) {
    .stage-row {
      flex-direction: column;
    }
    .reveal {
      width: auto;
      align-self: stretch;
      margin: 0 12px max(12px, env(safe-area-inset-bottom));
      max-height: 60%;
    }
    .reveal-photo {
      height: 104px;
    }
    .prompt {
      padding: 8px 14px 8px 8px;
      gap: 10px;
    }
    .prompt-photo {
      width: 52px;
      height: 52px;
    }
  }
</style>
