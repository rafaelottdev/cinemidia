<script setup>
    import HeaderLayout from "./layouts/Header/Header.vue"
    import MainLayout from "./layouts/Main/MainContent.vue"
    import FooterLayout from "./layouts/Footer/Footer.vue"
</script>

<template>
    <HeaderLayout />

    <MainLayout />

    <FooterLayout />
</template>

<style>
    * {
        margin: 0;
        padding: 0;
        outline: 0;

        box-sizing: border-box;

        text-decoration: none;
        list-style: none;

        border: none;
    }

    html, body {
        scroll-behavior: smooth;
        overflow-x: hidden;
    }

    button {
        background-color: transparent;
    }

    a {
        color: black;
    }
</style>
