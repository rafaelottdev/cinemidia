<template>
   <section class="home_section">
        <div class="cover_list_wrapp">
            <ul class="cover_list" :style="{transform: `translateX(-${currentIndex * 100}%)`}">
                <li v-for="movie in movies.slice(0, 8)" :key="movie.id" class="cover_item">
                    <div 
                        class="movie_background" 
                        :style="{
                            backgroundImage: `url(${TMDB_IMAGE_URL}/original${movie.backdrop_path})`}"
                    >
                    </div>

                    <div class="movie_info">
                        <h1>{{ movie.title }}</h1>

                        <div class="movie_stats">
                            <div class="stats">
                                <p>{{ movie.vote_average?.toFixed(1) ?? '0.0' }}</p>

                                <svg viewBox="0 0 20 19">
                                    <path d="M3.825 19L5.45 11.975L0 7.25L7.2 6.625L10 0L12.8 6.625L20 7.25L14.55 11.975L16.175 19L10 15.275L3.825 19Z"/>
                                </svg>
                            </div>

                            <ul class="genres_list">
                                <li>
                                    {{ getGenreNames(movie.genre_ids).slice(0, 3).join(' • ') }}
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
            </ul>
        </div>

        <div class="poster_list_wrapp">
            <ul class="poster_list" :style="{transform: `translateX(-${posterIndex}px)`}">
                <li v-for="(movie, index) in movies.slice(0, 8)" :key="movie.id" class="poster_item" :class="{active: index === currentIndex}">
                    <img v-if="movie.poster_path" :src="`${TMDB_IMAGE_URL_500}${movie.poster_path}`" :alt="movie.title">
                </li>
            </ul>
        </div>

        <div class="slider_controller_container">
            <buttons class="left_controller controller" @click="leftClick">
                <svg viewBox="0 0 13 13">
                    <path d="M1.08819 4.77951C0.759555 4.94552 0.484663 5.19334 0.292968 5.49643C0.101273 5.79951 0 6.14643 0 6.50001C0 6.85359 0.101273 7.2005 0.292968 7.50359C0.484663 7.80667 0.759555 8.05449 1.08819 8.22051L9.85458 12.7489C11.2662 13.4788 13 12.5299 13 11.0291V1.97159C13 0.470136 11.2662 -0.478186 9.85458 0.250442L1.08819 4.77951Z"/>
                </svg>
            </buttons>

            <buttons class="right_controller controller" @click="rightClick">
                <svg viewBox="0 0 13 13">
                    <path d="M1.08819 4.77951C0.759555 4.94552 0.484663 5.19334 0.292968 5.49643C0.101273 5.79951 0 6.14643 0 6.50001C0 6.85359 0.101273 7.2005 0.292968 7.50359C0.484663 7.80667 0.759555 8.05449 1.08819 8.22051L9.85458 12.7489C11.2662 13.4788 13 12.5299 13 11.0291V1.97159C13 0.470136 11.2662 -0.478186 9.85458 0.250442L1.08819 4.77951Z"/>
                </svg>
            </buttons>
        </div>
   </section>
</template>

<script setup>
    import { ref, onMounted, computed } from 'vue'

    const API_KEY = "129b3b33196209a2f32976644976b80a"
    const BASE_URL = "https://api.themoviedb.org/3"
    const TMDB_IMAGE_URL = "https://image.tmdb.org/t/p"
    const TMDB_IMAGE_URL_500 = "https://image.tmdb.org/t/p/w500"

    const movies = ref([])
    const genres = ref([])

    async function getPopularMovies() {
        let response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=pt-BR`)
        let userData = await response.json()

        movies.value = userData.results
    }

    async function getGenres() {
        let response = await fetch(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=pt-BR`)
        let userData = await response.json()

        genres.value = userData.genres
    }

    function getGenreNames(ids) {
        return genres.value
            .filter(genre => ids.includes(genre.id))
            .map(genre => genre.name)
    }

    onMounted(() => {
        getPopularMovies()
        getGenres()
    })

    const currentIndex = ref(0)
    const maxIndex = computed(() => {
        return Math.min(movies.value.length, 8) - 1
    })

    const wPoster = 220 + 20 // tamanho do poster + espaçamento entre cada poster
    const posterIndex = ref(0)

    function leftClick() {
        if (currentIndex.value > 0) {
            currentIndex.value--
            posterIndex.value -= wPoster
        }
    }

    function rightClick() {
        if (currentIndex.value < maxIndex.value) {
            currentIndex.value++
            posterIndex.value += wPoster
        }
    }
</script>

<style>
    .home_section {
        height: 100vh;
        position: relative;
    }

    .cover_list_wrapp {
        overflow-x: hidden;
    }

    .cover_list {
        display: flex;

        transition: .3s;
    }

    .cover_item {
        min-width: 100vw;
        height: 100vh;

        position: relative;
    }

    .movie_background {
        width: 100vw;
        height: 100vh;

        position: absolute;
        inset: 0;
        z-index: 0;

        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        filter: brightness(100%);
    }

    .movie_info {
        margin-top: 170px;

        position: relative;
        z-index: 1;
    }

    .movie_info > h1 {
        margin-bottom: 20px;
        margin-left: 30px;

        font-size: 37px;
        letter-spacing: 2px;
        font-family: var(--main_title);

        color: white;
    }

    .movie_stats {
        min-height: 30px;

        padding: 5px 20px;

        display: inline-flex;
        align-items: center;
        gap: 20px;

        border-bottom-right-radius: 10px;
        border-top-right-radius: 10px;

        font-family: 'inter';
        font-size: 13px;
        letter-spacing: .5px;

        color: white;
        background-color: #0F0F0F;
    }

    .stats {
        display: flex;
    }

    .stats > p {
        margin-right: 1px;
    }

    .stats > svg {
        width: 13px;
        height: 12px;

        margin-top: 1.5px;

        fill: yellow;
    }

    /* .genres_list {
    
    } */

    .poster_list_wrapp {
        padding: 15px 0 15px 15px;
        
        position: absolute;
        left: 50px;
        bottom: 50px;

        overflow-x: hidden;
    }

    .poster_list {
        display: flex;
        justify-content: space-evenly;
        align-items: center;

        transition: .3s;
    }

    .poster_item {
        width: 220px;
        height: 280px;

        border-radius: 20px;
        overflow: hidden;

        box-shadow: 0px 0px 1px 1px rgba(255, 255, 255, 0.164);
    }

    .poster_item:not(:last-child) {
        margin-right: 20px;
    }

    .poster_item > img {
        width: 100%;
        height: 100%;

        /* border: 1px solid rgba(255, 255, 255, 0.197); */
    }

    .slider_controller_container {
        width: 100%;

        display: flex;
        justify-content: center;

        position: absolute;
        bottom: 10px;
    }

    .controller {
        width: 30px;
        height: 30px;

        cursor: pointer;

        display: flex;
        align-items: center;
        justify-content: center;

        background-color: rgba(15, 15, 15, .7);
    }

    .controller:hover {
        background-color: black;
    }

    .controller > svg {
        width: 13px;
        fill: rgba(255, 255, 255, 0.5);
    }

    .left_controller {
        border-bottom-left-radius: 10px;
        border-top-left-radius: 10px;
        margin-right: 2px;
    }

    .right_controller {
        border-bottom-right-radius: 10px;
        border-top-right-radius: 10px;
    }

    .right_controller > svg {
        transform: rotateY(180deg);
    }

    /* CSS Interativo */

    .poster_item.active {
        transform: scale(1.1);
        box-shadow: 0px 0px 1px 1px rgb(255, 255, 255);
    }
</style>
