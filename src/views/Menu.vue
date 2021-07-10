<template>
  <main class="saved">
    <Location class="location" />
    <Hero class="hero"/>
    <Parametrs />
  </main>
</template>

<script>
import Location from "@/components/Location.vue";
import Hero from "@/components/Hero.vue";
import Parametrs from "@/components/Parametrs.vue";

export default {
  name: "Menu",
  components: {
    Location,
    Hero,
    Parametrs,
  },
};
</script>

<style scoped>
.saved {
  padding-top: 36px;;
}

.location {
  position: relative;
  z-index: 2;
}

.hero {
  position: relative;
  z-index: 1;
}
</style>
