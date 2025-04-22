<script setup>
import { ref } from 'vue';
import VueEasyLightbox from 'vue-easy-lightbox'
import Pagination from '@/components/Pagination.vue';
const certificates = ref([
  { id: 1, imgUrl: '/images/certificate/1.png', alt: 'picture' },
  { id: 2, imgUrl: '/images/certificate/2.png', alt: 'picture' },
  { id: 3, imgUrl: '/images/certificate/3.png', alt: 'picture' },
])

// Состояние для модального окна
const showLightbox = ref(false)
const lightboxIndex = ref(0)

// Открытие lightbox
function openLightbox(index) {
  lightboxIndex.value = index
  showLightbox.value = true
}
</script>
<template>
  <div class="container mx-auto">
    <h1 class="text-[44px] md:text-[64px] leading-16 text-[#333333] font-bold uppercase">
      <span class="text-[#bdbdbd] font-normal">сертификаты</span><br />КОМПАНИИ
    </h1>
    <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[75px] my-[60px]">
      <li v-for="(certificateItem, index) in certificates" :key="certificateItem.id" class="relative group cursor-pointer">
        <img class="w-full object-cover"  @click="openLightbox(index)" :src="certificateItem.imgUrl" :alt="certificateItem.alt">
      </li>
    </ul>
    <div class="flex justify-end items-center">
      <Pagination></Pagination>
       <vue-easy-lightbox
      :visible="showLightbox"
      :imgs="certificates.map(item => item.imgUrl)"
      :index="lightboxIndex"
      @hide="showLightbox = false"
    />
    </div>
  </div>
</template>
