<template>
  <section class="search">
    <input
      class="search-bar"
      type="text"
      placeholder="Search"
      @keydown.enter="onInputEnter"
    />
  </section>
</template>

<script>
import { useStore } from "vuex";

export default {
  name: "Search",

  setup() {
    const store = useStore();
    function onInputEnter(cityName) {
      const city=cityName.target.value.split(' ')[0]
      console.log(city)
      if (cityName.target.value) {
        store.dispatch("list/addCity", cityName.target.value.split(' ')[0], cityName.target.value.split(' ')[1]);
        cityName.target.value = "";
      }
    }
    return {
      onInputEnter,
    };
  },
};
</script>

<style scoped lang="scss">
.search-bar {
  background: #13232e;
  border-radius: 15px;
  height: 39px;
  width: 100%;
  font: 400 16px Roboto;
  padding: 1px 2px 1px 48px;
  border: none;
  box-sizing: border-box;
  letter-spacing: 1.25px;
  color: #f0f2f3;
}

.search-bar::placeholder {
  color: #dbdcdd;
  font-size: 16px;
  letter-spacing: 1.25px;
}
</style>
