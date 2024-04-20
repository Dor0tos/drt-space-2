<script setup lang="ts">
import { defineProps, reactive } from "vue";

const props = defineProps({
  linkTo: {
    type: String,
    required: true,
  },
  firstItem: Boolean,
  middleItem: Boolean,
  lastItem: Boolean,
});

const buttonPositionStyle = reactive({
  "rounded-l-[20px]": props.firstItem,
  "border-l-0": props.middleItem || !(props.firstItem || props.lastItem),
  "rounded-r-[20px] border-l-0": props.lastItem,
});
</script>

<template>
  <a
    :href="props.linkTo"
    class="h-full w-full bg-space-blue p-5 flex items-center shadow-comic-b-h font-play text-2xl font-bold outline outline-4 transition-all hover:translate-y-[-10px] hover:shadow-comic-b"
    :class="buttonPositionStyle"
  >
    <slot></slot>
  </a>
</template>
