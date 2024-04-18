<script lang="ts">
	import { moduleA } from '$lib/module-a';
	import { moduleB } from '$lib/module-b';
	import { PUBLIC_ENV } from '$env/static/public';
</script>

<p>{moduleA}</p>

<p>{moduleB}</p>

<p>{PUBLIC_ENV}</p>
