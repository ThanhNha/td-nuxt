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
                  <h2 class="uppercase font-bold h3">Thành tựu nổi bật</h2>
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
        'MỖI MỘT THƯƠNG HIỆU CÓ MỘT CÁ TÍNH RIÊNG. TRUYỀN THÔNG TD TRÂN QUÝ ĐIỀU ĐÓ. CHÚNG TÔI SẴN SÀNG ĐƯA RA NHỮNG Ý KIẾN ĐÓNG GÓP ĐỂ HƯỚNG ĐẾN KẾT QUẢ HOÀN THIỆN HƠN DỰA TRÊN CHẤT LƯỢNG SẢN PHẨM, CÁ TÍNH THƯƠNG HIỆU CỦA MỖI KHÁCH HÀNG. CÓ LẼ VÌ ĐIỀU NÀY MÀ CHÚNG TÔI NHẬN ĐƯỢC SỰ TIN TƯỞNG TỪ QUÝ ĐỐI TÁC VÀ KHÁCH HÀNG VỚI NHIỀU DỰ ÁN TẦM CỠ KHÁC NHAU CÙNG VỚI ĐÓ LÀ NHỮNG CON SỐ VÔ CÙNG ẤN TƯỢNG',
      title:
        'Truyền thông TD cung cấp các dịch vụ Truyền thông Marketing tổng thể cho mọi loại hình doanh nghiệp. Chúng tôi không ngừng nỗ lực tìm kiếm vẻ đẹp của sự sáng tạo, khác biệt hoá bằng những concept sản phẩm độc đáo, ứng dụng công nghệ để giải quyết bài toán Marketing trong hành trình chinh phục trái tim khách hàng.',
      ListItem: [
        {
          title: 'SỨ MỆNH',
          description:
            'Truyền thông TD sẽ là người bạn đồng hành cùng mọi doanh nghiệp vượt qua những khó khăn trong suốt hành trình kinh doanh: Từ khởi nghiệp, thách thức, đến ổn định và phát triển bền vững. Chúng tôi mang đến thị trường những ý tưởng sáng tạo táo bạo, khác biệt hoá thương hiệu, đem hình ảnh về sản phẩm, cá nhân, doanh nghiệp đến gần hơn với đối tượng khách hàng tiềm năng, tối ưu bài toán doanh thu bằng những chiến dịch Marketing thời thượng nhất. Đồng thời, đơn giản hóa việc biến ước mơ của mình thành hiện thực, góp phần vào sự phát triển và thịnh vượng chung của toàn xã hội.',
          image: './images/about/Gioithieu_sec2img1.png',
        },
        {
          title: 'TẦM NHÌN',
          description:
            'Trở thành công ty truyền thông hàng đầu Việt Nam. Biểu tượng mang tầm vóc khu vực trong lĩnh vực Marketing và truyền thông.',
          image: './images/about/Gioithieu_sec2img2.png',
        },
      ],
      ListValues: [
        {
          value: '2625',
          name: 'PHẢN HỒI TỐT.',
        },
        {
          value: '1649',
          name: 'dự án.',
        },
        // {
        //   value: '978',
        //   name: 'Khách hàng.',
        // },
      ],
    }
  },
}
</script>