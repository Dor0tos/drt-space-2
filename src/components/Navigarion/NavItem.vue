<script setup lang="ts">
import { defineProps, reactive } from "vue";

defineEmits(["clicked"]);

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
  "rounded-t-[10px] lg:rounded-tr-[0px] lg:rounded-l-[10px] 2xl:rounded-l-[20px]":
    props.firstItem,
  "border-0": props.middleItem || !(props.firstItem || props.lastItem),
  "rounded-b-[10px] lg:rounded-bl-[0px] lg:rounded-r-[10px] 2xl:rounded-r-[20px]":
    props.lastItem,
});
</script>

<template>
  <a
    :href="props.linkTo"
    class="h-full w-full bg-space-blue p-5 flex items-center shadow-comic-b-h font-play font-bold outline outline-4 transition-all hover:translate-y-[-10px] hover:shadow-comic-b"
    :class="buttonPositionStyle"
    @click="$emit('clicked')"
  >
    <slot></slot>
  </a>
</template>
