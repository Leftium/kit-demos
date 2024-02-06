<script lang="ts">
	import '@picocss/pico';
	import Common from '$lib/Common.svelte';

	export let data;
</script>

<ul>
	<li>This +page imports PicoCSS.</li>
	<li>PicoCSS conflicts with the CSS imported by the Common.svelte component.</li>
	<li>So the layout is alway broken on this page.</li>
</ul>

<Common {data} />
