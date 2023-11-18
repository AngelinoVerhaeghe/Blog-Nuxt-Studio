<script setup lang="ts">
const links = [
    { name: 'Github', href: 'https://github.com/AngelinoVerhaeghe', icon: 'ri:github-fill' },
    { name: 'Twitter', href: 'https://twitter.com/AngelinoSonic', icon: 'ri:twitter-x-fill' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/angelino-verhaeghe/', icon: 'ri:linkedin-box-fill' }
];
</script>

<template>
    <footer>
        <div class="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
            <div class="flex justify-center space-x-6 md:order-2">
                <ul class="flex items-center justify-center space-x-6">
                    <li v-for="link in links" :key="link.name">
                        <nuxt-link :to="link.href" target="_blank">
                            <Icon :name="link.icon" class="w-6 h-6 duration-200 hover:text-sky-500"/>
                        </nuxt-link>
                    </li>
                </ul>
            </div>
            <div class="mt-8 md:order-1 md:mt-0">
                <p class="text-center text-sm leading-5">&copy; Codewave 2023. All Rights Reserved.</p>
            </div>
        </div>
    </footer>
</template>
