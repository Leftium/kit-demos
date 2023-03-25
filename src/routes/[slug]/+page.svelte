<script lang="ts">
  import type { PageData } from "./$types";

  import { slugStore } from "$lib/store";

  import Component from "$lib/Component.svelte";

  export let data: PageData;

  console.log("Set slug store");
  slugStore.initSlug(data.slug);
</script>

<div>
  <a href="/">Home</a> | <a href="slugA">slugA</a> | <a href="slugB">slugB</a> |
  <a href="slugC">slugC</a>
</div>

<pre>{data.slug}</pre>

<pre>{JSON.stringify($slugStore)}</pre>

<Component />
