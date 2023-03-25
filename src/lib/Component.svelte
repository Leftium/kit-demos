<script lang="ts">
  import { slugStore } from "$lib/store";
  import { onMount, tick } from "svelte";

  let thisBinding: HTMLElement;

  const handleIncrementProp = () => {
    console.log("handleIncrementProp");
    $slugStore.count = $slugStore.count + 1;
    $slugStore = $slugStore;
    console.log($slugStore);
    console.log({ thisBinding });
  };

  const handleIncrementMethod = () => {
    console.log("handleIncrementMethod");
    slugStore.increment();
    console.log($slugStore);
    console.log({ thisBinding });
  };

  onMount(() => {
    console.log("Add event listeners");

    window.addEventListener("increment-prop", handleIncrementProp);
    window.addEventListener("increment-method", handleIncrementMethod);

    return () => {
      /*
      // Uncommenting this block fixes the issues!
      console.log("Remove event listeners");
      window.removeEventListener("increment-prop", handleIncrementProp);
      window.removeEventListener("increment-method", handleIncrementMethod);
      */
    };
  });
</script>

<h1 bind:this={thisBinding}>Component:</h1>
<pre>{JSON.stringify($slugStore)}</pre>

<button on:click={handleIncrementProp}>Increment via property access</button>

<button on:click={handleIncrementMethod}>Increment via method call</button>

<button
  on:click={() => {
    dispatchEvent(new CustomEvent("increment-prop", {}));
  }}>Increment via custom event property access</button
>

<button
  on:click={() => {
    dispatchEvent(new CustomEvent("increment-method", {}));
  }}>Increment via custom event method call</button
>

<div>
  {thisBinding}
</div>
