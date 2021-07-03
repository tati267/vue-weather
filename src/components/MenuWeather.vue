<template>
  <section class="weather">
    <p ref="l" class="weather_name">{{ info.locationCity }}</p>
    <div class="weather_img">
      <img />
    </div>

    <p class="weather_description">{{ info.description }}</p>

    <p class="weather_temparture">{{ info.temp }}</p>

    <div class="weather_particularity">
      <span class="humidity">{{ info.humidity }}%</span>
      <span class="wind-pressure">{{ info.pressure }} mBar</span>
      <span class="wind-speed">{{ info.wind }} m/s</span>
    </div>
  </section>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { ref } from "vue";

export default {
  name: "MenuWeather",

  props: {
    item: {
      type: Object,
      required: true,
    },
  },

  setup() {
    const l = ref(null);
    const store = useStore();
    let info = {
      locationCity: "Los Angeles",
      description: "Mist",
      temp: 19,
      humidity: 20,
      pressure: 0.552,
      wind: 1,
    };

    const computedCity = computed(() => {
      return store.getters["list/getCityArr"];
    });
    return {
      l,
      info,
      computedCity,
    };
  },
};
</script>

<style scoped lang="scss">
.weather {
  text-align: center;

  &_name {
    text-align: center;
  }

  &_img {
    align-items: center;
    margin-bottom: 5px;
  }

  &_description {
    margin: 0 auto;
    padding-top: 4px;
    width: 200px;
    height: 26px;
    text-align: center;
    letter-spacing: 1.25px;
    text-transform: capitalize;
    background-color: #363361;
    border-radius: 15px;
    font: 400 18px Roboto;
    margin-bottom: 15px;
  }

  &_temparture {
    width: fit-content;
    font-size: 80px;
    line-height: 80px;
    margin: 0 auto;
    position: relative;
    margin-bottom: 24px;

    &::before {
      content: "";
      position: absolute;
      width: 15px;
      height: 16px;
      right: -12px;
      top: 0;
      background-image: url(../assets/svg/circle.svg);
      background-repeat: no-repeat;
      background-position: 0 0px;
    }
  }

  &_particularity {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-bottom: 50px;
  }
}

.humidity,
.wind-pressure,
.wind-speed {
  font-size: 14px;
  position: relative;
}

.wind-pressure,
.wind-speed {
  text-align: end;
}

.humidity::before {
  content: "";
  position: absolute;
  width: 14px;
  height: 20px;
  left: 15px;
  top: 0;
  background-image: url(../assets/svg/humidity.svg);
  background-repeat: no-repeat;
  background-position: 0 0px;
}

.wind-pressure::before {
  content: "";
  position: absolute;
  width: 13px;
  height: 24px;
  left: 5px;
  top: 0;
  background-image: url(../assets/svg/cold.svg);
  background-repeat: no-repeat;
  background-position: 0 0px;
}

.wind-speed::before {
  content: "";
  position: absolute;
  width: 16px;
  height: 19px;
  left: 45px;
  top: 0;
  background-image: url(../assets/svg/wind.svg);
  background-repeat: no-repeat;
  background-position: 0 0px;
}
</style>
