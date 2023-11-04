<script setup lang="ts">
const props = defineProps( {
    title: {
        type: String,
        default: 'Callout'
    }
} );
</script>

<template>
    <div class="bg-sky-100 border-t-4 border-sky-500 rounded-xl text-sky-900 shadow-md px-4 py-3" role="alert">
        <div class="flex items-center">
            <Icon name="mingcute:alert-fill" class="w-6 h-6 text-sky-900 mr-3" />
            <p>{{ props.title }}</p>
        </div>
        <p class="text-sm">
            <slot/>
        </p>
    </div>
</template>
