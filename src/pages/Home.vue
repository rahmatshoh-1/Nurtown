<script setup>
import Button from '@/components/Button.vue';
import ImageSlider from '@/components/ImageSlider.vue';
import { ref } from 'vue';

const slider = ref([
  { id: 1, supTitle: 'PROJECT', title: 'NURTOWN', imgUrl: '/images/1.png' },
  { id: 2, supTitle: 'PROJECT2', title: 'NURTOWN2', imgUrl: '/images/1.png' }
])
</script>
<template>
  <div class="container mx-auto">
    <section class="py-10">
      <ImageSlider />
    </section>
    <!-- about company -->
    <section class="grid lg:grid-cols-12 items-center gap-[30px] my-[120px] py-[30px] bg-[#fbfbfb]">
      <div class="lg:col-span-3 lg:col-start-2">
        <img class="w-full object-cover mb-[30px]" src="/images/thumb-1.png" alt="">
        <img class="w-full object-cover" src="/images/thumb-2.png" alt="">
      </div>
      <div class="lg:col-span-3">
        <img class="w-full object-cover" src="/images/thumb-3.png" alt="">
      </div>
      <div class="lg:col-span-4">
        <h2 class="text-[48px] md:text-[64px] leading-16 text-[#333333] font-light">О компании</h2>
        <p class="my-5">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged.
        </p>
        <Button>ЧИТАТЬ</Button>
      </div>
    </section>
    <!-- Main Tasks -->
    <section class="grid lg:grid-cols-12 items-center gap-[30px] my-[120px] py-[30px]">
      <h2 class="text-[48px] md:text-[64px] leading-16 text-[#333333] font-light col-span-12 mb-[60px]">Основные задачи</h2>
      <div class="col-span-12 lg:col-span-6">
        <div class="flex justify-start items-start">
          <img src="/images/icons/1.svg" alt="">
          <p class="ml-[30px] text-[22px]">Создание комфортных условий и повышение качества обслуживания
            клиентов</p>
        </div>
      </div>
      <div class="col-span-12 lg:col-span-6">
        <div class="flex justify-start items-center">
          <img src="/images/icons/2.svg" alt="">
          <p class="ml-[30px] text-[22px]">
            Постоянно совершенствовать качество предоставляемых услуг путем обучения персонала, закупки нового
            оборудования и усиленной рекламы на рынке
          </p>
        </div>
      </div>
    </section>
    <!-- Our Projects -->
    <section class="grid grid-cols-12 items-center gap-[30px] my-[120px] py-[30px]">
      <h2 class="text-[48px] md:text-[64px] leading-16 text-[#333333] font-light col-span-12 mb-[60px]">Наши проекты</h2>
      <div class="col-span-12 lg:col-span-6">
        <div class="flex justify-start items-center">
          <div
            class="group h-[255px] w-full relative cursor-pointer text-white transition-all py-[48px] px-[80px] bg-[url('/images/6.png')] bg-cover overflow-hidden">
            <!-- Затемнённый фон при ховере -->
            <div class="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-80 z-0">
            </div>

            <!-- Контент поверх фона -->
            <div class="relative z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p class="text-[48px] md:text-[64px] leading-16">ДОСУГОВЫЙ ЦЕНТР</p>
              <button class="inline-flex gap-3">
                ПОДРОБНЕЕ
                <img src="/images/icons/arrow-white.svg" alt="">
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-span-12 lg:col-span-6">
        <div class="flex justify-start items-center">
          <div
            class="group h-[255px] w-full relative cursor-pointer text-white transition-all py-[48px] px-[80px] bg-[url('/images/2.png')] bg-cover overflow-hidden">
            <!-- Затемнённый фон при ховере -->
            <div class="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-80 z-0">
            </div>

            <!-- Контент поверх фона -->
            <div class="relative z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p class="text-[48px] md:text-[64px] leading-16">ДОСУГОВЫЙ ЦЕНТР</p>
              <button class="inline-flex gap-3">
                ПОДРОБНЕЕ
                <img src="/images/icons/arrow-white.svg" alt="">
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-span-12 lg:col-span-3">
        <div class="flex justify-start items-center">
          <div
            class="h-[255px] w-full group relative cursor-pointer text-white transition-all py-[48px] px-[40px] bg-[url('/images/3.png')] bg-cover overflow-hidden">
            <!-- Затемнённый фон при ховере -->
            <div class="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-80 z-0">
            </div>

            <!-- Контент поверх фона -->
            <div class="relative z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p class="text-[32px] leading-8">ДОСУГОВЫЙ ЦЕНТР</p>
              <button class="inline-flex gap-3">
                ПОДРОБНЕЕ
                <img src="/images/icons/arrow-white.svg" alt="">
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-span-12 lg:col-span-5">
        <div class="flex justify-start items-center">
          <div
            class="h-[255px] w-full group relative cursor-pointer text-white transition-all py-[48px] px-[80px] bg-[url('/images/4.png')] bg-cover overflow-hidden">
            <!-- Затемнённый фон при ховере -->
            <div class="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-80 z-0">
            </div>

            <!-- Контент поверх фона -->
            <div class="relative z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p class="text-[48px] md:text-[64px] leading-16">ДОСУГОВЫЙ ЦЕНТР</p>
              <button class="inline-flex gap-3">
                ПОДРОБНЕЕ
                <img src="/images/icons/arrow-white.svg" alt="">
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-span-12 lg:col-span-4">
        <div class="flex justify-start items-center">
          <div
            class="h-[255px] w-full group relative cursor-pointer text-white transition-all py-[48px] px-[40px] bg-[url('/images/5.png')] bg-cover overflow-hidden">
            <!-- Затемнённый фон при ховере -->
            <div class="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-80 z-0">
            </div>

            <!-- Контент поверх фона -->
            <div class="relative z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p class="text-[32px] leading-8">ДОСУГОВЫЙ ЦЕНТР</p>
              <button class="inline-flex gap-3">
                ПОДРОБНЕЕ
                <img src="/images/icons/arrow-white.svg" alt="">
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-span-12 flex justify-end items-center">
        <router-link to="/projects">
          <Button class="flex-end" type="bg-black">ВСЕ ПРОЕКТЫ</Button>
        </router-link>
      </div>
    </section>
    <!-- Form -->
    <section>
      <h2 class="text-[48px] md:text-[64px] leading-16 text-[#333333] font-light mb-[20px]">Связаться с нами</h2>
      <div class="grid grid-cols-12 gap-[30px]">
        <form action="#" class="col-span-12 lg:col-span-4">
          <input type="text" class="bg-[#f3f3f3] px-[20px] py-[15px] mb-[10px] w-full" placeholder="Имя">
          <input type="text" class="bg-[#f3f3f3] px-[20px] py-[15px] mb-[10px] w-full" placeholder="Номер телефона*">
          <input type="text" class="bg-[#f3f3f3] px-[20px] py-[15px] mb-[10px] w-full" placeholder="E-mail*">
          <input type="text" class="bg-[#f3f3f3] px-[20px] py-[15px] mb-[10px] w-full"
            placeholder="Интересующий товар/услуга">
          <textarea class="bg-[#f3f3f3] px-[20px] py-[15px] mb-[10px] w-full" name="" id="" cols="30" rows="6"
            placeholder="Сообщение*"></textarea>
          <label class="flex items-baseline cursor-pointer">
            <input type="checkbox" class="mr-2.5">
            Отправляя заявку Вы соглашаетесь с политикой конфиденциальности
          </label>
          <Button type="bg-black" class="mt-[20px]">
            ОТПРАВИТЬ
          </Button>
        </form>
        <div class="col-span-12 hidden lg:block lg:col-span-8">
          <img class="w-full" src="/images/manager.png" alt="manager">
        </div>
      </div>
    </section>
  </div>
</template>
