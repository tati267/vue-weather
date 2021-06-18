<template>
  <Card v-for="(item, index) in computedWeatherArr" :key="index" :item="item" />
</template>

<script lang="ts">
import Card from "./Card.vue";
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "CardList",
  components: {
    Card,
  },
  setup() {
    const store = useStore();
    const computedWeatherArr = computed(() => {
      return store.getters["list/getWeatherArr"];
    });
    return {
      computedWeatherArr,
    };
  },
};
</script>
