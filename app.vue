<script setup lang="ts">
</script>

<template>
    <div class="flex flex-col bg-black font-quicksand antialiased scroll-smooth min-h-screen">
        <TheNavigation/>
        <main class="mx-auto lg:max-w-7xl grow px-2 md:px-6 lg:px-8">
            <NuxtPage/>
        </main>
        <TheFooter/>
    </div>
</template>
