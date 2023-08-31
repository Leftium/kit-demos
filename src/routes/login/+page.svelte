<script lang="ts">
	import Userfront from '@userfront/core';

	import { PUBLIC_USERFRONT_GLOBAL_TENANT } from '$env/static/public';

	let errorMessage = '';

	let results = {};

	// bindings
	let email = 'vee@mailinator.com';
	let password = 'testmodepassword';

	async function handleGoogleLogin() {
		await Userfront.init(PUBLIC_USERFRONT_GLOBAL_TENANT);
		try {
			await Userfront.login({
				method: 'google'
			});
		} catch (error) {
			errorMessage = (error as Error).message;
		}
	}

	async function handlePasswordLogin() {
		await Userfront.init(PUBLIC_USERFRONT_GLOBAL_TENANT);
		try {
			await Userfront.login({
				method: 'password',
				email,
				password
			});
		} catch (error) {
			errorMessage = (error as Error).message;
		}
	}
</script>

<label>Email <input bind:value={email} /></label><label>Email <input bind:value={password} /></label
>

<button on:click|preventDefault={handlePasswordLogin}> Password Login </button>

<hr />

<button on:click|preventDefault={handleGoogleLogin}> Google Login </button>

<hr />

<pre>{JSON.stringify({ errorMessage }, null, 4)}</pre>

<hr />

<pre>{JSON.stringify({ results }, null, 4)}</pre>
