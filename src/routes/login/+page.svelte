<script lang="ts">
    // this section can be its own component
    import { auth, user } from "$lib/firebase.js"
    import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

    async function signInWithGoogle() {
        const provider = new GoogleAuthProvider()
        const user = await signInWithPopup(auth, provider)
        console.log(user)
    }
</script>

{#if $user}
    <h2 class="card-title"> Welcome, {$user.displayName}</h2>
    <p class="text-center text-success">You are logged in</p>
    <button class="btn btn-danger" on:click={() => signOut(auth)}>Sign Out</button>
{:else}
<button class="btn btn-primary" on:click={signInWithGoogle}>Login in with Google</button>
{/if}