<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

const menu = ref([
  { id: 1, title: 'ГЛАВНАЯ', link: '/home' },
  { id: 2, title: 'ГАЛЕРЕЯ', link: '/gallery' },
  { id: 3, title: 'ПРОЕКТЫ', link: '/projects' },
  { id: 4, title: 'СЕРТИФИКАТЫ', link: '/certificates' },
  { id: 5, title: 'КОНТАКТЫ', link: '/contact' },
])
</script>

<template>
  <nav class="py-[30px] px-4">
    <!-- Общий flex контейнер для логотипа, гамбургера и меню -->
    <div class="flex flex-col lg:flex-row lg:justify-between lg:items-center">
      <!-- Логотип и гамбургер -->
      <div class="flex justify-between items-center">
        <router-link to="/home">
          <img src="../assets/logo.svg" alt="logo company" class="h-[40px]" />
        </router-link>
        <button class="lg:hidden" @click="isOpen = !isOpen">
          <img src="/images/icons/hamburger.svg" alt="Hamburger icon" class="h-[24px]" />
        </button>
      </div>

      <!-- Меню -->
      <ul
        :class="[
          'flex-col gap-4 text-xs mt-4',
          isOpen ? 'flex' : 'hidden',
          'lg:mt-0 lg:flex lg:flex-row lg:items-center lg:gap-[60px]'
        ]"
      >
        <li v-for="item in menu" :key="item.id">
          <router-link
            :to="item.link"
            :class="[
              'block py-2 transition-all',
              $route.path.startsWith(item.link) ? 'border-y' : ''
            ]"
          >
            {{ item.title }}
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
