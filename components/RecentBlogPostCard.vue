<script setup lang="ts">
const props = defineProps(['posts']);
</script>

<template>
    <article v-for="post in posts" :key="post._id" class="flex max-w-xl flex-col items-start justify-between mt-5">
        <div class="flex items-center gap-x-4 text-xs">
            <time :datetime="post.datetime" class="text-gray-500">2023-11-18</time>
        </div>
        <div>
            <p class="text-xs font-medium text-sky-600 mt-2">
                <nuxt-link v-for="tag in post.tags" :key="tag" :to="`/blog/tags/${tag}`" class="mr-2 bg-sky-400 text-white rounded font-semibold hover:underline py-1 px-2">{{ tag }}</nuxt-link>
            </p>
        </div>
        <div class="group relative">
            <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                <nuxt-link :to="post._path">
                    <span class="absolute inset-0" />
                    {{ post.title }}
                </nuxt-link>
            </h3>
            <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{{ post.description }}</p>
        </div>
        <hr class="w-full border border-sky-400 mt-4">
    </article>
</template>
