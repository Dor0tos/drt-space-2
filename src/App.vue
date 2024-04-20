<script setup lang="ts">
import Header from './components/Header.vue'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <Header/>
  <NavBar/>
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
