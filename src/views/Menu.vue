<template>
  <main class="saved">
    <Location />
    
    <Parametrs />
  </main>
</template>

<script>
import Location from "@/components/Location.vue";

import Parametrs from "@/components/Parametrs.vue";

export default {
  name: "Menu",
  components: {
    Location,
    
    Parametrs,
  },
};
</script>

<style scoped>
.saved {
  padding-top: 36px;
}
</style>
