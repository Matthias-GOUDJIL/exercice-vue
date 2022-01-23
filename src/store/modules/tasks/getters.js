import { LocalStorage } from "quasar";

export const getters = {
    getDishes: state => {
      if (!LocalStorage.getItem("store")) {
        LocalStorage.set("store", state.dishes);
      }
      return state.dishes;
    }
  };