<script setup lang="ts">
import { reactive } from "vue";
import IconClipboard from "../icons/IconClipboard.vue";
import IconLink from "../icons/IconLink.vue";

const props = defineProps({
  title: {
    type: String,
    reqired: true,
  },
  windowName: {
    type: String,
    reqired: true,
  },
  clipboardValue: String,
  urlValue: String,
  color: String,
  displayValue: String,
  haveLink: Boolean,
  haveClipboard: Boolean,
  isPriority: Boolean,
});

const colors = reactive({
  "bg-space-red-default": props.color?.toLowerCase() == "red",
  "bg-space-yellow-default": props.color?.toLowerCase() == "yellow",
  "bg-space-blue-default": props.color?.toLowerCase() == "blue",
  "bg-space-green-default": props.color?.toLowerCase() == "green",
});

function goToURL() {
  window.open(props.urlValue, "_blank");
}

async function copyToClipboard() {
  await navigator.clipboard.writeText(
    props.clipboardValue ? props.clipboardValue : ""
  );
}
</script>

<template>
  <section
    class="w-full sm:w-[300px] h-[400px] bg-space-main sm:rounded-[15px] sm:border-x-4 border-y-4 border-space-black flex flex-col sm:shadow-comic"
  >
    <header
      class="h-[30px] w-full border-b-4 border-space-black px-5 font-play font-bold flex items-center justify-between"
    >
      <div>{{ windowName }}.exe</div>

      <div class="flex flex-row gap-1">
        <div
          v-for="x in 3"
          class="border-2 border-space-black aspect-square h-3 rounded-full"
        />
      </div>
    </header>
    <main class="grow flex flex-col gap-2 items-center justify-center">
      <div
        class="w-[150px] aspect-square rounded-full shadow-comic border-4 border-space-black p-5"
        :class="colors"
      >
        <slot></slot>
      </div>
      <h3 class="font-sofia text-3xl">{{ title }}</h3>
      <div
        class="font-play px-5 py-2 rounded-md w-fit bg-opacity-25 bg-space-dark flex flex-row gap-2 justify-center items-center"
      >
        <div>{{ displayValue ? displayValue : value }}</div>
      </div>
      <div class="flex gap-2">
        <button
          class="p-2 rounded-md w-fit aspect-square bg-opacity-25 transition-all hover:bg-opacity-50 bg-space-dark"
          v-if="haveLink"
          @click="goToURL"
        >
          <IconLink />
        </button>
        <button
          class="p-2 rounded-md w-fit aspect-square bg-opacity-25 transition-all hover:bg-opacity-50 bg-space-dark"
          v-if="haveClipboard"
          @click="copyToClipboard"
        >
          <IconClipboard />
        </button>
      </div>
    </main>
    <footer
      class="h-[30px] w-full border-t-4 border-space-black flex items-center"
    >
      <div class="font-play px-5" v-if="isPriority">Предпочтительнее</div>
    </footer>
  </section>
</template>
