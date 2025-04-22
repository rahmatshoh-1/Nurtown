<script setup>
import { ref } from 'vue';

const pages = ref([
  { id: 1, title: 'Главная', link: '/home' },
  { id: 2, title: 'Галерея', link: '/gallery' },
  { id: 3, title: 'Проекты', link: '/projects' },
  { id: 4, title: 'Сертификаты', link: '/certificates' },
  { id: 5, title: 'Контакты', link: '/contact' },
])
const addressInfo = ref([
  { id: 1, alt: 'address', imgUrl: '/images/icons/location.svg', title: '100000, Республика  Казахстан,г. Караганда, ул. Телевизионная 10', link: '#' },
  { id: 2, alt: 'phone', imgUrl: '/images/icons/phone.svg', title: '+7 (701) 77 76 811', link: '+77017776811' },
  { id: 3, alt: 'email', imgUrl: '/images/icons/email.svg', title: 'Galym.sultanov@mail.ru', link: 'galym.sultanov@mail.ru' },
])

const socialMedia = ref([
  { id: 1, alt: 'facebook', imgUrl: '/images/icons/facebook.svg', link: '#' },
  { id: 2, alt: 'twitter', imgUrl: '/images/icons/twitter.svg', link: '+77017776811' },
  { id: 3, alt: 'LinkedIn', imgUrl: '/images/icons/LinkedIn.svg', link: 'galym.sultanov@mail.ru' },
  { id: 4, alt: 'pininterest', imgUrl: '/images/icons/pininterest.svg', link: 'galym.sultanov@mail.ru' },
])

</script>
<template>
  <footer class="py-[60px] border-b border-white/10">
    <div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-12 text-white">
      <div class="col-span-2">
        <router-link to="/home">
          <img src="/images/icons/logoFooter.png" alt="logo company">
        </router-link>
      </div>
      <ul class="col-span-3 text-sm"><span class="text-base flex mb-[25px] font-bold">Информация</span>
        <li v-for="page in pages" :key="page.id" class="mb-[16px]">
          <router-link :to="page.link">
            {{ page.title }}
          </router-link>
        </li>

      </ul>
      <ul class="col-span-3 text-sm"><span class="text-base flex mb-[25px] font-bold">Контакты</span>
        <li v-for="addInfo in addressInfo" :key="addInfo.id" class="mb-[32px]">
          <router-link to="#" class="inline-flex">
            <img class="mr-[20px]" :src="addInfo.imgUrl" :alt="addInfo.alt">
            {{ addInfo.title }}
          </router-link>
        </li>
      </ul>
      <div class="col-span-4 text-sm"><span class="text-base flex mb-[25px] font-bold text-center">Социальные
          сети</span>
        <div class="flex justify-start gap-[40px]">
          <div v-for="sm in socialMedia" :key="sm.id" class="mb-[32px]">
            <router-link :to="sm.link">
              <img :src="sm.imgUrl" :alt="sm.alt">
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
