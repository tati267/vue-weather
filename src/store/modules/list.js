const state = {
  cityArr: [],
};

const mutations = {
  addCity(state, weather) {
    state.cityArr.push({
      id: Date.now(),
      name: weather.name,
      country: weather.sys.country,
      temp: weather.main.temp,
      clouds: weather.clouds.all,
      humidity: weather.main.humidity,
      wind: weather.wind.speed,
      icon: weather.weather[0].icon,
      condition: weather.weather[0].main,
    });
  },

  deleteCity(state, id) {
    state.cityArr = state.cityArr.filter((el) => {
      return el.id !== id;
    });
  },
};

const actions = {
  async addCity({ commit }, city, country) {
    await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=cdcda073929ad4634bac408dbaeebb54`
    )
      .then((response) => {
        const weather = response.json();
        console.log(weather);
        commit("addCity", weather);
      })
      .catch((error) => {
        console.log(error.message);
      });
  },

  deleteCity({ commit }, id) {
    commit("deleteCity", id);
  },
};

const getters = {
  getCityArr(state) {
    return state.cityArr;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
