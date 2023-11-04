<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline';

const route = useRoute();

const navigation = [
    { name: 'Home', href: '/', current: route.name === 'index' },
    { name: 'Blog', href: '/blog', current: route.name === 'blog' },
    { name: 'About', href: '/about', current: route.name === 'about' },
];
</script>

<template>
    <Disclosure as="nav" class="mb-16 md:mb-24 lg:mb-32" v-slot="{ open }">
        <div class="mx-auto max-w-7xl px-2 md:px-6 lg:px-8">
            <div class="relative flex h-16 items-center justify-between">
                <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    <!-- Mobile menu button-->
                    <DisclosureButton
                        class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                        <span class="absolute -inset-0.5"/>
                        <span class="sr-only">Open main menu</span>
                        <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true"/>
                        <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true"/>
                    </DisclosureButton>
                </div>
                <div class="flex flex-1 items-center justify-center sm:items-stretch">
                    <div class="hidden sm:ml-6 sm:block">
                        <div class="flex space-x-28">
                            <a v-for="item in navigation" :key="item.name" :href="item.href"
                               :class="[item.current ? 'text-white' : 'text-white relative before:content-[\'\'] before:absolute before:block before:w-full before:h-[2px] \n'+'before:bottom-0 before:left-0 before:bg-amber-400\n'+'before:hover:scale-x-100 before:scale-x-0 before:origin-top-left\n'+'before:transition before:ease-in-out before:duration-300', 'rounded-md py-2 text-lg']"
                               :aria-current="item.current ? 'page' : undefined">{{ item.name }}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <DisclosurePanel class="sm:hidden">
            <div class="space-y-1 px-2 pb-3 pt-2">
                <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.href"
                                  :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block rounded-md px-3 py-2 text-base font-medium']"
                                  :aria-current="item.current ? 'page' : undefined">{{ item.name }}
                </DisclosureButton>
            </div>
        </DisclosurePanel>
    </Disclosure>
</template>
