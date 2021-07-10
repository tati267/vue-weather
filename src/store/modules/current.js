const state = {
  cityCurrent: {
    name: "Los Angeles",
    temp: 290,
    humidity: 20,
    pressure: 0.552,
    sunrise: "08:00",
    sunset: "18:00",
    wind: 1,
    icon: "10d",
    condition: "Cloudy",
    hourlyWeather: {
      0: {
        temp: 290,
        icon: "01d",
        time: "18:00",
      },
      1: {
        temp: 300,
        icon: "04d",
        time: "18:00",
      },
      2: {
        temp: 310,
        icon: "50d",
        time: "18:00",
      },
      3: {
        temp: 300,
        icon: "04d",
        time: "18:00",
      },
      4: {
        temp: 290,
        icon: "03d",
        time: "18:00",
      },
      5: {
        temp: 290,
        icon: "01d",
        time: "18:00",
      },
    },
  },
};

const mutations = {
  getCity(state, weather) {
    state.cityCurrent = {
      name: weather.city.name,
      country: weather.city.country,
      temp: weather.list[0].main.temp,
      sunrise: locateTime(weather.city.sunrise),
      sunset: locateTime(weather.city.sunset),
      clouds: weather.list[0].clouds.all,
      humidity: weather.list[0].main.humidity,
      pressure: weather.list[0].main.pressure,
      wind: weather.list[0].wind.speed,
      icon: weather.list[0].weather[0].icon,
      condition: weather.list[0].weather[0].main,
      hourlyWeather: {
        5: {
          temp: weather.list[0].main.temp,
          time: convertTime(weather.list[0].dt),
          icon: weather.list[0].weather[0].icon,
        },
        4: {
          temp: weather.list[1].main.temp,
          icon: weather.list[1].weather[0].icon,
          time: convertTime(weather.list[1].dt),
        },
        3: {
          temp: weather.list[2].main.temp,
          icon: weather.list[2].weather[0].icon,
          time: convertTime(weather.list[2].dt),
        },
        2: {
          temp: weather.list[3].main.temp,
          icon: weather.list[3].weather[0].icon,
          time: convertTime(weather.list[3].dt),
        },
        1: {
          temp: weather.list[4].main.temp,
          icon: weather.list[4].weather[0].icon,
          time: convertTime(weather.list[4].dt),
        },
        0: {
          temp: weather.list[5].main.temp,
          icon: weather.list[5].weather[0].icon,
          time: convertTime(weather.list[5].dt),
        },
      },
    };
  },
};

const locateTime = (timestamp) => {
  const date = new Date(timestamp * 1000);
  const hours = date.getHours();
  const minutes = "0" + date.getMinutes();
  const formattedTime = hours + ":" + minutes.substr(-2);
  return formattedTime;
};

const convertTime = (utc) => {
  const date = new Date(utc * 1000);
  const timestr = date.toLocaleTimeString();
  return timestr;
};

const actions = {
  async getCity({ commit }, city) {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=cdcda073929ad4634bac408dbaeebb54`
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

  getCurrentCityHourly(state) {
    return state.cityCurrent.hourlyWeather;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
