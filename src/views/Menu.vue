<template>
  <main class="saved">
    <Location />
    <MenuWeather />
    <Parametrs />
  </main>
</template>

<script>
import Location from "@/components/Location.vue";
import MenuWeather from "@/components/MenuWeather.vue";
import Parametrs from "@/components/Parametrs.vue";

export default {
  name: "Menu",
  components: {
    Location,
    MenuWeather,
    Parametrs,
  },
};
</script>

<style scoped>
.saved {
  padding-top: 36px;
}
</style>
