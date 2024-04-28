<script setup lang="ts">
import { reactive } from "vue";

const props = defineProps({
  title: {
    type: String,
    reqired: true,
  },
  color: String,
});

const colors = reactive({
  "from-space-red-default to-space-red-bright":
    props.color?.toLowerCase() == "red",
  "from-space-yellow-default to-space-yellow-bright":
    props.color?.toLowerCase() == "yellow",
  "from-space-blue-default to-space-blue-bright":
    props.color?.toLowerCase() == "blue",
  "from-space-green-default to-space-green-bright":
    props.color?.toLowerCase() == "green",
});
</script>

<template>
  <section
    class="h-fit min-h-[300px] w-full bg-space-accent sm:rounded-[10px] border-x-0 border-y-4 sm:border-x-4 border-space-black flex flex-col sm:flex-row overflow-hidden shadow-comic"
  >
    <header
      class="sm:w-[50px] border-b-4 sm:border-b-0 sm:border-r-4 border-space-black flex items-center sm:[writing-mode:vertical-lr] sm:justify-end bg-gradient-to-r sm:bg-gradient-to-t px-5 py-2 sm:px-0 sm:py-5"
      :class="colors"
    >
      <div class="sm:rotate-180 font-sofia font-black text-2xl">
        {{ title }}
      </div>
    </header>
    <main
      class="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-5 gap-y-6 gap-x-3"
    >
      <slot></slot>
    </main>
  </section>
</template>
