<template>
  <main class="saved container">
    <section class="search">
      <input
        class="search-bar"
        type="text"
        placeholder="Search"
        v-model="query"
        v-on:keypress="fetchWeather"
      />
      {{ query }}
    </section>

    <section class="weather">
      <div class="city">
        <p class="city_temparture">18</p>
        <p class="city_name">Austin</p>
        <p class="city_country">USA</p>
        <div class="weather-particularity">
          <span class="humidity">13%</span>
          <span class="wind-speed">9 km/h</span>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      api_key: "c8fc2551320ed0aaa229dcd480d41802",
      url_base: "http://api.openweathermap.org/data/2.5/",
      query: "",
      weather: {},
    };
  },
  methods: {
    fetchWeather(e) {
      if (e.key == "Enter") {
        fetch(
          `${this.url_base}weather?q=${this.query}&units=metric&appid=${this.api_key}`
        )
          .then((res) => {
            return res.json();
          })
          .then(this.setResults);
      }
    },
    setResults(result) {
      this.weather = result;
    },
  },
};
</script>

<style scoped>
.saved {
  padding-top: 36px;
}

.search-bar {
  background: #13232e;
  border-radius: 15px;
  height: 39px;
  width: 100%;
  font: 400 14px Roboto;
  padding: 1px 2px 1px 48px;
  border: none;
  box-sizing: border-box;
  letter-spacing: 1.25px;
  color: #f0f2f3;
}

.search-bar::placeholder {
  color: #f0f2f3;
  letter-spacing: 1.25px;
}

.weather {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.city {
  box-sizing: border-box;
  padding: 10px;
  width: 159px;
  height: 159px;
  background: #354149;
  border-radius: 15px;
  color: #f0f2f3;
  margin-top: 25px;
}

.city_temparture {
  width: 60px;
  font-size: 50px;
  margin-bottom: 10px;
  position: relative;
}

.city_temparture::before {
  content: "";
  position: absolute;
  width: 12px;
  height: 13px;
  right: -5px;
  top: 0;
  background-image: url(../assets/svg/circle.svg);
  background-repeat: no-repeat;
  background-position: 0 0px;
}

.city_name {
  font-size: 14px;
  line-height: 24px;
}

.city_country {
  font-size: 12px;
  color: #f0f2f3;
  opacity: 50%;
  margin-bottom: 16px;
}

.weather-particularity {
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
