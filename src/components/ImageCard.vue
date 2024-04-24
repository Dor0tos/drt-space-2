<script setup lang="ts">
import { onMounted, reactive } from "vue";

const props = defineProps({
  title: String,
  img_url: String,
  size: {
    type: Number,
    default: 1,
  },
});
</script>

<template>
  <section
    class="mb-10 rounded-[15px] flex flex-col font-play overflow-hidden shadow-xl flex-shrink-0"
    :class="{
      'w-full  sm:w-[30%]': size == 1,
      'w-full sm:w-[65%]': size == 2,
      'w-full': size == 3,
    }"
  >
    <header
      class="h-10 px-8 border-4 border-space-black items-center flex flex-row font-semibold overflow-hidden bg-space-main rounded-t-[15px]"
    >
      {{ title }}
    </header>
    <div class="items-center flex flex-row gap-4 grow">
      <img class="h-full object-cover" :src="img_url" />
    </div>
  </section>
</template>
