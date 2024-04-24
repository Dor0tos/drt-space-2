<script setup lang="ts">
import { onMounted, ref } from "vue";
import { supabase } from "../libs/supabaseClient";
import ImageCard from "./ImageCard.vue";

const arts = ref([] as any);

async function getProjects() {
  const { data } = await supabase.from("arts").select();
  arts.value = data;
}

onMounted(() => {
  getProjects();
});
</script>

<template>
  <main class="w-full flex flex-wrap justify-between gap-2 sm:px-0 px-10">
    <ImageCard
      v-for="art in arts"
      :title="art.name"
      :img_url="art.url"
      :size="art.size"
    />
  </main>
</template>
