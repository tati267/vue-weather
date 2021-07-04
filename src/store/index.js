import { createStore } from "vuex";
import list from "./modules/list.js";
import current from "./modules/current.js";

export default createStore({
  modules: {
    list,
    current
  },
});
