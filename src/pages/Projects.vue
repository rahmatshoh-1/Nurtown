<script setup>
import Button from '@/components/Button.vue';
import Pagination from '@/components/Pagination.vue';
import { ref } from 'vue';

const projects = ref([
  { id: 1, slug: "school", urlImg: '/images/projects/1.png', link: '#', title: 'Общеобразовательная школа', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },
  { id: 2, slug: "parking", urlImg: '/images/projects/2.png', link: '#', title: 'Паркинг на 500 автомобилей', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },
  { id: 3, slug: "office", urlImg: '/images/projects/3.png', link: '#', title: 'Проект интерьера офиса', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' }
])
</script>
<template>
  <div class="container mx-auto">
    <h1 class="text-[64px] leading-16 text-[#333333] font-bold uppercase">
      <span class="text-[#bdbdbd] font-normal">НАШИ</span><br />ПРОЕКТЫ
    </h1>

    <div class="flex flex-col gap-[60px] my-[60px]">
      <div v-for="projectItem in projects" :key="projectItem.id"
        class="grid grid-cols-12 gap-[30px] items-start bg-[#FBFBFB]">
        <!-- Левая часть: изображение -->
        <div class="col-span-12 lg:col-span-6">
          <img :src="projectItem.urlImg" :alt="projectItem.title" class="w-full h-auto object-cover" />
        </div>

        <!-- Правая часть: текст -->
        <div class="col-span-12 lg:col-span-6 p-[30px] flex flex-col justify-between">
          <div>
            <h2 class="text-[40px] font-light mb-4">
              {{ projectItem.title }}
            </h2>
            <p class="text-[#4F4F4F] mb-[64px]">
              {{ projectItem.description }}
            </p>
          </div>
          <div>
            <router-link :to="`/projects/${projectItem.slug}`">
              <Button>СМОТРЕТЬ</Button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <Pagination></Pagination>
  </div>
</template>
