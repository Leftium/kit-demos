<script lang="ts">
	import '@picocss/pico';

	export let data;
</script>

<article class="container">
	<ul>
		<li>This +page imports PicoCSS. It does not import any other CSS.</li>
		<li>
			Yet this page's font-size becomes smaller than expected for PicoCSS because of CSS imported by
			other routes/components. Sometimes the font becomes (momentarily) larger on refresh (F5).
		</li>
		<li>
			In addition, Client-side navigation via the links below causes PicoCSS CSS to remain "active"
			even if the route doesn't import PicoCSS.
		</li>
	</ul>
	<ul>
		<li><a href="/with-picocss">With PicoCSS</a></li>
		<li><a href="/without-picocss">Without PicoCSS</a></li>
	</ul>
</article>
