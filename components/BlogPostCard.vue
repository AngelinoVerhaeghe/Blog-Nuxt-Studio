<script setup lang="ts">
const props = defineProps(['posts']);
</script>

<template>
    <div v-for="post in posts" :key="post._id" class="flex flex-col overflow-hidden rounded-md shadow mb-8">
        <div class="flex-shrink-0">
            <img class="h-48 w-full object-cover" :src="`/images/blog/${post.cover}`" :alt="post.title" />
        </div>
        <div class="flex flex-1 flex-col justify-between bg-white p-6">
            <div class="flex-1">
                <p class="text-sm font-medium text-indigo-600">
                    <nuxt-link v-for="tag in post.tags" :key="tag" :to="`/blog/tags/${tag}`" class="mr-2 hover:underline">{{ tag }}</nuxt-link>
                </p>
                <nuxt-link :to="post._path" class="mt-2 block">
                    <p class="text-xl font-semibold text-gray-900">{{ post.title }}</p>
                    <p class="mt-3 text-base text-gray-500">{{ post.description }}</p>
                </nuxt-link>
            </div>
            <div class="mt-6 flex items-center">
                <div>
                    <p class="text-sm font-medium text-gray-900">{{ post.author }}</p>
                    <div class="flex space-x-1 text-sm text-gray-500">
                        <time>2023-11-18</time>
                        <span aria-hidden="true">&middot;</span>
                        <span>{{ post.readingTime }} min read</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
