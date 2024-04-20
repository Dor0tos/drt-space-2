<script setup lang="ts">
import Header from "./components/Header.vue";
import NavBar from "./components/NavBar.vue";
import NavItem from "./components/NavItem.vue";
</script>

<template>
  <Header />
  <NavBar>
    <NavItem
      link-to="#hay"
      class="bg-space-red-default hover:bg-space-red-bright"
      first-item
      >Проекты</NavItem
    >
    <NavItem
      link-to="#hay"
      class="bg-space-green-default hover:bg-space-green-bright"
      test
      >Арты</NavItem
    >
    <NavItem
      link-to="#hay"
      class="bg-space-blue-default hover:bg-space-blue-bright"
      >Навыки</NavItem
    >
    <NavItem
      link-to="#hay"
      class="bg-space-yellow-default hover:bg-space-yellow-bright"
      last-item
      >Контакты</NavItem
    >
  </NavBar>
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
