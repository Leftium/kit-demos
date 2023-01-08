<script lang="ts">
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
	<li>Trigger HMR (change increment size)</li>
	<li>Inspect count (<b>not</b> preserved as expected)</li>
</ol>
