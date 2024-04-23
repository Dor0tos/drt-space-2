<script setup lang="ts">
import DecoButton from "./DecoButton.vue";
const emit = defineEmits(["collapse", "recover", "close"]);
</script>

<template>
  <section
    class="w-3/5 h-[80px] bg-space-accent rounded-[20px] relative top-[-40px] z-10 border-4 border-space-black flex flex-row text-center justify-center md:justify-normal items-center gap-8 px-12 mx-auto shadow-comic"
  >
    <h2 class="font-play font-bold text-4xl"><slot></slot></h2>
    <div class="h-1 grow bg-space-black rounded-full hidden sm:block" />
    <div class="flex-row gap-4 hidden lg:flex">
      <DecoButton
        class="bg-space-green-default hover:bg-space-green-bright transition-colors"
        @clicked="$emit('collapse')"
      />
      <DecoButton
        class="bg-space-yellow-default hover:bg-space-yellow-bright transition-colors"
        @clicked="$emit('recover')"
      />
      <DecoButton
        class="bg-space-red-default hover:bg-space-red-bright transition-colors"
        @clicked="$emit('close')"
      />
    </div>
  </section>
</template>
