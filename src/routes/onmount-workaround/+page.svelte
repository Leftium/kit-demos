<script lang="ts">
	// Base styles for media player and provider (~400B).
	import 'vidstack/player/styles/base.css';

	import 'vidstack/player';
	import 'vidstack/player/ui';

	import type { MediaPlayerElement } from 'vidstack/elements';
	import { onMount } from 'svelte';

	let player: MediaPlayerElement;
	let mounted = false;

	onMount(() => {
		mounted = true;
	});
</script>

<a href="/">No workaround</a> <a href="/onmount-workaround">onMount workaround</a>

<h1>Demo of Vidstack + Svelte(Kit) bug</h1>

<button on:click={() => (player.paused = !player?.paused)}
	>{player?.paused ? 'Play' : 'Pause'}
</button>

<pre>player?.paused: {player?.paused}</pre>

<media-player
	bind:this={player}
	title="Sprite Fight"
	src="https://stream.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/low.mp4"
>
	{#key mounted}
		<media-provider />
	{/key}
</media-player>

<style>
	media-player {
		display: block;
		min-height: 100px;
		border: 2px solid cyan;
	}
</style>
