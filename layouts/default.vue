<template>
  <div :class="{ 'open-menu': openMenu }">
    <STheHeader />
    <Nuxt keep-alive />
  </div>
</template>
<script>
export default {
  computed: {
    openMenu() {
      return this.$store.state.menu.isOpened
    },
  },
}
</script>