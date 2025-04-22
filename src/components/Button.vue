<script setup>
defineProps({
  type:String,
  default:'bg-white'
})
</script>

<template>
  <button :class="['tracking-[3px] inline-flex items-center cursor-pointer gap-3 py-[30px] px-[50px] outline-none text-xs', type === 'bg-black' ? 'bg-black text-white' : 'bg-white text-black']">
      <slot />
      <img  v-if="type === 'bg-black'" src="/images/icons/arrow-black.svg" alt="arrow button">
      <img v-else src="/images/icons/arrow.svg" alt="arrow button">
  </button>
</template>
