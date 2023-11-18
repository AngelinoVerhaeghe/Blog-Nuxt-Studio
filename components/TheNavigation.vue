<script setup lang="ts">
</script>

<template>
    <nav class="lg:p-8">
        <ul class="space-y-4">
            <li class="rounded-md cursor-pointer font-semibold duration-200 hover:text-slate-700 hover:bg-sky-100 hover:shadow-sm p-2">
                <NuxtLink to="/">
                    <Icon name="fluent-emoji-flat:house" size="1.5em" class="mr-3 mb-1"/>
                    Home
                </NuxtLink>
            </li>
            <li class="rounded-md cursor-pointer font-semibold duration-200 hover:text-slate-700 hover:bg-sky-100 hover:shadow-sm p-2">
                <NuxtLink to="/blog">
                    <Icon name="icon-park:read-book" size="1.5em" class="mr-3 mb-1"/>
                    Blog
                </NuxtLink>
            </li>
        </ul>
    </nav>
</template>
