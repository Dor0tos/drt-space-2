<script setup lang="ts">
import { onMounted, reactive } from "vue";
import ProjectProgress from "./ProjectProgress.vue";

const props = defineProps({
  title: String,
  description: String,
  img_url: String,
  state: String,
  skills: Array,
});

const thumbColor = reactive({
  "bg-space-yellow-default": props.state == "in-progress",
  "bg-space-green-default": props.state == "ready",
  "bg-space-red-default": props.state == "not-supported",
  "bg-space-blue-default": props.state == "frozen",
  "bg-space-dark-blue": props.state == "not-set",
});
</script>

<template>
  <section
    class="w-full h-[400px] bg-space-main rounded-[15px] border-4 border-space-black flex flex-col font-play shadow-comic mx-auto"
  >
    <header
      class="h-10 px-8 border-b-[3px] border-space-black items-center flex flex-row font-semibold flex-shrink-0"
    >
      Создание {{ title }}
    </header>
    <div class="p-8 items-center flex flex-row gap-4 grow">
      <aside
        class="h-full w-[170px] flex-shrink-0 rounded-[10px] border-[3px] border-space-black hidden lg:flex items-center justify-center"
        :class="thumbColor"
      >
        <img class="h-full" :src="img_url" />
      </aside>
      <main class="h-full grow flex flex-col place-content-between">
        <section>
          <h3 class="font-sofia text-3xl font-black">{{ title }}</h3>
          <h4 class="w-full">{{ description }}</h4>
        </section>
        <ProjectProgress :state="state" />
      </main>
    </div>
    <footer
      class="h-10 px-8 border-t-[3px] border-space-black items-center flex flex-row gap-2 flex-shrink-0"
    >
      <span v-for="skill in skills" class="underline">{{ skill }}</span>
    </footer>
  </section>
</template>
