<script setup lang="ts">
import { inject, onMounted, reactive, ref, type Ref } from "vue";

const winMinWidth: number | undefined = inject("thin-width");
const isWindowThin: any = ref(ifWindowThin());
const isNavOnTop: any = ref(ifNavOnTop());

function onResize(e: any) {
  isWindowThin.value = ifWindowThin();
}

function onScroll(e: any) {
  isNavOnTop.value = ifNavOnTop();
  console.log(isNavOnTop.value);
}

function ifNavOnTop(): boolean {
  return window.scrollY > window.innerWidth / 2;
}

function ifWindowThin(): boolean {
  if (winMinWidth == undefined) return true;

  return window.innerWidth < winMinWidth;
}

onMounted(() => {
  window.addEventListener("resize", onResize);
  window.addEventListener("scroll", onScroll);
});
</script>

<template>
  <div
    class="w-2/5 lg:w-3/5 top-[20px] z-20 sticky mx-auto shadow-comic-center text-lg md:text-xl lg:text-2xl"
  >
    <nav class="flex flex-row gap-1 h-[40px] 2xl:h-[60px]" v-if="!isWindowThin">
      <div
        class="h-full w-full bg-space-black absolute -z-10 top-4 rounded-[10px] 2xl:rounded-[20px]"
      ></div>
      <slot></slot>
    </nav>
    <nav class="w-full flex flex-col gap-1 h-[40px] 2xl:h-[60px]" v-else>
      <!--<div
        class="h-full w-full bg-space-black absolute -z-10 top-4 rounded-[10px] 2xl:rounded-[20px]"
      ></div>-->
      <div
        class="w-full relative flex flex-col gap-1 h-[40px] 2xl:h-[60px]"
        v-if="isNavOnTop"
      >
        <slot></slot>
      </div>

      <button class="w-full h-10 bg-white">Fuck</button>

      <div
        class="w-full relative flex flex-col gap-1 h-[40px] 2xl:h-[60px]"
        v-if="!isNavOnTop"
      >
        <slot></slot>
      </div>
    </nav>
  </div>
</template>
