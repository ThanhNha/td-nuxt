<template v-if="itemNews">
  <div class="card-news">
    <div class="aspect-w-3 aspect-h-2 card-news-img">
      <NuxtLink
        :to="{
          name: 'news-slug',
          params: { slug: itemNews.slug },
        }"
      >
        <SImage :src="itemNews.image" class="picture-cover" />
      </NuxtLink>
    </div>
    <div class="bg-radial-1 card-news-info">
      <div class="lg:p-8 p-4 flex flex-col space-y-2">
        <NuxtLink
          :to="{
            name: 'news-slug',
            params: { slug: itemNews.slug },
          }"
          class="text-white p1 font-bold uppercase line-clamp-2"
        >
          {{ itemNews.title }}
        </NuxtLink>
        <div class="text-white line-clamp-4">{{ itemNews.description }}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    itemNews: {
      type: Object,
      default: () => null,
    },
  },
}
</script>