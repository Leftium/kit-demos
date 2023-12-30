<script lang="ts">
	import { onMount } from 'svelte';
	import { Loader } from '@googlemaps/js-api-loader';

	// Bindings
	let mapElement: HTMLElement;

	onMount(async function () {
		const loader = new Loader({
			apiKey: 'AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg',
			version: 'weekly'
		});

		const { Map } = await loader.importLibrary('maps');

		let map = new Map(mapElement, {
			center: { lat: -34.397, lng: 150.644 },
			zoom: 8
		});
	});
</script>

<div bind:this={mapElement} style:height={'500px'} style:width={'800px'} />
