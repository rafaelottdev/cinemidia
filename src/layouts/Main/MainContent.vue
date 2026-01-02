<template>
    <main>
        <Home :API_KEY="API_KEY" :BASE_URL="BASE_URL" />

        <Releases />

        <Trailer />
    </main>
</template>

<script setup>
    import Home from "./Home/Home.vue"
    import Releases from "./Releases/Releases.vue";
    import Trailer from "./Trailer/Trailer.vue";
</script>

<style>

</style>
