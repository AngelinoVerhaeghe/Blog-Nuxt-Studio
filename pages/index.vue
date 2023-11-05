<script setup lang="ts">
const { data: posts } = await useAsyncData('latest-posts', () => {
    return queryContent('/blog').sort({ data: 1 }).limit(3).find();
});
</script>

<template>
    <section class="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16 md:mb-24 lg:mb-32">
        <div class="prose lg:prose-lg text-white py-4 sm:py-6 lg:py-10">
            <h1 class="font-merriweather text-4xl text-white underline decoration-sky-500">CodeWave</h1>
            <p>Unlock WebDev Secrets: Learn, Create, Thrive!</p>
            <p>Dive Into the Dynamic World of <span class="underline decoration-amber-400">Web Development</span>: Discover, Design, and Deploy Your Vision Online!</p>
        </div>
        <div class="border-2 border-amber-400 rounded-xl overflow-hidden">
            <img src="~/assets/images/markus-spiske-unsplash.jpg" class="w-full h-full" alt="Graffiti image">
        </div>
    </section>

    <section>
        <h2 class="font-merriweather text-3xl text-white mb-10">Latest Blog Posts</h2>
        <BlogPostCard :posts="posts"/>
    </section>
</template>
