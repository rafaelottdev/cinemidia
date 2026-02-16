<template>
    <section class="popular_section">
        <div class="movie_container">
            <button class="left_controller controller" @click="leftClick">
                <svg viewBox="0 0 13 13">
                    <path d="M1.08819 4.77951C0.759555 4.94552 0.484663 5.19334 0.292968 5.49643C0.101273 5.79951 0 6.14643 0 6.50001C0 6.85359 0.101273 7.2005 0.292968 7.50359C0.484663 7.80667 0.759555 8.05449 1.08819 8.22051L9.85458 12.7489C11.2662 13.4788 13 12.5299 13 11.0291V1.97159C13 0.470136 11.2662 -0.478186 9.85458 0.250442L1.08819 4.77951Z"/>
                </svg>
            </button>

            <ul class="movie_list" :style="{transform: `translateX(-${currentIndex * 100}%)`}">
                <li v-for="movie in movies.slice(10, 15)" :key="movie.id" class="movie_item">
                    <div :style="{backgroundImage: `url(${TMDB_IMAGE_URL}/original${movie.backdrop_path})`}" class="movie_background"></div>

                    <div class="movie_info">
                        <h3>{{ movie.title }}</h3>

                        <div class="movie_stats">
                            <p>{{ movie.overview }}</p>

                            <ul class="genres_list">
                                <li>{{ getGenreNames(movie.genre_ids).slice(0, 1).join('') }}</li>

                                <li>{{ getGenreNames(movie.genre_ids).slice(1, 2).join('') }}</li>

                                <li v-if="getGenreNames(movie.genre_ids).slice(2, 3).length">
                                    {{ getGenreNames(movie.genre_ids).slice(2, 3)[0] }}
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="movie_poster">
                        <img v-if="movie.poster_path" :src="`${TMDB_IMAGE_URL_500}${movie.poster_path}`" :alt="movie.title">
                    </div>
                </li>
            </ul>

            <button class="right_controller controller" @click="rightClick">
                <svg viewBox="0 0 13 13">
                    <path d="M1.08819 4.77951C0.759555 4.94552 0.484663 5.19334 0.292968 5.49643C0.101273 5.79951 0 6.14643 0 6.50001C0 6.85359 0.101273 7.2005 0.292968 7.50359C0.484663 7.80667 0.759555 8.05449 1.08819 8.22051L9.85458 12.7489C11.2662 13.4788 13 12.5299 13 11.0291V1.97159C13 0.470136 11.2662 -0.478186 9.85458 0.250442L1.08819 4.77951Z"/>
                </svg>
            </button>
        </div>
    </section>
</template>

<script setup>
    import { ref, onMounted, computed } from 'vue'
    import { API_KEY, BASE_URL, TMDB_IMAGE_URL, TMDB_IMAGE_URL_500 } from "@/config/tmdb"

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

    let currentIndex = ref(0)
    let maxIndex = computed(() => {
        return Math.min(movies.value.length, 5) - 1
    })
    const wPoster = 1000

    function leftClick() {
        if(currentIndex.value > 0) {
            currentIndex.value--
        }
    }

    function rightClick() {
        if(currentIndex.value < maxIndex.value) {
            currentIndex.value++
        }
    }

    onMounted(() => {
        getPopularMovies()
        getGenres()
    })
</script>

<style scoped>
    .popular_section {
        padding: 84px 0px 50px 0px;
        background-color: #281f1f;
    }

    .movie_container {
        width: 1000px;
        height: 500px;

        margin: 31px auto 0 auto;

        position: relative;
        overflow: hidden;

        border-radius: 50px;
    }

    .left_controller {
        top: 50%;
        left: 30px;
        transform: translateY(-50%);

        border-bottom-left-radius: 10px;
        border-top-left-radius: 10px;
    }

    .right_controller {
        top: 50%;
        right: 30px;
        transform: translateY(-50%) rotateZ(900deg);

        border-bottom-left-radius: 10px;
        border-top-left-radius: 10px;
    }

    .controller {
        width: 35px;
        height: 35px;

        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        z-index: 1;
        cursor: pointer;

        background-color: rgba(15, 15, 15, 0.7);
    }

    .controller:hover {
        background-color: black;
    }

    .controller:hover > svg {
        fill: rgba(255, 255, 255, 0.7);
    }

    .controller > svg {
        width: 15px;

        fill: rgba(255, 255, 255, 0.5);
    }

    .movie_list {
        height: 100%;
        display: flex;

        transition: .3s;
    }

    .movie_item {
        min-width: 100%;
        height: 100%;

        position: relative;
    }

    .movie_background {
        width: 100%;
        height: 100%;

        position: absolute;
        inset: 0;
        z-index: 0;

        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        filter: brightness(40%);
    }

    .movie_info {
        width: 500px;

        margin: 100px 0px 0px 110px;

        position: relative;
        color: white;
    }

    .movie_info > h3 {
        margin-bottom: 15px;

        font-size: 1.7em;
        letter-spacing: 1.5px;
        font-family: var(--main_title);
    }

    .movie_stats > p {
        margin-bottom: 13px;

        font-size: 13px;
        font-family: var(--info_movie);
        line-height: 1.3rem;
        letter-spacing: .5px;
    }

    .genres_list {
        display: flex;
    }

    .genres_list > li {
        padding: 5px 10px;

        border-radius: 20px;

        font-size: 12px;
        font-family: var(--info_movie);
        text-transform: capitalize;
        letter-spacing: .5px;

        color: black;
        background-color: white;
    }

    .genres_list > li:not(:last-child) {
        margin-right: 10px;
    }

    .movie_poster {
        width: 120px;
        height: 155px;

        position: absolute;
        bottom: 30px;
        right: 150px;

        border-radius: 10px;
        overflow: hidden;
    }

    .movie_poster > img {
        width: 100%;
        height: 100%;
    }
</style>
