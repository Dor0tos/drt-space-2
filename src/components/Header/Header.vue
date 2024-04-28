<script setup lang="ts">
import { onMounted, ref } from "vue";
import IconLogo from "../icons/IconLogo.vue";
import GrassSVG from "../icons/GrassSVG.vue";

const currentHour = ref(0);

onMounted(() => {
  currentHour.value = new Date().getHours();
});
</script>

<template>
  <header class="h-svh pb-[60px] -mb-[90px] lg:-mb-[80px] 2xl:-mb-[90px]">
    <div
      class="pattern select-none border-b-4 border-space-black h-full flex items-center justify-center"
      :class="{
        'morning-sky': currentHour >= 5 && currentHour < 11,
        'day-sky': currentHour >= 11 && currentHour < 17,
        'evening-sky': currentHour >= 17 && currentHour < 22,
        'night-sky': currentHour >= 22 || currentHour < 5,
      }"
    >
      <div class="absolute bottom-[64px] w-full overflow-hidden h-1/2">
        <GrassSVG
          class="outline-4 outline-space-black"
          :class="{
            'morning-grass': currentHour >= 5 && currentHour < 11,
            'day-grass': currentHour >= 11 && currentHour < 17,
            'evening-grass': currentHour >= 17 && currentHour < 22,
            'night-grass': currentHour >= 22 || currentHour < 5,
          }"
        />
      </div>
      <IconLogo class="animate-sine h-3/4 max-w-[75%] z-10" />
    </div>
  </header>
</template>

<style scoped>
.morning-sky {
  background-color: #fcffe2;
}

.day-sky {
  background-color: #b4f7ff;
}

.evening-sky {
  background-color: #ffe0b7;
}

.night-sky {
  background-color: #676e94;
}

.morning-grass {
  fill: #a4f6d0;
}

.day-grass {
  fill: #abe9c7;
}

.evening-grass {
  fill: #b5d68a;
}

.night-grass {
  fill: #69aaa1;
}

.pattern {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%238d99ae' fill-opacity='0.29'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
</style>
