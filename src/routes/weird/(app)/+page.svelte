<h1>Weird Stacktrace</h1>
<p>This page intentionally triggers a SvelteKit error. (Check the browser tools dev console.)</p>

<ul>
	<li><a href="/">Normal stacktrace</a></li>
	<li><a href="/weird">Weird stacktrace</a></li>
</ul>

{#each {} as item}
	oops!
{/each}
