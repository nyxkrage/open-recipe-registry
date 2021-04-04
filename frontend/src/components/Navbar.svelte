<nav>
    <span>OpenRecipeRegistry</span>
    <a class="active" href="/">Home</a>
    <a href="/recipes">Recipes</a>
    <a href="/search">Search</a>
    <right>
        <a href="/signin">Sign In</a>
        <a href="/signup">Sign Up</a>
    </right>
</nav>

<style lang="scss">
nav {
    overflow: hidden;
    background-color: #333;
}

nav a, nav span {
    float: left;
    color: #f2f2f2;
    text-align: center;
    padding: 1em 16px;
    text-decoration: none;
    font-size: 1em;
}

nav a:hover {
    background-color: #ddd;
    color: black;
}

nav a.active {
    background-color: #4CAF50;
    color: white;
}

right {
    float: right;
}
</style>