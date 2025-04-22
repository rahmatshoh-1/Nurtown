<script setup>
import Button from '@/components/Button.vue';
import { ref } from 'vue';
// const contacts = ref([
//   { id: 1, title: '«Digital Project»', supTitle: 'г. Караганда, ул. Телевизионная 10 ', phone: '+7 (701) 77 76 811', email: 'Galym.sultanov@mail.ru' },
// ])
</script>
<template>
  <div class="container mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-12">
      <div class="col-span-6 mb-[32px]">
        <h1 class="text-[48px] md:text-[64px] leading-16 text-[#333333] font-bold uppercase">
          <span class="text-[#bdbdbd] font-normal">КОНТАКТНАЯ</span><br />ИНФОРМАЦИЯ
        </h1>
        <div class="my-[32px]">
          <h3 class="text-[18px] font-bold">«Digital Project»</h3>
          <p>г. Караганда, ул. Телевизионная 10 </p>
        </div>
        <p class="text-[18px] font-bold">
          <a href="tel:+77017776811">+7 (701) 77 76 811</a>
        </p>
        <p class="text-[18px] font-bold mt-[52px] mb-[32px]">
          <a href="mailto:galym.sultanov@mail.ru">Galym.sultanov@mail.ru</a>
        </p>
        <Button class="uppercase" type="bg-black">Орабтная связь</Button>
      </div>
      <div class="col-span-6">
        <div style="position:relative;overflow:hidden;"><a href="https://yandex.com/maps/164/karaganda/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;">Караганда</a><a href="https://yandex.com/maps/164/karaganda/house/televizionnaya_koshesi_10/Y0oYdg9gTE0HQFpjfXRzc3pqbQ==/?ll=73.081659%2C49.822588&utm_medium=mapframe&utm_source=maps&z=15.67" style="color:#eee;font-size:12px;position:absolute;top:14px;">Телевизионная улица, 10 — Яндекс Карты</a><iframe src="https://yandex.com/map-widget/v1/?ll=73.081659%2C49.822588&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg2NzQyNDE4NxJT0prQsNC30LDSm9GB0YLQsNC9LCDSmtCw0YDQsNKT0LDQvdC00YssINCi0LXQu9C10LLQuNC30LjQvtC90L3QsNGPINC606nRiNC10YHRliwgMTAiCg1CKZJCFXFKR0I%2C&z=15.67" width="100%" height="450" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe></div>
      </div>
    </div>

  </div>
</template>
