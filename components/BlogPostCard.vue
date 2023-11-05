<script setup lang="ts">
const props = defineProps(['posts']);
</script>

<template>
    <div v-for="post in posts" :key="post._id" class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <nuxt-link :to="post._path">
            <img class="rounded-t-lg object-cover" :src="`/images/blog/${post.cover}`" :alt="post.title" />
        </nuxt-link>
        <div class="p-5">
            <nuxt-link :to="post._path">
                <h2 class="mb-2 text-1xl font-bold font-merriweather tracking-tight text-gray-900 dark:text-white">{{ post.title }}</h2>
            </nuxt-link>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ post.description }}</p>
            <nuxt-link :to="post._path" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-sky-700 rounded-lg duration-200 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800">
                Read more
                <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </nuxt-link>
        </div>
    </div>
</template>
