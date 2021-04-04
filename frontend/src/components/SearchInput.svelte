<script lang="ts">
    let query: string = "";


</script>

<input bind:value={query} aria-details="Searchbox for recipes" placeholder="Search for recipes" type="text"/>
{#if query != ""}
    <filterbox>
        <p class="header">Nationality</p>
        <span class="element">Filter1</span>
        <span class="element">Filter2</span>
    </filterbox>
{/if}

<style lang="scss">
    input {
        width: 100%;
        margin-bottom: 1em;
    }

    filterbox {
        padding: 0.7em;
        display: block;
        color: black;
        background: white;
        width: 100%;
        margin-bottom: 1em;
    }

    p {
        margin-top: 0;
        margin-bottom: 0.5em;
    }

    span {
        margin: 0.3em;
    }
</style>