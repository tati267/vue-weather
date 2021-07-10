<template>
  <section class="weather">
    <p class="weather_city">
      {{ getCurrentCity.name }} {{ getCurrentCity.country }}
    </p>

    <div class="weather_img">
      <img
        class="object move-left"
        v-bind:src="weatherIconURL(getCurrentCity.icon)"
        v-bind:alt="getCurrentCity.icon"
      />
      <img />
    </div>

    <p class="weather_temparture">{{ getCurrentCity.temp.toFixed() - 273 }}</p>
    <p class="weather_description">{{ getCurrentCity.condition }}</p>

    <div class="weather_particularity">
      <span class="humidity">{{ getCurrentCity.humidity }}%</span>
      <span class="wind-pressure">{{ getCurrentCity.pressure }} mBar</span>
      <span class="wind-speed">{{ getCurrentCity.wind.toFixed() }} m/s</span>
    </div>
  </section>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "Hero",

  setup() {
    const store = useStore();

    const getCurrentCity = computed(() => {
      return store.getters["current/getCurrentCity"];
    });

    const weatherIconURL = (icon) => {
      if (icon == "50d" || icon == "50n") {
        return require("../assets/large/Mist.png");
      } else if (icon == "13d" || icon == "13n") {
        return require("../assets/large/Snow.png");
      } else if (icon == "11d" || icon == "11n") {
        return require("../assets/large/Thunderstorm.png");
      } else if (icon == "10d" || icon == "10n") {
        return require("../assets/large/Rain.png");
      } else if (icon == "09d" || icon == "09n") {
        return require("../assets/large/Shower rain.png");
      } else if (icon == "04d" || icon == "04n") {
        return require("../assets/large/Broken clouds.png");
      } else if (icon == "03d" || icon == "03n") {
        return require("../assets/large/Scattered clouds.png");
      } else if (icon == "02d") {
        return require("../assets/large/Few cloudsD.png");
      } else if (icon == "02n") {
        return require("../assets/large/Few cloudsN.png");
      } else if (icon == "01d") {
        return require("../assets/large/Clear skyD.png");
      } else if (icon == "01n") {
        return require("../assets/large/Clear skyN.png");
      }
    };

    return {
      getCurrentCity,
      weatherIconURL,
    };
  },
};
</script>

<style scoped lang="scss">
.weather {
  text-align: left;
  position: relative;

  &_city {
    text-align: left;
    font-size: 20px;
    margin-bottom: 40px;
    z-index: 2;
  }

  &_img {
    align-items: center;
    margin-bottom: 5px;
    position: absolute;
    top: -95px;
    right: -100px;
  }

  &_description {
    padding-top: 4px;
    width: 200px;
    height: 26px;
    text-align: center;
    letter-spacing: 1.25px;
    text-transform: capitalize;
    background-color: #363361;
    border-radius: 15px;
    font: 400 18px Roboto;
    margin-bottom: 30px;
  }

  &_temparture {
    width: fit-content;
    font-size: 80px;
    line-height: 80px;
    position: relative;
    margin-bottom: 40px;

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
    margin-bottom: 10px;
    padding-bottom: 20px;
  }
}

.object {
  position: absolute;
  transition: all 3s ease-in-out;
}

.move-left {
  transform: translate(-350px, 0);
}

.humidity {
  text-align: center;
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
  left: 15px;
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
  left: 50px;
  top: 0;
  background-image: url(../assets/svg/wind.svg);
  background-repeat: no-repeat;
  background-position: 0 0px;
}
</style>
