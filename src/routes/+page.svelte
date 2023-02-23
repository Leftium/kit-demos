<script lang="ts">
	const items = [1, 2, 3];
</script>

<a href="other-page">Other Page</a>

<h2>A. SSR inserts spaces; CSR doesn't insert</h2>

<button>0</button>{#each items as item}
	<button>{item}</button>
{/each}

<h2>B. SSR inserts a space; CSR inserts a space</h2>

<button>0</button>
{#each items as item}
	<button>{item}</button>
{/each}

<h2>C. SSR doesn't insert spaces; CSR doesn't insert</h2>

{#each items as item}
	<button>{item}</button>
{/each}
