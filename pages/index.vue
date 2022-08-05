<template>
  <main>
    <section
      id="home-section"
      class="lg:py-[300px] md:py-[240px] py-[400px] relative"
    >
      <SBackground :ImageSrc="backgroundImage"></SBackground>
      <div class="container">
        <div class="lg:p-12 md:p-10 p-5">
          <div class="text-center font-bold uppercase text-white typewriter">
            <h1 class="lg:text-5xl md:text-3xl text-xl">{{ title }}</h1>
          </div>
          <div class="h2 text-center font-bold text-white">
            {{ home.title }}
          </div>
          <div class="mt-6">
            <div class="text-center font-bold text-white sub-heading">
              {{ home.summary }}
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import Background from '../components/shin/Background.vue'
export default {
  async asyncData({ $content }) {
    const home = await $content('/homepage').fetch()
    return { home }
  },
  data() {
    return {
      backgroundImage: './images/home/section3.jpg',
      title: 'Truyền thông TD',
      subtitle: 'Nhà định hình phong cách thương hiệu chuyên nghiệp',
      summary:
        'Chinh phục thị trường bằng trí tuệ và sức mạnh công nghệ, khác biệt là nhân tố dẫn đến sự thành công',
    }
  },
  components: { Background },
}
</script>
