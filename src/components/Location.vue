<template>
  <section class="location">
    <button
      class="location_btn"
      type="button"
      v-on:click="locatorButtonPressed"
    >
      Your Location Now
    </button>
    <p ref="p" class="location_name">{{ locationAddress }}</p>
    <p ref="l" class="location_name">{{ locationCity }}</p>
  </section>
</template>

<script>
import axios from "axios";
import { ref } from "vue";

export default {
  name: "Location",

  setup() {
    const p = ref(null);
    const l = ref(null);

    let locationAddress = "San Fransisco, California, USA";
    let locationCity = "San Fransisco";

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
            const result = response.data.results[0];
            console.log(result);
            p.value.textContent = response.data.results[0].formatted_address;
            l.value.textContent = response.data.results[0].address_components[2].long_name;
          }
        })
        .catch((error) => {
          console.log(error.message);
        });
    }

    return {
      locationAddress,
      locationCity,
      locatorButtonPressed,
      getAddress,
      p,
      l,
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
</style>
