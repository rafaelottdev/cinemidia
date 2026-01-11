<template>
    <div v-if="show" class="loading_overlay">
        <div class="spinner"></div>
    </div>
</template>

<script setup>
    defineProps({
        show: Boolean
    })
</script>

<style scoped>
    .loading_overlay {
        position: fixed;
        inset: 0;
        z-index: 9999;

        display: flex;
        align-items: center;
        justify-content: center;

        background-color: rgb(15, 15, 15);
    }

    .spinner {
        width: 50px;
        height: 50px;
        border: 4px solid #444;
        border-top-color: white;
        border-radius: 50%;
        animation: spin 0.8s linear infinite;
    }

    @keyframes spin {
        to {
            transform: rotate(360deg);
        }
    }
</style>
