<template>
  <main class="saved">
    <Hero />
    <Sun />
    <ForecastDay />
  </main>
</template>

<script>
import Hero from "@/components/Hero.vue";
import Sun from "@/components/Sun.vue";
import ForecastDay from "@/components/ForecastDay.vue";

export default {
  name: "Home",
  components: {
    Hero,
    Sun,
    ForecastDay,
  },
};
</script>

<style scoped>
.saved {
  padding-top: 36px;
}
</style>