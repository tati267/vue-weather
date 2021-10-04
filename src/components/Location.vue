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
</template>

<script>
import axios from "axios";
import { useStore } from "vuex";

export default {
  name: "Location",

  setup() {
    const store = useStore();

    const locatorButtonPressed = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            return getAddress(
              position.coords.latitude,
              position.coords.longitude
            );
          },
          (error) => {
            console.log(error.message);
          }
        );
      }
    };

    const getAddress = (lat, long) => {
      axios
        .get(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=AIzaSyBv3Mue0MjRxWehq81r_XyQS8Lnr-iQ-VQ`
        )
        .then((response) => {
          if (response.data.error_message) {
            console.log(response.data.error_message);
          } else {
            const cityName = `${response.data.results[0].address_components[2].long_name},
              ${response.data.results[0].address_components[5].short_name}`;
            store.dispatch("current/getCity", cityName);
          }
        })
        .catch((error) => {
          console.log(error.message);
        });
    };

    return {
      locatorButtonPressed,
      getAddress,
    };
  },
};
</script>

<style scoped lang="scss">
.location {
  margin-bottom: 20px;
  z-index: 5px;

  &_btn {
    background: #13232e;
    border-color: aliceblue;
    border-radius: 15px;
    height: 39px;
    width: 100%;
    font: 400 16px Roboto;
    color: aliceblue;
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
