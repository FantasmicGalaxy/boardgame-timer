<script>
    import { XIcon } from "svelte-feather-icons";

    export let open = true;
    export let title = "";
</script>

{#if open}
    <div class="background">
        <div class="modal">
            <div class="modal-header">
                <h2>{title}</h2>
                <button
                    on:click={() => {
                        open = false;
                    }}
                >
                    <XIcon size="28" />
                </button>
            </div>
            <div class="modal-body">
                <slot />
            </div>
        </div>
    </div>
{/if}

<style>
    .background {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        z-index: 2;

        background-color: rgba(0, 0, 0, 0.7);

        display: flex;
        align-items: center;
        justify-content: center;
    }
    .modal {
        background-color: var(--color-secondary);
        border-radius: var(--border-radius);
        min-width: 200px;
    }
    .modal-header {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.5rem;

        padding: 0.5rem 0.5rem 0.5rem 1rem;
        border-bottom: var(--border);
        background-color: var(--color-secondary);
        border-radius: var(--border-radius) var(--border-radius) 0 0;
    }
    .modal-header h2 {
        margin: 0;
        align-self: center;
        line-height: 1.2;
    }
    .modal-header button {
        color: var(--color-text-muted);
        border-color: transparent;
        border-radius: var(--border-radius);
        padding: 0.125rem;
    }
    .modal-header button:hover {
        border-color: var(--color-highlight);
    }

    .modal-body {
        padding: 1rem;
        background-color: var(--color-primary);
        border-radius: 0 0 var(--border-radius) var(--border-radius);
    }
</style>
