<template>
  <div>
    <section class="ab-ss1 relative">
      <SImage :src="Image[0].src" class="picture-cover"></SImage>
      <div
        class="
          absolute
          bottom-10
          lg:w-1/2
          md:w-2/3
          w-full
          left-1/2
          -translate-x-1/2
        "
      >
        <div
          class="flex flex-col lg:space-y-4 md:space-y-3 space-y-2 text-center"
        >
          <h1 class="block h3 fade-left">
            {{ title }}
          </h1>
        </div>
      </div>
    </section>

    <section
      class="
        ab-ss2
        lg:pb-[100px]
        md:pb-[70px]
        pb-[50px]
        bg-top bg-no-repeat bg-cover
      "
      :style="{ backgroundImage: 'url(' + Background + ')' }"
    >
      <div class="container">
        <div class="lg:pt-12 md:pt-8 pt-4">
          <div
            class="
              grid grid-cols-10
              lg:gap-y-[50px]
              md:gap-y-[35px]
              gap-y-[25px]
            "
          >
            <div class="lg:col-span-4 col-span-full">
              <div
                class="flex flex-col md:space-y-5 space-y-3 overflow-x-hidden"
              >
                <div class="flex-1 fade-left">
                  <div class="flex space-x-3">
                    <div class="flex items-center space-x-2 w-[50px] full">
                      <div class="bg-pink h-full w-1/4"></div>
                      <div class="bg-pink h-full w-1/2"></div>
                    </div>
                    <div class="text-white">
                      <h2 class="uppercase font-bold h2">
                        {{ ListItem[0].title }}
                      </h2>
                    </div>
                  </div>
                </div>
                <div class="description flex-1 text-white fade-left">
                  {{ ListItem[0].description }}
                </div>
              </div>
            </div>
            <div class="lg:col-span-6 col-span-full">
              <div class="aspect-w-2 aspect-h-1">
                <SImage :src="ListItem[0].image" class="picture-cover"></SImage>
              </div>
            </div>
          </div>
        </div>
        <div class="lg:pt-16 md:pt-8 pt-4">
          <div
            class="
              grid grid-cols-10
              lg:gap-y-[50px]
              md:gap-y-[35px]
              gap-y-[25px]
            "
          >
            <div class="lg:col-span-6 col-span-full">
              <div class="aspect-w-2 aspect-h-1">
                <SImage :src="ListItem[1].image" class="picture-cover"></SImage>
              </div>
            </div>
            <div class="lg:col-span-4 col-span-full">
              <div
                class="flex flex-col md:space-y-5 space-y-3 overflow-x-hidden"
              >
                <div class="flex-1 fade-right">
                  <div class="flex space-x-3">
                    <div class="flex items-center space-x-2 w-[50px] full">
                      <div class="bg-pink h-full w-1/4"></div>
                      <div class="bg-pink h-full w-1/2"></div>
                    </div>
                    <div class="text-white">
                      <h2 class="uppercase font-bold h2">
                        {{ ListItem[1].title }}
                      </h2>
                    </div>
                  </div>
                </div>
                <div class="description flex-1 text-white fade-right">
                  {{ ListItem[1].description }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="ab-ss4 relative lg:h-[1700px] md:h-[1200px] h-[1200px]">
      <div class="w-full h-full relative md:absolute top-0 left-0 -z-10">
        <SImage :src="Image[1].src" class="picture-cover"></SImage>
      </div>
      <div class="absolute top-0 left-0 w-full h-full z-10">
        <div class="container">
          <div class="mx-auto lg:max-w-[740px]">
            <div class="flex flex-col lg:space-y-6 space-y-4 overflow-hidden">
              <div
                class="flex justify-center space-x-3 lg:pt-16 pt-8 fade-left"
              >
                <div class="flex items-center space-x-2 w-[50px] full">
                  <div class="bg-pink h-full w-1/4"></div>
                  <div class="bg-pink h-full w-1/2"></div>
                </div>
                <div class="text-white">
                  <h2 class="uppercase font-bold h3">Th??nh t???u n???i b???t</h2>
                </div>
              </div>
              <div
                class="sub-heading uppercase text-justify pb-[40px] fade-right"
              >
                {{ titleSs3 }}
              </div>
            </div>
          </div>
          <div
            class="
              mt-[90px]
              relative
              lg:w-[620px] lg:h-[650px]
              md:h-[500px]
              h-[400px]
              mx-auto
              animation-wrapper
            "
          >
            <div
              v-for="(item, index) in ListValues"
              :key="index"
              :class="index === 0 ? 'left-0 top-0' : 'right-0 top-0'"
              class="flex flex-col space-y-4 items-center absolute z-10"
            >
              <div class="relative w-[150px] h-[150px]">
                <div class="absolute w-full h-full">
                  <SImage :src="Icon"></SImage>
                </div>
                <div
                  class="
                    absolute
                    top-1/2
                    left-1/2
                    -translate-x-1/2 -translate-y-1/2
                  "
                >
                  <h2 class="counter p1 text-white uppercase font-bold">
                    <span> {{ item.value }}</span>
                  </h2>
                </div>
              </div>
              <div class="text-white h3 uppercase font-bold">
                {{ item.name }}
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
      Icon: './icons/hinhtron.png',
      Background: './images/about/GIOITHIEU_sec2.jpg',
      Image: [
        {
          src: './images/about/GIOITHIEU_sec1.jpg',
        },
        {
          src: './images/about/GIOITHIEU_sec4.jpg',
        },
      ],
      titleSs3:
        'M???I M???T TH????NG HI???U C?? M???T C?? T??NH RI??NG. TRUY???N TH??NG TD TR??N QU?? ??I???U ????. CH??NG T??I S???N S??NG ????A RA NH???NG ?? KI???N ????NG G??P ????? H?????NG ?????N K???T QU??? HO??N THI???N H??N D???A TR??N CH???T L?????NG S???N PH???M, C?? T??NH TH????NG HI???U C???A M???I KH??CH H??NG. C?? L??? V?? ??I???U N??Y M?? CH??NG T??I NH???N ???????C S??? TIN T?????NG T??? QU?? ?????I T??C V?? KH??CH H??NG V???I NHI???U D??? ??N T???M C??? KH??C NHAU C??NG V???I ???? L?? NH???NG CON S??? V?? C??NG ???N T?????NG',
      title:
        'Truy???n th??ng TD cung c???p c??c d???ch v??? Truy???n th??ng Marketing t???ng th??? cho m???i lo???i h??nh doanh nghi???p. Ch??ng t??i kh??ng ng???ng n??? l???c t??m ki???m v??? ?????p c???a s??? s??ng t???o, kh??c bi???t ho?? b???ng nh???ng concept s???n ph???m ?????c ????o, ???ng d???ng c??ng ngh??? ????? gi???i quy???t b??i to??n Marketing trong h??nh tr??nh chinh ph???c tr??i tim kh??ch h??ng.',
      ListItem: [
        {
          title: 'S??? M???NH',
          description:
            'Truy???n th??ng TD s??? l?? ng?????i b???n ?????ng h??nh c??ng m???i doanh nghi???p v?????t qua nh???ng kh?? kh??n trong su???t h??nh tr??nh kinh doanh: T??? kh???i nghi???p, th??ch th???c, ?????n ???n ?????nh v?? ph??t tri???n b???n v???ng. Ch??ng t??i mang ?????n th??? tr?????ng nh???ng ?? t?????ng s??ng t???o t??o b???o, kh??c bi???t ho?? th????ng hi???u, ??em h??nh ???nh v??? s???n ph???m, c?? nh??n, doanh nghi???p ?????n g???n h??n v???i ?????i t?????ng kh??ch h??ng ti???m n??ng, t???i ??u b??i to??n doanh thu b???ng nh???ng chi???n d???ch Marketing th???i th?????ng nh???t. ?????ng th???i, ????n gi???n h??a vi???c bi???n ?????c m?? c???a m??nh th??nh hi???n th???c, g??p ph???n v??o s??? ph??t tri???n v?? th???nh v?????ng chung c???a to??n x?? h???i.',
          image: './images/about/Gioithieu_sec2img1.png',
        },
        {
          title: 'T???M NH??N',
          description:
            'Tr??? th??nh c??ng ty truy???n th??ng h??ng ?????u Vi???t Nam. Bi???u t?????ng mang t???m v??c khu v???c trong l??nh v???c Marketing v?? truy???n th??ng.',
          image: './images/about/Gioithieu_sec2img2.png',
        },
      ],
      ListValues: [
        {
          value: '2625',
          name: 'PH???N H???I T???T.',
        },
        {
          value: '1649',
          name: 'd??? ??n.',
        },
        // {
        //   value: '978',
        //   name: 'Kh??ch h??ng.',
        // },
      ],
    }
  },
}
</script>