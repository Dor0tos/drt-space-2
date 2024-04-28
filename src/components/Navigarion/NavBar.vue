<script setup lang="ts">
import { onMounted, ref } from "vue";
import IconWinLogo from "../icons/IconWinLogo.vue";

const isNavOnTop: any = ref(checkIfNavOnTop());
const isTopSticked: any = ref(checkIfTopSticked());
const isMenuVisible: any = ref(false);

function onScroll(e: any) {
  isNavOnTop.value = checkIfNavOnTop();
  isTopSticked.value = checkIfTopSticked();
}

function checkIfNavOnTop(): boolean {
  return window.scrollY > window.innerHeight - 400;
}

function checkIfTopSticked(): boolean {
  return window.scrollY <= window.innerHeight;
}

onMounted(() => {
  window.addEventListener("scroll", onScroll);
});
</script>

<template>
  <div
    class="w-full top-[20px] z-20 sticky shadow-comic-center text-lg md:text-xl lg:text-2xl"
  >
    <div
      class="w-full bg-space-bg absolute border-space-black -z-10 -top-[20px] shadow-md transition-all duration-75"
      :class="{
        'h-[0px] border-b-0': isTopSticked,
        'h-[50px] lg:h-[40px] xl:h-[50px] border-b-4': !isTopSticked,
      }"
    ></div>
    <nav
      class="hidden w-3/5 lg:flex flex-row mx-auto gap-1 h-[40px] 2xl:h-[60px]"
    >
      <div
        class="h-full w-3/5 bg-space-black absolute -z-10 top-4 rounded-[10px] 2xl:rounded-[20px]"
      ></div>
      <slot></slot>
    </nav>
    <nav class="w-full flex lg:hidden flex-col gap-1 items-center">
      <div
        class="w-[50px] h-[50px] bg-space-black absolute -z-10 top-4 rounded-[10px] 2xl:rounded-[20px]"
      ></div>

      <button
        class="w-[60px] h-[60px] border-4 border-space-black bg-space-accent active:bg-white p-1 rounded-[10px]"
        @click="isMenuVisible = !isMenuVisible"
      >
        <IconWinLogo class="w-full h-full" />
      </button>

      <Transition name="slide-fade">
        <div
          class="w-2/5 absolute flex flex-col gap-1 h-[40px] 2xl:h-[60px] transition-transform"
          :class="{
            'translate-y-20': isNavOnTop,
            '-translate-y-[200px]': !isNavOnTop,
          }"
          v-if="isMenuVisible"
        >
          <slot></slot>
        </div>
      </Transition>
    </nav>
  </div>
</template>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.1s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.1s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: scale(0.2);
  opacity: 0;
}
</style>
