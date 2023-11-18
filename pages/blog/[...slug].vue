<script setup lang="ts">
const { path } = useRoute();

// Get access to all the front matter in the markdown file
const { data } = await useAsyncData( `content-${ path }`, () => {
    return queryContent().where( { _path: path } ).findOne();
} );
</script>

<template>
    <article class="prose lg:prose-lg">
        <ContentRenderer :value="data"/>
    </article>
    <div class="my-10">
        <a v-for="tag in data.tags" :key="tag" :href="`/blog/tags/${tag}`" class="">
            <span
                class="inline-flex items-center bg-sky-500 rounded-md text-xs font-medium text-sky-50 px-2 py-1 mr-3">
                <Icon name="ant-design:tag-outlined" class="h-4 w-4 text-sky-50 mr-2"/>
                {{ tag }}
            </span>
        </a>
    </div>
</template>
