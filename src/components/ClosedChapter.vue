<script setup lang="ts">
const emit = defineEmits(["open"]);
</script>

<template>
  <section
    class="w-3/5 h-[80px] bg-opacity-50 bg-space-dark rounded-[20px] relative top-[-40px] z-10 border-4 border-dashed border-space-black flex flex-row text-center justify-center md:justify-between items-center gap-8 px-12 mx-auto"
  >
    <h2 class="font-play text-3xl">
      Вы закрыли
      <span class="font-bold underline"><slot></slot></span>
      :(
    </h2>
    <button
      class="font-play text-xl py-2 px-5 bg-space-green-default rounded-[10px] border-4 border-space-black shadow-comic hover:bg-space-green-bright hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-comic-offset transition-all"
      @click="$emit('open')"
    >
      Открыть
    </button>
  </section>
</template>
