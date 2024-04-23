<script setup lang="ts">
const emit = defineEmits(["clicked"]);
</script>

<template>
  <button
    class="aspect-square h-8 rounded-full -mt-[5px] border-4 border-space-black shadow-comic transition-all hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-comic-offset"
    @click="$emit('clicked')"
  ></button>
</template>
