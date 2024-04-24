<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  title: {
    type: String,
    default: "Section",
  },
  items: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <section>
    <h6 class="font-bold">{{ props.title }}</h6>
    <ul>
      <li v-for="item in $props.items" class="flex flex-row gap-1 items-center">
        <a :href="item.link" class="underline font-play">{{ item.text }}</a>
        <div class="opacity-75">
          <slot />
        </div>
      </li>
    </ul>
  </section>
</template>
