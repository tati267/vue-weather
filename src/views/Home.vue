<template>
  <main class="saved">
    <Location />
    <MenuWeather />
    <Sun />
  </main>
</template>

<script>
import Location from "@/components/Location.vue";
import MenuWeather from "@/components/MenuWeather.vue";
import Sun from "@/components/Sun.vue";


export default {
  name: "Home",
  components: {
    Location,
    MenuWeather,
  Sun
  },
};
</script>