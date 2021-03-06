<template>
  <div
    @click="onCardClick(`${item.name},${item.country}`)"
    class="card"
    @mouseover="hover = true"
    @mouseleave="hover = false"
  >
    <button
      v-if="hover"
      class="card__delete"
      type="button"
      @click.stop="onDeleteClick"
    >
      &#215;
    </button>

    <div class="img-container">
      <img v-bind:src="weatherIconURL(item.icon)" v-bind:alt="item.icon" />
    </div>

    <p class="card_temparture">
      {{ item.temp.toFixed() - 273 }}
    </p>
    <p class="card_name">{{ item.name }}</p>
    <p class="card_country">{{ item.country }}</p>
    <div class="card_particularity">
      <span class="humidity">{{ item.humidity }}%</span>
      <span class="wind-speed">{{ item.wind.toFixed() }} m/s</span>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  name: "Card",

  props: {
    item: {
      type: Object,
      required: true,
    },
  },

  setup(props) {
    const store = useStore();
    const router = useRouter();
    const hover = window.innerWidth >= 414 ? ref(false) : ref(true);

    const computedCityArr = computed(() => {
      return store.getters["list/getCityArr"];
    });

    const onCardClick = (city) => {
      store.dispatch("current/getCity", city);
      router.push({ name: "Home" });
    };

    const onDeleteClick = () => {
      store.dispatch("list/deleteCity", props.item.id);
    };

    const onMainItemClick = () => {
      router.push({
        name: "City",
        params: { id: props.item.name.toLowerCase() },
      });
    };

    const weatherIconURL = () => {
      if (props.item.icon == "50d" || props.item.icon == "50n") {
        return require("../assets/simple/Mist.png");
      } else if (props.item.icon == "13d" || props.item.icon == "13n") {
        return require("../assets/simple/Snow.png");
      } else if (props.item.icon == "11d" || props.item.icon == "11n") {
        return require("../assets/simple/Thunderstorm.png");
      } else if (props.item.icon == "10d") {
        return require("../assets/simple/RainD.png");
      } else if (props.item.icon == "10n") {
        return require("../assets/simple/RainN.png");
      } else if (props.item.icon == "09d" || props.item.icon == "09n") {
        return require("../assets/simple/Shower rain.png");
      } else if (props.item.icon == "04d" || props.item.icon == "04n") {
        return require("../assets/simple/Broken clouds.png");
      } else if (props.item.icon == "03d" || props.item.icon == "03n") {
        return require("../assets/simple/Scattered clouds.png");
      } else if (props.item.icon == "02d") {
        return require("../assets/simple/Few cloudsD.png");
      } else if (props.item.icon == "02n") {
        return require("../assets/simple/Few cloudsN.png");
      } else if (props.item.icon == "01d") {
        return require("../assets/simple/Clear skyD.png");
      } else if (props.item.icon == "01n") {
        return require("../assets/simple/Clear skyN.png");
      }
    };

    return {
      hover,
      computedCityArr,
      onCardClick,
      onDeleteClick,
      onMainItemClick,
      weatherIconURL,
    };
  },
};
</script>

<style scoped lang="scss">
.card {
  box-sizing: border-box;
  padding: 10px;
  width: 159px;
  height: 159px;
  background: #354149;
  border-radius: 15px;
  color: #f0f2f3;
  margin-top: 25px;
  position: relative;

  &:hover {
    background: #566b79;
  }

  &__delete {
    z-index: 3;
    outline: none;
    position: absolute;
    right: 15px;
    top: 15px;
    width: 20px;
    height: 20px;
    border-radius: 10px;
    cursor: pointer;
    border: 2px solid #424949;
    background-color: #f2f3f4;
    font-weight: bold;

    &:hover,
    &:focus {
      background-color: #d0d3d4;
    }
  }

  &_temparture {
    z-index: 2;
    width: fit-content;
    font-size: 50px;
    line-height: 50px;
    margin-bottom: 10px;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      width: 12px;
      height: 13px;
      right: -12px;
      top: 0;
      background-image: url(../assets/svg/circle.svg);
      background-repeat: no-repeat;
      background-position: 0 0px;
    }
  }

  &_name {
    z-index: 2;
    font-size: 14px;
    line-height: 24px;
  }

  &_country {
    z-index: 2;
    font-size: 12px;
    color: #a0a0a0;
    opacity: 50%;
    margin-bottom: 8px;
  }

  &_particularity {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
  }
}

.img-container {
  width: fit-content;
  height: fit-content;
  position: absolute;
  right: -7px;
  top: -5px;
  z-index: 1;
}

.humidity,
.wind-speed {
  position: relative;
  padding-left: 25px;
}

.humidity::before {
  content: "";
  position: absolute;
  width: 14px;
  height: 20px;
  left: 0;
  top: 0;
  background-image: url(../assets/svg/humidity.svg);
  background-repeat: no-repeat;
  background-position: 0 0px;
}

.wind-speed::before {
  content: "";
  position: absolute;
  width: 16px;
  height: 19px;
  left: 0;
  top: 0;
  background-image: url(../assets/svg/wind.svg);
  background-repeat: no-repeat;
  background-position: 0 0px;
}
</style>
