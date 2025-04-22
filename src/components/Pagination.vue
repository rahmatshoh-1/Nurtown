<script setup>
defineProps({
  currentSlide: {
    type: Number,
    required: true
  },
  totalSlides: {
    type: Number,
    required: true
  }
});
</script>
<template>
  <div class="flex justify-start gap-5 items-center">
    <div class="inline-flex gap-5">
      <button
        class="swiper-button-prev cursor-pointer">
        <img class="rotate-180  border border-[#f2f2f2] bg-white inline-flex p-[12px] w-[52px] h-[52px]" src="/images/icons/arrow.svg" alt="arrow">
      </button>
      <button
        class="swiper-button-next cursor-pointer">
        <img class="border border-[#f2f2f2] bg-[#f9f9f9] inline-flex p-[12px] w-[52px] h-[52px]" src="/images/icons/arrow.svg" alt="arrow">
      </button>
    </div>
    <ul class="text-[#bdbdbd] text-2xl">
      <li>{{ currentSlide }} / {{ totalSlides }} </li>
    </ul>
  </div>
</template>
