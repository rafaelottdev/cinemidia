<template>
    <section class="page_section">
        <div class="page_title">
            <p>WatchList</p>
        </div>

        <div class="page_list_wrapp">
            <ul class="page_list">
                <li v-if="!watchlist.length" class="warning">Nenhum Filme ou Série adicionado</li>

                <li v-for="movie in watchlist" :key="movie.id" class="page_item">
                    <button class="page_button" @click="removeMovie(movie.id)">
                        <span>-</span>
                        
                        <div :style="{backgroundImage: `url(${TMDB_IMAGE_URL_500}${movie.poster_path})`}"></div>
                    </button>
                </li>
            </ul>
        </div>
    </section>
</template>

<script setup>
    import { API_KEY, BASE_URL, TMDB_IMAGE_URL_500 } from "@/config/tmdb"
    import { watchlist, addMovie, removeMovie, isInWatchlist } from "@/config/watchlist"
    import "@/styles/page.css"
</script>

<style scoped>
    .warning {
        margin: 0 auto;
        color: white;
        font-family: "inter", sans-serif;
        font-size: 21px;
    }

    @media (max-width: 358px) {

        .warning {
            font-size: 14px;
        }
    }
</style>
