<script lang="ts">
    export let title: string;
    export let tags: string[];
    export let rating: number;
    export let ratings: number;
</script>

<card>
    <img src="{title}.jpg" alt="recipetitle"/>
    <span class="title">{title}</span><span>{rating}/5 ({ratings})</span>
    <ul>{#each tags as tag}<li>{tag}</li>{/each}</ul>
</card>

<style lang="scss">
    card {
        width: 400px;
        display: inline-block;
        padding-bottom: 0.4em;
        background: #212121;
        height: 200px;
    }

    .title {
        font-size: 1.2em;
        margin: 0.2em;
    }

    img {
        height: 140px;
        width: 100%;
        object-fit: cover;
    }

    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
    }
    li {
        
        float: left;
        padding: 0.2em;
    }
</style>