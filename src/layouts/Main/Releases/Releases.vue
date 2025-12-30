<template>
    <section class="releases_section">
        <div class="releases_container">
            <div v-for="movie in upComingMovies.slice(0, 4)" class="movie_card">
                <div class="card_image">
                    <img v-if="movie.poster_path" :src="`${TMDB_IMAGE_URL_500}${movie.poster_path}`" :alt="movie.title">
                </div>

                <div class="movie_info">
                    <div class="movie_content">
                        <h3>{{ movie.title }}</h3>

                        <p>{{ movie.overview }}</p>
                    </div>

                    <div class="movie_meta">
                        <ul class="genres_list">
                            <li>{{ getGenreNames(movie.genre_ids).slice(0, 3).join(' • ') }}</li>
                        </ul>

                        <button class="movie_notify">
                            <svg viewBox="0 0 15 18">
                                <path d="M5.83333 16.2857H9.16667C9.16667 17.2286 8.41667 18 7.5 18C6.58333 18 5.83333 17.2286 5.83333 16.2857ZM15 14.5714V15.4286H0V14.5714L1.66667 12.8571V7.71429C1.66667 5.05714 3.33333 2.74286 5.83333 1.97143V1.71429C5.83333 0.771429 6.58333 0 7.5 0C8.41667 0 9.16667 0.771429 9.16667 1.71429V1.97143C11.6667 2.74286 13.3333 5.05714 13.3333 7.71429V12.8571L15 14.5714ZM11.6667 7.71429C11.6667 5.31429 9.83333 3.42857 7.5 3.42857C5.16667 3.42857 3.33333 5.31429 3.33333 7.71429V13.7143H11.6667V7.71429Z"/>
                            </svg>
                        </button>
                    </div>
                </div>

                <div class="release_date">{{ formatDate(movie.release_date) }}</div>
            </div>
        </div>

        <div class="background_bow">
            <img :src="arco" alt="">
        </div>
    </section>
</template>

<script setup>
    import { API_KEY, BASE_URL, TMDB_IMAGE_URL, TMDB_IMAGE_URL_500 } from "@/config/tmdb"
    import { ref, onMounted } from "vue";
    import arco from "/public/arco.png"

    const upComingMovies = ref([])
    const genres = ref([])

    async function getUpComingMovies() {
        let response = await fetch(`${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=pt-BR`)
        let userData = await response.json()

        upComingMovies.value = userData.results
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

    function formatDate(dateString) {
        if (!dateString) return ''

        const date = new Date(dateString)

        return date.toLocaleDateString('pt-BR', {
            day: 'numeric',
            month: 'long'
        })
    }

    onMounted(() => {
        getUpComingMovies()
        getGenres()
    })
</script>

<style scoped>
    .releases_section {
        position: relative;
        
        box-shadow: 0px 0px 25px 30px #0F0F0F;
        background-color: #0F0F0F;
    }

    .releases_container {
        padding: 80px 0px;

        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 50px;

        place-items: center;
    }

    .movie_card {
        width: 600px;
        height: 230px;

        display: flex;
        position: relative;

        border-radius: 40px;
        overflow: hidden;

        background-color: #EDEDED;
    }

    .card_image {
        width: 170px;
        height: 230px;

        flex-shrink: 0;
    }

    .card_image > img {
        width: 100%;
        height: 100%;

        object-fit: cover;
        display: block;
    }

    .movie_info {
        padding: 25px 0px 0px 0px;
        font-family: var(--info_movie);
    }

    .movie_content {
        padding: 0 20px;
        margin-bottom: 15px;
    }

    .movie_content > h3 {
        margin-bottom: 10px;

        font-size: 21px;
        letter-spacing: 1px;
        font-family: var(--main_title);
    }

    .movie_content > p {
        font-size: 13px;
    }

    .movie_meta {
        display: flex;
        align-items: center;
    }

    .movie_meta > ul {
        height: 25px;
        padding: 0px 15px;

        display: flex;
        align-items: center;

        font-size: 12px;
        margin-right: 30px;

        border-bottom-right-radius: 5px;
        border-top-right-radius: 5px;

        color: white;
        background-color: #0F0F0F;
    }

    .movie_notify {
        width: 30px;
        height: 30px;

        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: 100%;
        background-color: #0F0F0F;
    }

    .movie_notify:hover {
        cursor: pointer;
        transform: scale(1.1);

        transition: .1s;
    }

    .movie_notify > svg {
        width: 15px;
        height: 18px;
        fill: white;
    }

    .release_date {
        padding: 3px 15px;

        position: absolute;
        top: 15px;
        right: -15px;

        transform: rotateZ(30deg);

        text-transform: capitalize;
        font-family: 'oswald';
        font-size: 13px;
        letter-spacing: .5px;

        border-radius: 8px;

        color: white;
        background-color: #E50914;
    }

    .background_bow {
        display: flex;
        justify-content: center;
    }

    .background_bow > img {
        width: 100vw;
        height: 60px;
    }
</style>
