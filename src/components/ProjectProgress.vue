<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";

const props = defineProps({
  state: {
    type: String,
    default: "not-set",
  },
  progress: {
    type: Number,
    default: -1,
  },
});
/*
    Progress States:
    + not-set: не установлено
        [-] Ни на что не влияет
        [-] Отображение пустого прогресс бара

        [c] Серый
    + in-progress: В процессе разработки
        [-] Прогресс бар устанавливает случайное значение или установленное ручками
        [-] Значение, установленное ручками приоритетнее значения, установленного рандомом
        
        [c] Желтый
    + frozen: Проект заморожен
        [-] Прогресс бар устанавливает случайное значение или установленное ручками
        [-] Значение, установленное ручками приоритетнее значения, установленного рандомом
        [-] Прогресс бар синий
        
        [c] Синий
    + ready: Проект завершён
        [-] Прогресс бар заполнен одной большой полосой
        
        [c] Зелёный
    + not-supported: Проект завершён, но больше не поддерживается
        [-] Прогресс бар заполнен одной большой полосой
        
        [c] Красный
*/

const progress_cells = ref(0);
const progress_name = ref("Неизвестно");

const progressWidthClass = reactive({
  "w-[10px]": props.state == "frozen" || props.state == "in-progress",
  "w-full": props.state == "ready" || props.state == "not-supported",
});

const progressColorClass = reactive({
  "bg-[#9D9894]": props.state == "frozen",
  "bg-space-black":
    props.state == "ready" ||
    props.state == "not-supported" ||
    props.state == "in-progress",
});

function getInProgressCellsCount() {
  if (props.progress == -1) {
    progress_cells.value = Math.floor(Math.random() * 0 + 10);
  } else {
    progress_cells.value = props.progress;
  }
}

onMounted(() => {
  // not-set и прочие неустановленные значения обрабатываются блоком 'default'
  switch (props.state) {
    case "frozen":
      getInProgressCellsCount();
      progress_name.value = "Заморожен";
      break;
    case "in-progress":
      getInProgressCellsCount();
      progress_name.value = "В процессе";
      break;
    case "ready":
      progress_cells.value = 1;
      progress_name.value = "Готов";
      break;
    case "not-supported":
      progress_cells.value = 1;
      progress_name.value = "Не поддерживается";
      break;

    default:
      progress_cells.value = 0;
      progress_name.value = "Неизвестно";
      break;
  }
});
</script>

<template>
  <section class="flex flex-col gap-2">
    <h4>
      Текущее состояние:<br /><span class="font-bold">{{ progress_name }}</span>
    </h4>
    <div
      class="w-full h-10 border-[3px] border-space-black rounded-[5px] flex flex-row gap-[2px] p-[2px] overflow-clip"
    >
      <div
        class="h-full rounded-[2.5px]"
        :class="[progressWidthClass, progressColorClass]"
        v-for="x in progress_cells"
      />
    </div>
  </section>
</template>
