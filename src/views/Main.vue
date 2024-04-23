<script setup lang="ts">
import NavBar from "@/components/NavBar.vue";
import Header from "@/components/Header.vue";
import NavItem from "@/components/NavItem.vue";
import ContentBlock from "@/components/ContentBlock.vue";
import SpaceFooter from "@/components/SpaceFooter.vue";
import ProjectsView from "@/components/ProjectsView.vue";
import { useRouter } from "vue-router";
import ImageCard from "@/components/ImageCard.vue";
import ArtsView from "@/components/ArtsView.vue";

const router = useRouter();

function foo() {
  router.push("/what");
}
</script>

<template>
  <Header />
  <NavBar>
    <NavItem
      link-to="#projects"
      class="bg-space-red-default hover:bg-space-red-bright"
      first-item
      >Проекты</NavItem
    >
    <NavItem
      link-to="#arts"
      class="bg-space-green-default hover:bg-space-green-bright"
      >Арты</NavItem
    >
    <NavItem
      link-to="#skills"
      class="bg-space-blue-default hover:bg-space-blue-bright"
      >Навыки</NavItem
    >
    <NavItem
      link-to="#contact"
      class="bg-space-yellow-default hover:bg-space-yellow-bright"
      last-item
      >Контакты</NavItem
    >
  </NavBar>

  <ContentBlock title="Проекты" id="projects" class="bg-space-dark-blue">
    <ProjectsView />
  </ContentBlock>
  <ContentBlock title="Арты" id="arts" class="bg-slate-200">
    <ArtsView />
  </ContentBlock>
  <ContentBlock title="Навыки" id="skills" class="bg-space-dark-blue" />
  <ContentBlock title="Контакты" id="contact" class="bg-space-dark-blue" />

  <SpaceFooter />
</template>

<style scoped>
@font-face {
  font-family: "Play";
  font-style: normal;
  font-weight: 400;
  src: url("./assets/fonts/Play-Regular.ttf");
}

@font-face {
  font-family: "Play";
  font-style: normal;
  font-weight: 600;
  src: url("./assets/fonts/Play-Bold.ttf");
}

@font-face {
  font-family: "Sofia Sans";
  font-style: normal;
  src: url("./assets/fonts/SofiaSans.ttf");
}
</style>
