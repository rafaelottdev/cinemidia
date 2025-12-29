<template>
    <section>
        <div v-for="movie in upComingMovies.slice(0, 4)">
            <div>
                <img v-if="movie.poster_path" :src="`${TMDB_IMAGE_URL_500}${movie.poster_path}`" :alt="movie.title">
            </div>

            <div>
                <div>
                    <h3>{{ movie.title }}</h3>

                    <p>{{ movie.overview }}</p>
                </div>

                <div>
                    <ul>
                        <li>{{ getGenreNames(movie.genre_ids).slice(0, 3).join(' • ') }}</li>
                    </ul>

                    <div>
                        <svg width="15" height="18" viewBox="0 0 15 18" fill="black">
                            <path d="M5.83333 16.2857H9.16667C9.16667 17.2286 8.41667 18 7.5 18C6.58333 18 5.83333 17.2286 5.83333 16.2857ZM15 14.5714V15.4286H0V14.5714L1.66667 12.8571V7.71429C1.66667 5.05714 3.33333 2.74286 5.83333 1.97143V1.71429C5.83333 0.771429 6.58333 0 7.5 0C8.41667 0 9.16667 0.771429 9.16667 1.71429V1.97143C11.6667 2.74286 13.3333 5.05714 13.3333 7.71429V12.8571L15 14.5714ZM11.6667 7.71429C11.6667 5.31429 9.83333 3.42857 7.5 3.42857C5.16667 3.42857 3.33333 5.31429 3.33333 7.71429V13.7143H11.6667V7.71429Z"/>
                        </svg>
                    </div>
                </div>
            </div>

            <div>{{ movie.release_date }}</div>
        </div>
    </section>
</template>

<script setup>
    import { API_KEY, BASE_URL, TMDB_IMAGE_URL, TMDB_IMAGE_URL_500 } from "@/config/tmdb"
    import { ref, onMounted } from "vue";

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

    onMounted(() => {
        getUpComingMovies()
        getGenres()
    })
</script>

<style>

</style>
