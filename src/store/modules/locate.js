const state = {
  currentAddress: "San Fransisco, California, USA",
  currentCity: "San Fransisco",
};

const getters = {
  getLocalAddress(state) {
    return state;
  },
};

const actions = {
  async getAddress(lat, long) {
    await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=AIzaSyDX0eGQLzi7XBvZj2O6KkWpfkUbhXErpm4`
    )
      .then(response => {
        if (response.data.error_message) {
          console.log(response.data.error_message);
        } else {
          const result = response.data.results[0];
          console.log(result);
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  },
};

const mutations = {
  getAddress(state, result) {
    state.currentAddress = result.formatted_address;
    state.currentCity = result.address_components[2].long_name;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
