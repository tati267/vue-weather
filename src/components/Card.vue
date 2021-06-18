<template>
  <section class="city-list">
    <div class="card">
      <p class="card_temparture">18</p>
      <p class="card_name">Austin</p>
      <p class="card_country">USA</p>
      <div class="card_particularity">
        <span class="humidity">13%</span>
        <span class="wind-speed">9 km/h</span>
      </div>
    </div>
  </section>
</template>

<script lang="ts">

export default {
  name: "Card",
};
</script>

<style scoped>
.city-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.card {
  box-sizing: border-box;
  padding: 10px;
  width: 159px;
  height: 159px;
  background: #354149;
  border-radius: 15px;
  color: #f0f2f3;
  margin-top: 25px;
}

.card_temparture {
  width: fit-content;
  font-size: 50px;
  line-height: 50px;
  margin-bottom: 10px;
  position: relative;
}

.card_temparture::before {
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

.card_name {
  font-size: 14px;
  line-height: 24px;
}

.card_country {
  font-size: 12px;
  color: #f0f2f3;
  opacity: 50%;
  margin-bottom: 8px;
}

.card_particularity {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
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
