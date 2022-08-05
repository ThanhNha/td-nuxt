<template>
  <div>
    <section id="news-1" class="news-1 bg-img">
      <SBackground :ImageSrc="background" />

      <div class="container absolute bottom-0 w-full right-0 left-0 z-10">
        <div class="grid grid-cols-12 lg:gap-[50px] md:gap-[35px] gap-[25px]">
          <div class="col-span-full">
            <div class="grid grid-cols-5">
              <div class="col-span-full flex space-x-3">
                <div class="flex items-center space-x-2 w-[50px] full">
                  <div class="bg-pink h-full w-1/4"></div>
                  <div class="bg-pink h-full w-1/2"></div>
                </div>
                <div class="text-white">
                  <h2 class="uppercase font-bold h2">Tin noi bat</h2>
                </div>
              </div>
            </div>
          </div>

          <div class="lg:col-span-8 col-span-12">
            <div
              class="card-news"
              v-for="(item, index) in ListNews"
              :key="index"
            >
              <template v-if="item.isHot">
                <div class="aspect-w-3 aspect-h-2 card-news-img">
                  <NuxtLink
                    :to="{ name: 'news-slug', params: { slug: item.slug } }"
                  >
                    <SImage :src="item.image" class="picture-cover" />
                  </NuxtLink>
                </div>
                <div class="bg-radial-1 card-news-info h-full">
                  <div class="lg:p-8 p-4 flex flex-col space-y-2">
                    <span class="text-white">29/05/2022</span>
                    <NuxtLink
                      :to="{ name: 'news-slug', params: { slug: item.slug } }"
                      class="text-white p1 font-bold uppercase line-clamp-2"
                      >{{ item.title }}</NuxtLink
                    >
                    <div class="text-white line-clamp-4">
                      {{ item.description }}
                    </div>
                  </div>
                </div>
              </template>
            </div>
          </div>
          <div
            class="
              lg:col-span-4
              col-span-full
              grid grid-cols-12
              md:gap-[50px]
              gap-[25px]
              lg:flex lg:flex-col lg:space-y-[32px]
            "
          >
            <!-- html here -->
            <div
              class="lg:col-span-12 col-span-6"
              v-for="(item2, index2) in ListNews.slice(0, 2)"
              :key="index2"
            >
              <div class="card-news">
                <div class="aspect-w-3 aspect-h-2 card-news-img">
                  <NuxtLink
                    :to="{ name: 'news-slug', params: { slug: item2.slug } }"
                  >
                    <SImage :src="item2.image" class="picture-cover" />
                  </NuxtLink>
                </div>
                <div class="bg-radial-1 card-news-info">
                  <div class="p-4 flex flex-col space-y-2">
                    <NuxtLink
                      :to="{ name: 'news-slug', params: { slug: item2.slug } }"
                      class="text-white font-bold uppercase line-clamp-2"
                      >{{ item2.title }}</NuxtLink
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="lg:h-[50px] h-[35px]"></div>
      </div>
    </section>

    <section id="news-2" class="nw-ss2 lg:pb-[50px] pb-[25px] relative">
      <SBackground :ImageSrc="background" />
      <div class="container">
        <div class="grid grid-cols-12 lg:gap-[50px] md:gap-[35px] gap-[25px]">
          <div class="col-span-full">
            <div class="grid grid-cols-5">
              <div class="col-span-full flex space-x-3">
                <div class="flex items-center space-x-2 w-[50px] full">
                  <div class="bg-pink h-full w-1/4"></div>
                  <div class="bg-pink h-full w-1/2"></div>
                </div>
                <div class="text-white">
                  <h2 class="uppercase font-bold h2">Tin thi truong</h2>
                </div>
              </div>
            </div>
          </div>

          <div
            class="lg:col-span-4 col-span-6"
            v-for="(item3, index3) in ListNews"
            :key="index3"
          >
            <CardNews :itemNews="item3" />
          </div>
        </div>
      </div>
    </section>

    <section
      id="news-3"
      class="nw-ss2lg:pb-[300px] md:pb-[240px] pb-[400px] relative"
    >
      <SBackground :ImageSrc="background" />
      <div class="container">
        <div class="grid grid-cols-12 lg:gap-[50px] md:gap-[35px] gap-[25px]">
          <div class="lg:col-span-8 col-span-12">
            <div class="lg:mb-[50px] md:mb-[35px] mb-[25px]">
              <div class="grid grid-cols-5">
                <div class="col-span-full flex space-x-3">
                  <div class="flex items-center space-x-2 w-[50px] full">
                    <div class="bg-pink h-full w-1/4"></div>
                    <div class="bg-pink h-full w-1/2"></div>
                  </div>
                  <div class="text-white">
                    <h2 class="uppercase font-bold h2">Tin noi bo</h2>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="grid grid-cols-12 lg:gap-[50px] md:gap-[35px] gap-[25px]"
            >
              <div
                class="lg:col-span-full col-span-6"
                v-for="(item4, index4) in ListNews"
                :key="index4"
              >
                <div class="card-news-2">
                  <div class="grid grid-cols-12 h-full">
                    <div class="lg:col-span-5 col-span-12">
                      <div class="aspect-w-3 aspect-h-2 card-news-img">
                        <NuxtLink
                          :to="{
                            name: 'news-slug',
                            params: { slug: item4.slug },
                          }"
                        >
                          <SImage :src="item4.image" class="picture-cover" />
                        </NuxtLink>
                      </div>
                    </div>
                    <div class="lg:col-span-7 col-span-12">
                      <div class="bg-radial-1 card-news-info">
                        <div class="p-4 flex flex-col space-y-2">
                          <NuxtLink
                            :to="{
                              name: 'news-slug',
                              params: { slug: item4.slug },
                            }"
                            class="text-white font-bold uppercase line-clamp-2"
                            >{{ item4.title }}</NuxtLink
                          >
                          <div class="text-white line-clamp-3">
                            {{ item4.title }}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      background: './images/anh2.jpg',
      ListNews: [
        {
          title: 'Chỗ này hiện tiêu đề của bài viết bài 1',
          description: 'Chỗ này hiện miêu tả của bài viết',
          slug: 'bai-2',
          image: './images/bai1.png',
          isHot: true,
        },
        {
          title: 'Chỗ này hiện tiêu đề của bài viết bài 2',
          description: 'Chỗ này hiện miêu tả của bài viết',
          slug: 'bai-3',
          image: './images/bai1.png',
          isHot: false,
        },
        {
          title: 'Chỗ này hiện tiêu đề của bài viết bài 3',
          description: 'Chỗ này hiện miêu tả của bài viết',
          slug: 'bai-4',
          image: './images/bai1.png',
          isHot: false,
        },
        {
          title: 'Chỗ này hiện tiêu đề của bài viết bài 4',
          description: 'Chỗ này hiện miêu tả của bài viết',
          slug: 'bai-5',
          image: './images/bai1.png',
          isHot: false,
        },
      ],
    }
  },
}
</script>