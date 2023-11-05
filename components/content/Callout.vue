<script setup lang="ts">
const props = defineProps( {
    title: {
        type: String,
        default: 'Callout'
    }
} );
</script>

<template>
    <div class="bg-sky-500 border-t-4 border-sky-900 rounded-lg font-semibold shadow-md px-4 py-3" role="alert">
        <div class="flex items-center">
            <Icon name="mingcute:alert-fill" class="w-6 h-6 text-white mr-3"/>
            <p>{{ props.title }}</p>
        </div>
        <p class="text-sm text-sky-900">
            <slot/>
        </p>
    </div>
</template>
