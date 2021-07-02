<template>
  <section class="city-list">
    <Card
      v-for="(item, index) in computedCityArr"
      :key="index"
      :item="item"
    />
  </section>
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
    const computedCityArr = computed(() => {
      return store.getters["list/getCityArr"];
    });
    return {
      computedCityArr,
    };
  },
};
</script>

<style scoped lang="scss">
.city-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
