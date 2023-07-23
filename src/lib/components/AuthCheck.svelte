<script lang="ts">
    import {user} from "$lib/firebase.js"
</script>

{#if $user}
    <slot></slot>
{:else}
    <p class="text-error my-10">
        You must be signd in to view this page.
        <a class="btn btn-primary" href="/login">Sign in</a>
    </p>
{/if}