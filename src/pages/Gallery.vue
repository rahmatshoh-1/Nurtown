<script setup>
import VueEasyLightbox from 'vue-easy-lightbox'
import { ref } from 'vue';
import Pagination from '@/components/Pagination.vue';

// Состояние для модального окна
const showLightbox = ref(false)
const lightboxIndex = ref(0)

// Открытие lightbox
function openLightbox(index) {
  lightboxIndex.value = index
  showLightbox.value = true
}

const gallary = ref([
  { id: 1, imgUrl: '/images/gallary-1.png', description: 'Описание или пояснение к изображению', alt: 'picture' },
  { id: 2, imgUrl: '/images/gallary-2.png', description: 'Описание или пояснение к изображению', alt: 'picture' },
  { id: 3, imgUrl: '/images/gallary-3.png', description: 'Описание или пояснение к изображению', alt: 'picture' },
  { id: 4, imgUrl: '/images/gallary-4.png', description: 'Описание или пояснение к изображению', alt: 'picture' },
  { id: 5, imgUrl: '/images/gallary-5.png', description: 'Описание или пояснение к изображению', alt: 'picture' },
  { id: 6, imgUrl: '/images/gallary-6.png', description: 'Описание или пояснение к изображению', alt: 'picture' },
  { id: 7, imgUrl: '/images/gallary-7.png', description: 'Описание или пояснение к изображению', alt: 'picture' },
  { id: 8, imgUrl: '/images/gallary-8.png', description: 'Описание или пояснение к изображению', alt: 'picture' },
  { id: 9, imgUrl: '/images/gallary-9.png', description: 'Описание или пояснение к изображению', alt: 'picture' },
  { id: 10, imgUrl: '/images/gallary-10.png', description: 'Описание или пояснение к изображению', alt: 'picture' },
])
</script>
<template>
  <div class="container mx-auto">
    <h1 class="text-[64px] leading-16 text-[#333333] font-bold uppercase">
      <span class="text-[#bdbdbd] font-normal">ГАЛЕРЕЯ</span><br />ФОТОГРАФИЙ
    </h1>
    <ul class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[30px] my-[60px]">
      <li v-for="gallaryItem in gallary" :key="gallaryItem.id" class="relative group cursor-pointer">
        <img class="w-full object-cover"  @click="openLightbox(id)" :src="gallaryItem.imgUrl" :alt="gallaryItem.alt">
        <div
          class="p-[20px] opacity-0 group-hover:opacity-100 absolute bg-white/90 bottom-0 transition-opacity duration-500">
          {{ gallaryItem.description }}
        </div>
      </li>
    </ul>
    <Pagination></Pagination>
    <vue-easy-lightbox
      :visible="showLightbox"
      :imgs="gallary.map(item => item.imgUrl)"
      :index="lightboxIndex"
      @hide="showLightbox = false"
    />
  </div>
</template>
