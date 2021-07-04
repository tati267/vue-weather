const state = {
  cityCurrent: {
    name: "Los Angeles",
    temp: 290,
    humidity: 20,
    pressure: 0.552,
    wind: 1,
    icon: "10d",
    condition: "Cloudy",
  },
};

const mutations = {
  getCity(state, weather) {
    state.cityCurrent = {
      name: weather.name,
      country: weather.sys.country,
      temp: weather.main.temp,
      clouds: weather.clouds.all,
      humidity: weather.main.humidity,
      pressure: weather.main.pressure,
      wind: weather.wind.speed,
      icon: weather.weather[0].icon,
      condition: weather.weather[0].main,
    };
  },

};

const actions = {
  async getCity({ commit }, city) {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cdcda073929ad4634bac408dbaeebb54`
    );
    const weather = await response.json();
    console.log(weather);
    commit("getCity", weather);
  },
};

const getters = {
  getCurrentCity(state) {
    return state.cityCurrent;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
