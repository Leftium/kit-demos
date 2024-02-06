<script lang="ts">
	// import '@picocss/pico';
	import Common from '$lib/Common.svelte';

	export let data;
</script>

<ul>
	<li>This +page does *not* import PicoCSS.</li>
	<li>
		It does not import any CSS, but it imports a Common.svelte component that imports some global
		CSS.
	</li>
	<li>When loaded from the server, the CSS/layout is not broken.</li>
	<li>
		However, when loaded via client-side navigation, the CSS/layout is broken due to conflicts with
		PicoCSS.
	</li>
	<li>Even the PicoCSS sytem "dark mode" carries over to this page.</li>
</ul>

<Common {data} />
