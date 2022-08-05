<template>
  <div
    class="
      relative
      overflow-hidden
      lg:w-[45px] lg:h-[45px]
      md:w-[40px] md:h-[40px]
      w-[35px]
      h-[35px]
    "
  >
    <div
      class="
        w-full
        h-full
        rounded-full
        border-[2px] border-white
        flex
        items-center
        justify-center
      "
    >
      <div
        class="hamburger-menu lg:w-[70%] md:w-[90%] w-[80%]"
        @click="toggle()"
        id="hamburger-menu"
      >
        <div class="menu-bar1"></div>
        <div class="menu-bar2"></div>
        <div class="menu-bar3"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations({ toggle: 'menu/toggle' }),
  },
}
</script>