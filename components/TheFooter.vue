<script setup lang="ts">
const links = [
    { name: 'Github', href: 'https://github.com/AngelinoVerhaeghe', icon: 'ri:github-fill' },
    { name: 'Twitter', href: 'https://twitter.com/AngelinoSonic', icon: 'ri:twitter-x-fill' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/angelino-verhaeghe/', icon: 'ri:linkedin-box-fill' }
];
</script>

<template>
    <footer class="mx-auto max-w-7xl text-white px-2 py-3 md:px-6 md:py-4 lg:px-8 lg:py-6 mt-16 md:mt-24 lg:mt-32">
        <section class="flex items-center justify-between">
            <p>&copy; Codewave 2023. All Rights Reserved.</p>
            <ul class="flex items-center justify-center space-x-6">
                <li v-for="link in links" :key="link.name"><a :href="link.href">
                    <Icon :name="link.icon" class="w-6 h-6 text-white duration-200 hover:text-sky-500"/>
                </a></li>
            </ul>
        </section>
    </footer>
</template>
