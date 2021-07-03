<template>
  <section class="location">
    <button
      class="location_btn"
      type="button"
      v-on:click="locatorButtonPressed"
    >
      Your Location Now
    </button>
  </section>

  <section class="weather">
    <p ref="a" class="weather_name">{{ info.locationCity }}</p>
    <div class="weather_img">
      <img />
    </div>

    <p ref="b" class="weather_description">{{ info.description }}</p>

    <p ref="c" class="weather_temparture">{{ info.temp }}</p>

    <div class="weather_particularity">
      <span ref="d" class="humidity">{{ info.humidity }}%</span>
      <span ref="e" class="wind-pressure">{{ info.pressure }} mBar</span>
      <span ref="f" class="wind-speed">{{ info.wind }} m/s</span>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import { useStore } from "vuex";
import { ref } from "vue";

export default {
  name: "Location",

  setup() {
    const a = ref(null);
    const b = ref(null);
    const c = ref(null);
    const d = ref(null);
    const e = ref(null);
    const f = ref(null);

    const store = useStore();

    let info = {
      locationCity: "Los Angeles",
      description: "Mist",
      temp: 19,
      humidity: 20,
      pressure: 0.552,
      wind: 1,
    };

    function locatorButtonPressed() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            return this.getAddress(
              position.coords.latitude,
              position.coords.longitude
            );
          },
          (error) => {
            console.log(error.message);
          }
        );
      }
    }

    function getAddress(lat, long) {
      axios
        .get(
          "https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
            lat +
            "," +
            long +
            "&key=AIzaSyDX0eGQLzi7XBvZj2O6KkWpfkUbhXErpm4"
        )
        .then(function (response) {
          if (response.data.error_message) {
            console.log(response.data.error_message);
          } else {
            a.value.textContent =
              response.data.results[0].address_components[2].long_name;
            store.dispatch("list/addCity", a.value.textContent);
          }
        })
        .catch((error) => {
          console.log(error.message);
        });
    }

    return {
      info,
      locatorButtonPressed,
      getAddress,
      a,
      b,
      c,
      d,
      e,
      f,
    };
  },
};
</script>

<style scoped lang="scss">
.location {
  &_btn {
    background: #13232e;
    border-color: aliceblue;
    border-radius: 15px;
    height: 39px;
    width: 100%;
    font: 400 16px Roboto;
    color: aliceblue;
    margin-bottom: 10px;
  }

  &_name {
    text-align: center;
  }
}

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
