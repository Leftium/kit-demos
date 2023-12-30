<script>
	import { onMount } from 'svelte';
	import { Loader } from '@googlemaps/js-api-loader';

	onMount(async function () {
		const loader = new Loader({
			apiKey: 'AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg',
			version: 'weekly'
		});

		const { Map } = await loader.importLibrary('maps');

		let map;

		async function initMap() {
			map = new Map(document.getElementById('map'), {
				center: { lat: -34.397, lng: 150.644 },
				zoom: 8
			});
		}

		initMap();
	});
</script>

<div id="map"></div>

<svelte:head>
	<script async src="https://polyfill.io/v3/polyfill.min.js?features=default"></script>
</svelte:head>

<style>
	#map {
		height: 500px;
		width: 800px;
	}
</style>
