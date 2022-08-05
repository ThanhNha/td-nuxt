<template>
  <div
    class="overlay bg-top bg-no-repeat bg-cover z-[-10]"
    :style="{ backgroundImage: 'url(' + ImageSrc + ')' }"
  ></div>
</template>
<script>
export default {
  props: {
    ImageSrc: {
      type: String,
      default: null,
    },
  },
}
</script>