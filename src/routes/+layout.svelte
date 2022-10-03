<script>
    export let data
</script>

<h1>Layout</h1>
<pre>routeId: {data.routeId}</pre>
<pre style='display: none;'>url: {data.url}</pre>

<a href='/route-a'>Route A</a>
<a href='/route-b'>Route B</a>

<slot></slot>
