<script>
	// @hmr:keep
	let count = 0;

	function handleClick() {
		count += 1;
	}
</script>

<h1>{'<script lang="ts">'}</h1>

<button on:click={handleClick}>
	clicks: {count}
</button>

<ol>
	<li>Click button</li>
	<li>Change increment size</li>
	<li>Inspect count (preserved as expected)</li>
</ol>
