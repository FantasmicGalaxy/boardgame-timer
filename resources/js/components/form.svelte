<script>
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    let formRef;

    function save() {
        const fd = new FormData(formRef);
        const data = {};
        for (const [key, value] of fd) {
            data[key] = value;
        }

        dispatch("save", data);
    }

    function handleSubmit(event) {
        event.preventDefault();

        save();
    }

    export const form = {
        save,
    };
</script>

<form on:submit={handleSubmit} bind:this={formRef}>
    <slot />
</form>

<style>
</style>
