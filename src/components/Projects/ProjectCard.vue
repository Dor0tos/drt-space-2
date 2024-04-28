<script setup lang="ts">
import { onMounted, reactive } from "vue";
import ProjectProgress from "./ProjectProgress.vue";

const props = defineProps({
  title: String,
  description: String,
  img_url: String,
  state: String,
  skills: Array,
  externalLinks: Array,
});

const thumbColor = reactive({
  "bg-space-yellow-default": props.state == "in-progress",
  "bg-space-green-default": props.state == "ready",
  "bg-space-red-default": props.state == "not-supported",
  "bg-space-blue-default": props.state == "frozen",
  "bg-space-dark-blue": props.state == "not-set",
});

function goToURL(url: string) {
  window.open(url, "_blank");
}
</script>

<template>
  <section
    class="w-full text-xs md:text-lg xl:text-xl h-fit min-h-[320px] sm:h-[460px] bg-space-main sm:rounded-[15px] sm:border-x-4 border-y-4 border-space-black flex flex-col font-play sm:shadow-comic mx-auto"
  >
    <header
      class="py-2 px-8 border-b-[3px] border-space-black items-center flex flex-row font-semibold flex-shrink-0"
    >
      Создание {{ title }}
    </header>
    <main class="p-8 items-center flex flex-row gap-4 grow">
      <aside
        class="h-full w-[100px] sm:w-[170px] flex-shrink-0 rounded-[10px] border-[3px] border-space-black flex items-center justify-center"
        :class="thumbColor"
      >
        <img class="h-full object-center object-cover" :src="img_url" />
      </aside>
      <section class="h-full grow flex flex-col place-content-between">
        <section>
          <h3 class="font-sofia text-xl sm:text-3xl font-black">{{ title }}</h3>
          <h4 class="w-full">{{ description }}</h4>
        </section>
        <div>
          <ProjectProgress :state="state" />
          <div class="mt-2 flex gap-3">
            <button
              v-for="link in externalLinks"
              class="w-10 h-10 rounded-[5px] border-[3px] border-space-black bg-space-accent p-1 transition-all shadow-comic hover:shadow-comic-offset hover:-translate-x-[2px] hover:-translate-y-[2px]"
              @click="goToURL((link as any).link)"
            >
              <img :src="(link as any).icon" />
            </button>
          </div>
        </div>
      </section>
    </main>
    <footer
      class="py-2 px-8 border-t-[3px] border-space-black items-center flex flex-row gap-2 flex-shrink-0"
    >
      <span v-for="skill in skills">{{ skill }}</span>
    </footer>
  </section>
</template>
