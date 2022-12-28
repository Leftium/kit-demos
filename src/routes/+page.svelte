<script lang="ts">
    import { z } from 'zod'
    import { createForm } from 'felte'
    import { validator } from '@felte/validator-zod'
	import { onMount } from 'svelte';

    // Bindings
    let formElement: HTMLFormElement
    let optionB: HTMLOptionElement

    let dataFromForm: string[]
    let message = 'Waiting for submit...'

    // Schema: an array of strings with at least one string.
    const schema = z.object({
        myselect: z.string().array().min(1)
    });

    const { form, data, errors } = createForm({
        initialValues: {
            myselect: []
        },
        extend: validator({ schema }),
        onSubmit: (values) => {
            message = `Submit successful with values:
            ${JSON.stringify(values, null, 4)}`
        }
    })

    function handleChange() {
        dataFromForm = (new FormData(formElement)).getAll('myselect') as string[]
    }

    onMount(() => {
        // Programatically select option.
        // Felte does not update, even though the formdata has been updated.
        optionB.selected = true

        handleChange()
    })
</script>

<form bind:this={formElement} use:form on:change={handleChange}>
    <select name="myselect" multiple>
        <option value=A>Option A</option>
        <option bind:this={optionB} value=B>Option B</option>
        <option value=C>Option C</option>
    </select>
    <button type="submit">Submit</button>
</form>

<pre>
felte errors: {JSON.stringify($errors, null, 4)}
felte data: {JSON.stringify($data, null, 4)}
dataFromForm: {JSON.stringify(dataFromForm, null, 4)}

{message}
</pre>
