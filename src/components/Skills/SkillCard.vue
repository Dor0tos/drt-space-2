<script setup lang="ts">
import IconLogo from "@/components/icons/IconWinLogo.vue";
import { reactive } from "vue";

const props = defineProps({
  title: {
    type: String,
    reqired: true,
  },
  description: {
    type: String,
    reqired: true,
  },
});
</script>

<template>
  <div class="flex flex-col justify-end h-[250px]">
    <div
      class="w-full h-3/4 relative bg-space-main border-4 border-space-black flex flex-col gap-2 items-center justify-center rounded-[10px]"
    >
      <header
        class="w-[120px] aspect-square absolute -top-[70px] z-10 mx-auto flex items-center justify-center"
      >
        <slot></slot>
      </header>
      <main
        class="flex flex-col justify-end items-center pb-8 w-full h-full gap-2"
      >
        <h3 class="text-3xl font-bold font-sofia">{{ title }}</h3>
        <p class="text-md font-bold font-play text-wrap text-center">
          {{ description }}
        </p>
      </main>
    </div>
  </div>
</template>
