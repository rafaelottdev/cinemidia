<template>
    <header :class="{ scrolled: isScrolled }" class="header">
        <nav class="main_nav">
            <ul class="nav_list">
                <li class="nav_item">
                    <RouterLink to="/filmes">Filmes</RouterLink>
                </li>

                <li class="nav_item">
                    <RouterLink to="/series">Séries</RouterLink>
                </li>

                <li class="nav_item">
                    <RouterLink to="/" class="logo">
                        <img :src="main_logo" alt="Logo principal do site">
                    </RouterLink>
                </li>

                <li class="nav_item">
                    <RouterLink to="populares">+Populares</RouterLink>
                </li>

                <li class="nav_item">
                    <RouterLink to="watchlist">Watchlist</RouterLink>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script setup>
    import { ref, onMounted, onUnmounted } from "vue"
    import { RouterLink } from "vue-router"
    import main_logo from "/main-logo.png"

    const isScrolled = ref(false)

    function handleScroll() {
        isScrolled.value = window.scrollY > 0
    }

    onMounted(() => {
        window.addEventListener("scroll", handleScroll)
    })

    onUnmounted(() => {
        window.removeEventListener("scroll", handleScroll)
    })
</script>

<style scoped>
    .header {
        width: 100%;
        height: 80px;

        padding: 0px 150px;

        position: fixed;
        z-index: 10;
    }

    .header::after {
        height: 0%;

        content: "";
        position: absolute;
        inset: 0;

        transform-origin: top;

        background-color: rgba(0, 0, 0, 0.87);
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;

        z-index: -1;

        transition: .1s ease;
    }

    .header.scrolled::after {
        height: 100%;
    }

    .main_nav {
        height: 100%;
    }

    .nav_list {
        height: 100%;
        padding-top: 10px;

        display: flex;
        justify-content: space-between;
        align-items: center;
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
        position: absolute;
        left: 50%;
        top: 20px;
        transform: translateX(-50%);
        display: block;
    }

    .logo > img {
        width: 30px;
    }
</style>
