import { LocalStorage } from "quasar";
import { state } from "./index"

export const actions = {
    deleteDishe: ({ commit }, payload) => {
      commit("DELETE_DISHE", payload)
      LocalStorage.set("store", state.dishes)
    },
  
    addDishe: ({ commit }, payload) => {
      commit("ADD_DISHE", payload)
      LocalStorage.set("store", state.dishes)
    },
  
    updateDishe: ({ commit }, payload) => {
      commit("UPDATE_DISHE", payload)
      LocalStorage.set("store", state.dishes)
    }
  };