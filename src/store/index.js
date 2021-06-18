import { createStore } from "vuex";
import list from "./modules/list.js";

export default createStore({
  modules: {
    list
  }
});
