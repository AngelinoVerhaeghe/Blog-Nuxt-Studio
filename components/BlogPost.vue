<script setup lang="ts">
const props = defineProps( [ 'posts' ] );
</script>

<template>
    <article v-for="post in posts" :key="post._id"
             class="relative isolate flex flex-col justify-end overflow-hidden rounded-md bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
        <img :src="`/images/blog/${post.cover}`" :alt="post.title" class="absolute inset-0 -z-10 h-full w-full object-cover"/>
        <div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"/>
        <div class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"/>

        <div class="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
            <time class="mr-8">2023-11-18</time>
        </div>
        <h3 class="mt-3 text-lg font-semibold leading-6 text-white">
            <nuxt-link :to="post._path">
                <span class="absolute inset-0"/>
                {{ post.title }}
            </nuxt-link>
        </h3>
    </article>
</template>
