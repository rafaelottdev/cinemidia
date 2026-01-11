import { ref, watch } from "vue"

const savedWatchlist = JSON.parse(
    localStorage.getItem("watchlist") || "[]"
)

export const watchlist = ref(savedWatchlist)

export function addMovie(movie) {
    const exists = watchlist.value.find(m => m.id == movie.id)

    if(!exists) {
        watchlist.value.push({
            id: movie.id,
            title: movie.title,
            poster_path: movie.poster_path,
            backdrop_path: movie.backdrop_path,
            genre_ids: movie.genre_ids,
            overview: movie.overview
        })
    }
}

export function removeMovie(movieId) {
    watchlist.value = watchlist.value.filter(movie => movie.id !== movieId)
}

export function isInWatchlist(movieId) {
    return watchlist.value.some(movie => movie.id === movieId)
}

watch(
    watchlist,
    (newValue) => {
        localStorage.setItem("watchlist", JSON.stringify(newValue))
    },
    { deep: true }
)
