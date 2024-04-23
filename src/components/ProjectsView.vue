<script setup lang="ts">
import { onMounted, ref } from "vue";
import { supabase } from "../libs/supabaseClient";
import ProjectCard from "./ProjectCard.vue";

const projects = ref([] as any);

async function getProjects() {
  const { data } = await supabase.from("projects").select();

  projects.value = data?.sort((A: any, B: any) => {
    console.log(A.order, " > ", B.order, " = ", A.order > B.order);
    if (A.order < B.order) return -1;
    else if (A.order < B.order) return 1;
    else return 0;
  });
  console.log("Prjs > ", projects.value);
}

onMounted(() => {
  getProjects();
});
</script>

<template>
  <main class="w-full grid grid-cols-1 2xl:grid-cols-2 gap-10 pb-10">
    <ProjectCard
      v-for="project in projects"
      :title="project.project_name"
      :description="project.short_description"
      :state="project.state"
      :skills="project.skills"
      :img_url="project.preview_image"
    />
  </main>
</template>
