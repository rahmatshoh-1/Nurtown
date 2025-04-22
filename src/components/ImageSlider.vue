<script setup>
import Button from '@/components/Button.vue';
import Pagination from '@/components/Pagination.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, A11y } from 'swiper/modules';
import { ref, watch } from 'vue';

import 'swiper/css';
import 'swiper/css/navigation';

// Слайды
const slider = ref([
  { id: 1, supTitle: 'PROJECT', title: 'NURTOWN', imgUrl: '/images/1.png' },
  { id: 2, supTitle: 'PROJECT2', title: 'NURTOWN2', imgUrl: '/images/2.png' }
]);

// Добавим для текущего слайда
const currentSlide = ref(1); // Индекс текущего слайда, начинаем с 1
const totalSlides = ref(slider.value.length); // Общее количество слайдов

// Следим за изменением количества слайдов
watch(slider, () => {
  totalSlides.value = slider.value.length;
});

// Функция для обновления индекса текущего слайда
const updateCurrentSlide = (swiper) => {
  // Обновляем индекс текущего слайда при изменении
  currentSlide.value = swiper.realIndex + 1; // Считаем слайд с 1
};
</script>

<template>
  <Swiper :modules="[Navigation]" :loop="true" :speed="300"
    :navigation="{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }"
    @slideChange="(swiper) => { updateCurrentSlide(swiper) }">
    <SwiperSlide v-for="sliderItem in slider" :key="sliderItem.id">
      <div class="grid grid-cols-12 items-center gap-4">
        <div class="col-span-12 order-2 lg:order-1 lg:col-span-4">
          <h1 class="text-[64px] leading-16 text-[#333333] font-bold uppercase">
            <span class="text-[#bdbdbd] font-normal">{{ sliderItem.supTitle }}</span><br />{{ sliderItem.title }}
          </h1>
          <Pagination class="my-[90px]" :currentSlide="currentSlide" :totalSlides="totalSlides"></Pagination>
        </div>
        <div class="col-span-12 order-1 lg:order-2 lg:col-span-8">
          <div class="relative">
            <img class="w-full h-[350px] lg:h-[829px] object-cover" :src="sliderItem.imgUrl" alt="project images">
            <div class="absolute left-0 bottom-0">
              <Button> ВЗГЛЯНУТЬ</Button>
            </div>
          </div>
        </div>
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<style>
.swiper-button-prev,
.swiper-button-next,
.swiper-button-prev:after,
.swiper-button-next:after {
  all: unset;
  /* сбрасывает всё */
}
</style>
