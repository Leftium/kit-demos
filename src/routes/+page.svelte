<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import { Loader } from '@googlemaps/js-api-loader';

	import { PUBLIC_GOOGLEMAPS_API_KEY } from '$env/static/public';

	// Bindings
	let mapElement: HTMLElement;

	onMount(async function () {
		const loader = new Loader({
			apiKey: PUBLIC_GOOGLEMAPS_API_KEY,
			version: 'weekly'
		});

		const { Map } = await loader.importLibrary('maps');

		let map = new Map(mapElement, {
			center: { lat: -34.397, lng: 150.644 },
			zoom: 8
		});
	});
</script>

<div bind:this={mapElement} style:height={'100%'} style:width={'100%'} />
