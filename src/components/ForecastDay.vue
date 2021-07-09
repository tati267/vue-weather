<template>
  <carousel :items-to-show="3">
    <slide v-for="slide in getCurrentCityHourly" :key="slide">
      <div class="slide">
        <p class="slide">{{ slide.time }}</p>
        <p class="slide">{{ (slide.temp-273).toFixed() }}</p>
      </div>
    </slide>

    <template #addons>
      <navigation />
      <pagination />
    </template>
  </carousel>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "ForecastDay",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },

  setup() {
    const store = useStore();

    const getCurrentCityHourly = computed(() => {
      return store.getters["current/getCurrentCityHourly"];
    });

    return {
      getCurrentCityHourly,
    };
  },
};
</script>
