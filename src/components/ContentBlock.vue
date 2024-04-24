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
  <div class="mt-28 mb-[80px]">
    <div class="relative -top-[220px]" :id="props.id" />
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
    <main
      class="mt-[-60px] 2xl:mt-[-80px] overflow-hidden mx-auto border-space-black transition-all dropdown-content"
      :class="{
        'h-0 border-y-0 pt-0': states.collapsed || states.closed,
        'border-y-4 pt-[60px]': !states.collapsed && !states.closed,
      }"
    >
      <div class="full px-0 sm:px-10 2xl:px-0 2xl:w-3/5 mx-auto h-fit">
        <slot></slot>
      </div>
    </main>
  </div>
</template>
