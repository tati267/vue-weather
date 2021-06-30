<template>
  <section class="parametrs">
    <div class="temp">
      <p class="temp_parametr">Temparture</p>
      <span class="temp_res">Celsius</span>
    </div>
    <div class="wind-speed">
      <p class="wind-speed_parametr">Wind Speed</p>
      <span class="wind-speed_res">m/s</span>
    </div>
    <div class="source">
      <p class="source_parametr">Source</p>
      <span class="source_res">https://openweathermap.org</span>
    </div>
  </section>
</template>

<script>
export default {
  name: "Parametrs",
};
</script>

<style scoped lang="scss">
.temp,
.wind-speed,
.source {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  margin-bottom: 28px;
}
.temp_parametr,
.wind-speed_parametr,
.source_parametr {
  font-size: 18px;
}
.temp_res,
.wind-speed_res,
.source_res {
  font-size: 14px;
  color: #a0a0a0;
}
</style>
