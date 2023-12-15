<script lang="ts">
	export let form;
</script>

<h1>Without ISR</h1>

<form method="POST" action="?/myAction">
	<button>Submit</button>
</form>

{form?.success}
