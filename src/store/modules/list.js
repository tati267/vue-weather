const state = {
  weatherArr: [],
};

const getters = {
  getWeatherArr(state) {
    return state.weatherArr;
  },
};

const actions = {
  async addCity({ commit }, cityName) {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=cdcda073929ad4634bac408dbaeebb54`
    );
    const weather = await response.json();
    console.log(weather);
    commit("addCity", weather);
  },

  deleteCity({ commit }, id) {
    commit("deleteCity", id);
  },
};

const mutations = {
  addCity(state, weather) {
    state.weatherArr.push({
      id: Date.now(),
      name: weather.city.name,
      country: weather.city.country,
      hourArr: weather.list,
    });
  },

  deleteCity(state, id) {
    state.weatherArr = state.weatherArr.filter((el) => {
      return el.id !== id;
    });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
