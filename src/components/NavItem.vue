<script setup lang="ts">
import { computed, defineProps, inject, onMounted, reactive, ref } from "vue";

const props = defineProps({
  linkTo: {
    type: String,
    required: true,
  },
  firstItem: Boolean,
  middleItem: Boolean,
  lastItem: Boolean,
});

const winMinWidth: number | undefined = inject("thin-width");
const isWindowThin = ref(ifWindowThin());

const buttonPositionStyle = reactive({
  "rounded-l-[10px] 2xl:rounded-l-[20px]":
    props.firstItem && !isWindowThin.value,
  "border-0": props.middleItem || !(props.firstItem || props.lastItem),
  "rounded-r-[10px] 2xl:rounded-r-[20px]":
    props.lastItem && !isWindowThin.value,

  "rounded-t-[10px] 2xl:rounded-t-[20px]":
    props.firstItem && isWindowThin.value,
  "rounded-b-[10px] 2xl:rounded-b-[20px]": props.lastItem && isWindowThin.value,
});

function onResize(e: any) {
  isWindowThin.value = ifWindowThin();
}

function ifWindowThin(): boolean {
  if (winMinWidth == undefined) return true;

  return window.innerWidth < winMinWidth;
}

onMounted(() => {
  window.addEventListener("resize", onResize);
});
</script>

<template>
  <a
    :href="props.linkTo"
    class="h-full w-full bg-space-blue p-5 flex items-center shadow-comic-b-h font-play font-bold outline outline-4 transition-all hover:translate-y-[-10px] hover:shadow-comic-b"
    :class="buttonPositionStyle"
  >
    <slot></slot>
  </a>
</template>
