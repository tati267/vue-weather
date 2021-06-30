const state = {
  currentAddress: "San Fransisco, California, USA",
};

const getters = {
  getLocalAddress(state) {
    return (state = state.currentAddress);
  },
};

const actions = {};

const mutations = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
