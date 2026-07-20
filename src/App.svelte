<script lang="ts">
  import { Confetti } from "svelte-confetti";

  import "./recess-ds.css";

  import { DISHES, type Dish } from "./dishes";

  import DishGlobe from "./DishGlobe.svelte";
  import { distanceKm, MAX_ROUND_SCORE, scoreForDistance, type LatLon } from "./geo";
  import { countryNameAt } from "./world";

  const ROUNDS_PER_GAME = 5;

  type RoundResult = { dish: Dish; distance: number; points: number; foundCountry: boolean };
  type Phase = "start" | "guessing" | "revealed" | "done";

  let phase = $state<Phase>("start");
  let rounds = $state<Dish[]>([]);
  let roundIndex = $state(0);
  let guess = $state<LatLon | null>(null);
  let results = $state<RoundResult[]>([]);
  let lightbox = $state<{ src: string; alt: string } | null>(null);

  const dish = $derived(rounds[roundIndex] ?? null);
  const totalScore = $derived(results.reduce((sum, r) => sum + r.points, 0));
  const lastResult = $derived(results[results.length - 1] ?? null);
  const maxScore = ROUNDS_PER_GAME * MAX_ROUND_SCORE;

  function shuffled<T>(list: T[]): T[] {
    const copy = [...list];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function startGame() {
    rounds = shuffled(DISHES).slice(0, ROUNDS_PER_GAME);
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
    // Country-first scoring: land anywhere in the origin country and it's a
    // bullseye; otherwise distance to the origin city drives partial credit.
    const tappedCountry = countryNameAt(guess.lat, guess.lon);
    const foundCountry = tappedCountry !== null && tappedCountry === dish.country;
    const points = foundCountry ? MAX_ROUND_SCORE : scoreForDistance(distance);
    results = [...results, { dish, distance, points, foundCountry }];
    phase = "revealed";
  }

  function nextRound() {
    if (roundIndex + 1 >= rounds.length) {
      phase = "done";
      return;
    }
    roundIndex += 1;
    guess = null;
    phase = "guessing";
  }

  function verdictFor(result: RoundResult): string {
    if (result.foundCountry || result.points >= MAX_ROUND_SCORE) return "Bullseye!";
    if (result.points >= 850) return "So close!";
    if (result.points >= 600) return "Nice one!";
    if (result.points >= 350) return "Warm...";
    if (result.points >= 120) return "Getting chilly";
    return "Way off the map!";
  }

  function finalVerdict(total: number): string {
    if (total >= 4500) return "World-class food explorer";
    if (total >= 3500) return "Globetrotting gourmet";
    if (total >= 2500) return "Seasoned traveler";
    if (total >= 1200) return "Curious taster";
    return "Time to get a passport";
  }

  function formatKm(km: number): string {
    return `${km.toLocaleString()} km`;
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
                : "⚪"
      )
      .join("");
    const text = `🌍🍜 DishTap — I scored ${totalScore.toLocaleString()}/${maxScore.toLocaleString()}\n${squares}\nThink you know where food comes from? Play: ${location.origin}${location.pathname}`;
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
  <title>DishTap — tap the country the dish was born in</title>
  <meta
    name="description"
    content="A geography game about food: we name a famous dish, you spin the globe and tap the country it comes from."
  />
</svelte:head>

<svelte:window onkeydown={(e) => e.key === "Escape" && (lightbox = null)} />

<div class="recess-ds dishtap-root">
  <header class="topbar">
    <div class="wordmark">
      Dish<span class="ds-grad-text">Tap</span>
    </div>
    {#if phase === "guessing" || phase === "revealed"}
      <div class="topbar-right">
        <span class="round-chip">Round {roundIndex + 1} / {rounds.length}</span>
        <div class="scorebox">
          <span class="scorebox-label">Score</span>
          <span class="scorebox-value">{totalScore.toLocaleString()}</span>
        </div>
      </div>
    {/if}
  </header>

  {#if phase === "guessing" && dish}
    <div class="prompt-row">
      <div class="prompt ds-card">
        <button
          class="photo-btn"
          onclick={() => dish && openLightbox(dish)}
          aria-label="Enlarge photo of {dish.name}"
        >
          <img class="prompt-photo" src={dishPhoto(dish)} alt={dish.name} />
        </button>
        <div>
          <div class="prompt-label">Which country does this come from?</div>
          <div class="prompt-name">{dish.emoji} {dish.name}</div>
        </div>
      </div>
    </div>
  {/if}

  <div class="stage-row">
    <div class="globe-stage">
      <div class="globe-shadow"></div>
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
      <aside class="reveal ds-card">
        {#if lastResult.points >= 850}
          <div class="confetti-anchor">
            <Confetti x={[-1, 1]} y={[-0.5, 1]} fallDistance="80px" />
          </div>
        {/if}
        <button
          class="photo-btn"
          onclick={() => lastResult && openLightbox(lastResult.dish)}
          aria-label="Enlarge photo of {lastResult.dish.name}"
        >
          <img class="reveal-photo" src={dishPhoto(lastResult.dish)} alt={lastResult.dish.name} />
        </button>
        <div class="reveal-head">
          <span class="reveal-verdict">{verdictFor(lastResult)}</span>
          <span class="reveal-points ds-grad-text">+{lastResult.points.toLocaleString()}</span>
        </div>
        <div class="reveal-answer">
          {lastResult.dish.emoji}
          {lastResult.dish.name} · <strong>{lastResult.dish.place}</strong>
        </div>
        <div class="reveal-distance">
          {#if lastResult.foundCountry}
            You found <strong>{lastResult.dish.country}</strong>!
          {:else}
            Your tap was <strong>{formatKm(lastResult.distance)}</strong> away — it's in
            <strong>{lastResult.dish.country}</strong>
          {/if}
        </div>
        <p class="ds-body reveal-fact">{lastResult.dish.fact}</p>
        <button class="ds-btn ds-btn-ink ds-btn-block" onclick={nextRound}>
          {roundIndex + 1 >= rounds.length ? "See my results" : "Next dish ➔"}
        </button>
      </aside>
    {/if}
  </div>

  {#if phase === "guessing"}
    <div class="actionbar">
      <button class="ds-btn ds-btn-ink ds-btn-lg" disabled={!guess} onclick={lockIn}>
        {guess ? "Lock it in" : "Tap the globe to guess"}
      </button>
      <span class="action-hint">{guess ? "Tap again to move your pin" : " "}</span>
    </div>
  {/if}

  {#if phase === "start"}
    <div class="panel intro ds-card">
      <div class="intro-emoji">🌍🍜</div>
      <h1 class="intro-title">
        Where in the world<br />was it <span class="ds-grad-text">born?</span>
      </h1>
      <p class="ds-body intro-copy">
        We name a famous dish. You spin the globe and tap the country it comes from. Land anywhere
        in the right country for full points — {ROUNDS_PER_GAME} dishes per game.
      </p>
      <button class="ds-btn ds-btn-ink ds-btn-lg" onclick={startGame}>Start tasting ➔</button>
      <p class="intro-credit">
        Food photos from Wikipedia / Wikimedia Commons · map data © Natural Earth
      </p>
    </div>
  {/if}

  {#if phase === "done"}
    <div class="panel summary ds-card">
      {#if totalScore >= 3500}
        <div class="confetti-anchor">
          <Confetti x={[-1.5, 1.5]} y={[-0.5, 1.5]} amount={80} fallDistance="120px" />
        </div>
      {/if}
      <div class="summary-eyebrow">Final score</div>
      <div class="summary-score">
        <span class="ds-grad-text">{totalScore.toLocaleString()}</span>
        <span class="summary-max">/ {maxScore.toLocaleString()}</span>
      </div>
      <div class="summary-verdict">{finalVerdict(totalScore)}</div>
      <div class="ds-progress summary-progress">
        <div class="ds-progress-fill" style={`width: ${(totalScore / maxScore) * 100}%`}></div>
      </div>
      <ul class="summary-rounds">
        {#each results as result (result.dish.id)}
          <li>
            <img class="summary-thumb" src={dishPhoto(result.dish)} alt={result.dish.name} />
            <span class="summary-dish">{result.dish.name}</span>
            <span class="summary-detail">
              {result.foundCountry ? result.dish.country : formatKm(result.distance)}
            </span>
            <span class="summary-points">+{result.points.toLocaleString()}</span>
          </li>
        {/each}
      </ul>
      <button class="ds-btn ds-btn-ink ds-btn-lg ds-btn-block" onclick={shareScore}>
        {shareState === "copied"
          ? "Copied! Send it to a friend"
          : shareState === "failed"
            ? "Couldn't copy — try again"
            : "Share my score"}
      </button>
      <button class="ds-btn ds-btn-out ds-btn-block" onclick={startGame}> Play again </button>
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
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100dvh;
    overflow: hidden;
    background: var(--ds-bg);
    font-family: var(--ds-font-body);
    color: var(--ds-ink);
  }

  .topbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px 22px;
    flex-shrink: 0;
  }
  .wordmark {
    font-weight: 900;
    font-size: 22px;
    letter-spacing: -0.03em;
  }
  .topbar-right {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .round-chip {
    padding: 6px 14px;
    border-radius: var(--ds-radius-pill);
    background: var(--ds-card);
    border: 1px solid var(--ds-rule);
    box-shadow: var(--ds-shadow-soft);
    font-weight: 600;
    font-size: 13px;
    color: var(--ds-ink-2);
  }
  .scorebox {
    display: flex;
    align-items: baseline;
    gap: 8px;
    padding: 6px 14px;
    border-radius: var(--ds-radius-pill);
    background: var(--ds-card);
    border: 1px solid var(--ds-rule);
    box-shadow: var(--ds-shadow-soft);
  }
  .scorebox-label {
    font-weight: 900;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: var(--ds-ink-3);
  }
  .scorebox-value {
    font-weight: 700;
    font-size: 16px;
    font-variant-numeric: tabular-nums;
  }

  /* ── the guessing chrome sits AROUND the globe, never over it ─────────── */
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
    padding: 10px 18px 10px 10px;
    max-width: min(92vw, 480px);
  }
  .prompt-photo {
    width: 64px;
    height: 64px;
    object-fit: cover;
    border-radius: var(--ds-radius-sm);
    border: 1px solid var(--ds-rule);
    flex-shrink: 0;
    display: block;
  }
  .prompt-label {
    font-weight: 900;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: var(--ds-ink-3);
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
  .globe-shadow {
    position: absolute;
    left: 50%;
    top: 50%;
    width: min(76vmin, 620px);
    height: min(76vmin, 620px);
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background: radial-gradient(circle, rgba(5, 5, 5, 0.1) 0%, rgba(5, 5, 5, 0) 62%);
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
    color: var(--ds-ink-3);
  }

  /* ── reveal: a side panel next to the globe, not on top of it ─────────── */
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
  .confetti-anchor {
    position: absolute;
    top: 0;
    left: 50%;
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
    border-radius: var(--ds-radius-sm);
    border: 1px solid var(--ds-rule);
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
    color: var(--ds-ink-2);
  }
  .reveal-distance {
    font-size: 14px;
    color: var(--ds-ink-2);
  }
  .reveal-fact {
    margin: 2px 0 8px;
    font-size: 14px;
    color: var(--ds-ink-3);
  }

  /* ── floating panels (start / summary only) ───────────────────────────── */
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
  .intro-emoji {
    font-size: 40px;
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
    max-width: 36ch;
  }
  .intro-credit {
    margin: 4px 0 0;
    font-size: 11px;
    color: var(--ds-ink-4);
  }

  .summary {
    top: 50%;
    transform: translate(-50%, -50%);
    width: min(92vw, 480px);
    max-height: min(86dvh, 640px);
    overflow-y: auto;
    padding: 30px 28px;
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
    letter-spacing: 0.04em;
    color: var(--ds-ink-3);
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
    color: var(--ds-ink-4);
  }
  .summary-verdict {
    font-weight: 600;
    font-size: 16px;
    color: var(--ds-ink-2);
  }
  .summary-progress {
    /* .ds-progress ships flex:1 (basis 0) which collapses to 0-height in this
       column-flex card — pin it back to its intended 8px bar. */
    flex: none;
    width: 100%;
    margin: 6px 0 4px;
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
    border-bottom: 1px solid var(--ds-rule);
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
    border: 1px solid var(--ds-rule);
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
    color: var(--ds-ink-3);
    font-size: 13px;
    font-variant-numeric: tabular-nums;
  }
  .summary-points {
    font-weight: 700;
    font-variant-numeric: tabular-nums;
    min-width: 58px;
    text-align: right;
  }

  /* ── lightbox ─────────────────────────────────────────────────────────── */
  .lightbox {
    position: fixed;
    inset: 0;
    z-index: 50;
    border: 0;
    padding: 24px;
    background: rgba(5, 5, 5, 0.6);
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
    border-radius: var(--ds-radius);
    background: #fff;
    box-shadow: 0 24px 60px rgba(5, 5, 5, 0.4);
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
