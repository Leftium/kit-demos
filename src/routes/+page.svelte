<script lang="ts">
	let email = ''

   function handleLogin() {
      console.log(email)
	}
</script>

<svelte:options runes={false} />

<button
   on:click|preventDefault={handleLogin}
>
   Log in
</button>
