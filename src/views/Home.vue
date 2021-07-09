<template>
  <main class="saved">
    <Location />
    <MenuWeather />
    <Sun />
    <ForecastDay />
  </main>
</template>

<script>
import Location from "@/components/Location.vue";
import MenuWeather from "@/components/MenuWeather.vue";
import Sun from "@/components/Sun.vue";
import ForecastDay from "@/components/ForecastDay.vue";

export default {
  name: "Home",
  components: {
    Location,
    MenuWeather,
    Sun,
    ForecastDay,
  },
};
</script>
