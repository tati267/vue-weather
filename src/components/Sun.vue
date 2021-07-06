<template>
  <section class="sun">
    <span class="sun_rise">{{ getCurrentCity.sunrise }}</span>
    <span class="sun_set">{{ getCurrentCity.sunset }}</span>
  </section>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "Sun",

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
.sun {
  height: 100px;
  position: relative;
  background-image: url(../assets/svg/line.svg);
  background-repeat: no-repeat;
  background-position: 2px 30px;
  border-bottom: 1px solid white;

  &_rise {
    position: absolute;
    left: 28px;
    top: 7px;

    &::before {
      content: "";
      position: absolute;
      width: 25px;
      height: 25px;
      left: -30px;
      top: -3px;
      background-image: url(../assets/sunrise.png);
      background-repeat: no-repeat;
      background-position: 0 0px;
    }
  }

  &_set {
    position: absolute;
    left: 290px;
    top: 55px;

    &::before {
      content: "";
      position: absolute;
      width: 25px;
      height: 25px;
      left: -30px;
      top: -3px;
      background-image: url(../assets/sunset.png);
      background-repeat: no-repeat;
      background-position: 0 0px;
    }
  }
}
</style>
