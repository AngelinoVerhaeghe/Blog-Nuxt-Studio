<script setup lang="ts">
const { data: posts } = await useAsyncData('posts', () => {
   return queryContent('/blog').find();
});
console.log(posts);
</script>

<template>
    <div>
        <h2 class="font-merriweather text-2xl underline decoration-sky-500">Blog</h2>
        <p class="prose mt-2">Welcome to our blog, your go-to destination for insightful articles, practical tips, and inspiring stories. Explore a world of <span  class="font-semibold underline decoration-amber-400">web development</span> and stay updated with the latest trends across various topics.</p>
    </div>

    <section class="my-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <BlogPost :posts="posts"/>
        </div>
    </section>
</template>