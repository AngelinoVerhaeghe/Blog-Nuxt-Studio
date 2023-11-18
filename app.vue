<script setup lang="ts">
const { data: posts } = await useAsyncData('latest-posts', () => {
    return queryContent('/blog').sort({ data: 1 }).limit(3).find();
});
</script>

<template>
    <div class="bg-neutral-100 font-quicksand antialiased text-slate-800 scroll-smooth min-h-screen">
        <main class="mx-auto max-w-7xl pt-10">
            <div class="grid grid-cols-12 gap-5">
                <div class="col-span-3">
                    <div class="bg-white rounded-md shadow p-4">
                        <h1 class="font-merriweather text-3xl underline decoration-sky-500">CodeWave</h1>
                        <h3 class="text-xl mt-2">Unlock WebDev Secrets: Learn, Create, Thrive!</h3>
                        <p class="prose mt-3">Dive Into the Dynamic World of <span class="underline decoration-amber-400">Web Development</span>: Discover, Design, and Deploy Your Vision Online!</p>
                    </div>
                    <TheNavigation/>
                </div>
                <div class="col-span-6">
                    <NuxtPage/>
                </div>
                <div class="col-span-3">
                    <div class="bg-white rounded-md shadow p-4">
                        <h2 class="font-merriweather text-2xl">Recent</h2>
                        <RecentBlogPostCard :posts="posts" />
                    </div>
                </div>
            </div>
            <TheFooter/>
        </main>
    </div>
</template>
