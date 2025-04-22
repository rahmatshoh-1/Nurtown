<script setup>
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';
</script>
<template>
  <header>
    <div class="container mx-auto">
      <Header></Header>
    </div>
  </header>
  <main class="py-10 px-4">
    <!-- Тут будет отображаться содержимое страниц -->
    <slot />
  </main>

  <footer class="bg-[#2C2C2C] py-6 mt-10 px-4">
    <div class="container mx-auto">
      <Footer />
      <div class="container mx-auto text-center my-[24px] text-[#C8C8C880]">
        © 2025 Все права защищены
      </div>
    </div>
  </footer>
</template>
