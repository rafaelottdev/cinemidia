<template>
    <section class="trailer_section">
        <div class="trailer_wrapp">
            <iframe
                v-if="trailerKey"
                :src="`https://www.youtube.com/embed/${trailerKey}`"
                frameborder="0"
                allow="autoplay; encrypted-media"
                allowfullscreen
            ></iframe>
        </div>
    </section>
</template>

<script setup>
    import { ref, onMounted } from "vue"
    import { API_KEY, BASE_URL } from "@/config/tmdb"

    const trailerKey = ref(null)

    async function getUpComingMovies() {
        const response = await fetch(`${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=pt-BR`)

        const data = await response.json()

        const firstMovie = data.results[0]

        if (firstMovie?.id) {
            getTrailer(firstMovie.id)
        }
    }

    async function getTrailer(movieId) {
      const response = await fetch(`${BASE_URL}/movie/${movieId}/videos?api_key=${API_KEY}&language=pt-BR`)

        const data = await response.json()

        const trailer = data.results.find(
            video => video.type === "Trailer" && video.site === "YouTube"
        )

        if (trailer) {
            trailerKey.value = trailer.key
        }
    }

    onMounted(() => {
        getUpComingMovies()
    })
</script>

<style scoped>
    .trailer_section {
    }

    .trailer_wrapp {
        padding: 100px 0px;

        position: relative;
        
        display: flex;
        align-items: center;
        justify-content: center;

        background-color: #EDEDED;
    }

    .trailer_wrapp > iframe {
        width: 900px;
        height: 500px;
    }
</style>
