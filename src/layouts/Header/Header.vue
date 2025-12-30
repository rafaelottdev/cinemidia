<template>
    <header class="header">
        <nav class="main_nav">
            <ul class="nav_list">
                <li class="nav_item">
                    <a href="#">Filmes</a>
                </li>

                <li class="nav_item">
                    <a href="#">Séries</a>
                </li>

                <li class="nav_item">
                    <a href="#" class="logo">
                        <img :src="main_logo" alt="Logo principal do site">
                    </a>
                </li>

                <li class="nav_item">
                    <a href="#">+Populares</a>
                </li>

                <li class="nav_item">
                    <a href="#">Watchlist</a>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script setup>
    import main_logo from "/main-logo.png"
</script>

<style scoped>
    .header {
        width: 100%;
        height: 80px;

        position: fixed;
        z-index: 10;
    }

    .main_nav {
        height: 100%;
    }

    .nav_list {
        height: 100%;
        padding-top: 10px;

        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }

    .nav_item {
    }

    .nav_item > a {
        padding: 2px 15px;

        font-size: 13px;
        font-family: var(--header_font);

        letter-spacing: 1px;

        border-radius: 10px;

        color: white;
    }

    .nav_item > a:hover {
        color: black;
        background-color: white;
    }

    .logo {
        display: block;
    }

    .logo > img {
        width: 30px;
    }
</style>
