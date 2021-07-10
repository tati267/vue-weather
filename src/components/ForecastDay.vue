<template>
  <carousel :items-to-show="3">
    <slide v-for="slide in getCurrentCityHourly" :key="slide">
      <div class="slide slide-container">
        <p class="slide slide_time">{{ slide.time }}</p>
        <div class="img-container">
          <img
            v-bind:src="weatherIconURL(slide.icon)"
            v-bind:alt="slide.icon"
          />
        </div>
        <p class="slide slide-temp">{{ (slide.temp - 273).toFixed() }}</p>
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

    const weatherIconURL = (icon) => {
      if (icon == "50d" || icon == "50n") {
        return require("../assets/simple/Mist.png");
      } else if (icon == "13d" || icon == "13n") {
        return require("../assets/simple/Snow.png");
      } else if (icon == "11d" || icon == "11n") {
        return require("../assets/simple/Thunderstorm.png");
      } else if (icon == "10d") {
        return require("../assets/simple/RainD.png");
      } else if (icon == "10n") {
        return require("../assets/simple/RainN.png");
      } else if (icon == "09d" || icon == "09n") {
        return require("../assets/simple/Shower rain.png");
      } else if (icon == "04d" || icon == "04n") {
        return require("../assets/simple/Broken clouds.png");
      } else if (icon == "03d" || icon == "03n") {
        return require("../assets/simple/Scattered clouds.png");
      } else if (icon == "02d") {
        return require("../assets/simple/Few cloudsD.png");
      } else if (icon == "02n") {
        return require("../assets/simple/Few cloudsN.png");
      } else if (icon == "01d") {
        return require("../assets/simple/Clear skyD.png");
      } else if (icon == "01n") {
        return require("../assets/simple/Clear skyN.png");
      }
    };

    return {
      getCurrentCityHourly,
      weatherIconURL,
    };
  },
};
</script>

<style scoped lang="scss">
.slide-container {
  position: relative;
}

.slide_time {
  margin-bottom: 65px;
}

.img-container {
  position: absolute;
  top: 0px;
  left: -27px;
}

.slide-temp {
    width: fit-content;
    position: relative;
    margin-left: 10px;

    &::before {
      content: "";
      position: absolute;
      width: 15px;
      height: 16px;
      right: -16px;
      background-image: url(../assets/circle_sm.png);
      background-repeat: no-repeat;
      background-position: 0 0px;
    }
}
</style>
