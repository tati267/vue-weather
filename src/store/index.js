import { createStore } from "vuex";
import list from "./modules/list.js";
//import locate from "./modules/locate.js";

export default createStore({
  modules: {
    list,
    // locate,
  },
});
