<script setup lang="ts">
import ClosedChapter from "./ClosedChapter.vue";
import Title from "./Title.vue";
import { ref, defineProps } from "vue";

const states = ref({
  collapsed: false,
  closed: false,
});

const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  id: {
    type: String,
    reqired: true,
  },
});
</script>

<template>
  <div class="my-16 bg-transparent">
    <div class="relative -top-[220px] h-0 w-0" :id="props.id" />
    <header class="relative top-[30px] 2xl:top-[40px]">
      <Title
        @collapse="states.collapsed = !states.collapsed"
        @close="states.closed = true"
        v-if="!states.closed"
        >{{ props.title }}</Title
      >
      <ClosedChapter
        @open="
          () => {
            states.closed = false;
            states.collapsed = false;
          }
        "
        v-else
        >{{ props.title }}</ClosedChapter
      >
    </header>
    <main
      class="pt-0 overflow-hidden mx-auto bg-space-dark-blue border-space-black transition-all duration-100 dropdown-content"
      :class="{
        'h-0 border-y-0 pt-0': states.collapsed || states.closed,
        'border-y-4 pt-[60px]': !states.collapsed && !states.closed,
      }"
    >
      <div class="px-0 sm:px-10 2xl:px-0 2xl:w-3/5 mx-auto h-fit">
        <slot></slot>
      </div>
    </main>
  </div>
</template>
