<script setup>
defineProps({
  datas: {
    type: Array,
    default: () => [
      {
        langage: "",
        percentage: "",
      },
    ],
  },
  title: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div class="grid grid-cols-2">
    <div v-for="(data, dataIndex) in datas" :key="dataIndex">
      <div class="my-4 text-left font-bold">{{ data.langage }}</div>
      <div class="flex w-3/4 rounded-xl bg-gray-200 text-xs">
        <div
            id="experienceBar"
            :style="data.percentage"
            class=" h-1 justify-start relative rounded-xl bg-[#5f240f] text-right"
        >
          <fa
              icon="fa-solid fa-message "
              class="fa-2xl col absolute bottom-1.5 -right-4 text-[#5f240f]"
          /><span class="absolute bottom-3 -right-4 text-white">{{
            data.percentage.substring(8)
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>