<template>
  <section class="weather">
    <p class="weather_name">
      {{ getCurrentCity.name }} {{ getCurrentCity.country }}
    </p>

    <div class="weather_img">
      <img />
    </div>

    <p class="weather_description">{{ getCurrentCity.condition }}</p>

    <p class="weather_temparture">{{ getCurrentCity.temp.toFixed() - 273 }}</p>

    <div class="weather_particularity">
      <span class="humidity">{{ getCurrentCity.humidity }}%</span>
      <span class="wind-pressure">{{ getCurrentCity.pressure }} mBar</span>
      <span class="wind-speed">{{ getCurrentCity.wind }} m/s</span>
    </div>
  </section>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "MenuWeather",

  setup() {
    const store = useStore();

    const getCurrentCity = computed(() => {
      return store.getters["current/getCurrentCity"];
    });

    return {
      getCurrentCity,
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
  left: 25px;
  top: 0;
  background-image: url(../assets/svg/wind.svg);
  background-repeat: no-repeat;
  background-position: 0 0px;
}
</style>
