import { LocalStorage } from "quasar";
import { Notify } from 'quasar'

const state = {
  dishes: LocalStorage.getItem("store") || [
    {
      id: 1,
      image: "https://i.imgur.com/0umadnY.jpg",
      name: "Burger",
      description:
        "Un hamburger est un sandwich composé d'une ou plusieurs tranches de viande hachée, généralement du bœuf, placées dans un petit pain ou une brioche.",
      note: 4
    },
    {
      id: 2,
      image: "https://i.imgur.com/b9zDbyb.jpg",
      name: "Pizza",
      description:
        "La pizza est un plat savoureux d'origine italienne, consistant en une base généralement ronde et aplatie de pâte levée à base de blé.",
      note: 5
    },
    {
      id: 3,
      image: "https://i.imgur.com/RbKjUjB.jpg",
      name: "Petits choux",
      description:
        "Le chou de Bruxelles est une variété de chou, plante herbacée de la famille des Brassicaceae. C’est vraiement pas bon...",
      note: 1
    },
    {
      id: 4,
      image: "https://i.imgur.com/xAuhNVg.jpg",
      name: "BBQ Ribs",
      description:
        "Les BBQ ribs ou barbecue ribs sont des grands classiques très appréciés partout dans le monde.",
      note: 5
    }
  ],
  // showFormDishe: false,
};

const getters = {

  getShowFormDishe: state => {
    return state.showFormDishe;
  },

  getDishes: state => {
    if (!LocalStorage.getItem("store")) {
      LocalStorage.set("store", state.dishes);
    }
    return state.dishes;
  }
};

const actions = {
  addDishe: ({ commit }, payload) => {
    if (payload.name) {
      commit("ADD_DISHE", payload)
      // commit("CLOSE_FORM_DISHE", payload)
    } else {
      Notify.create({
        message: 'Le champ "nom" est requis',
        color: "warning",
        position: "top",
        closeBtn: true,
      })
    }
  },

  updateDishe: ({ commit }, payload) => {
    if (payload.name) {
      commit("UPDATE_DISHE", payload)
      // commit("CLOSE_FORM_DISHE", payload)
    } else {
      Notify.create({
        message: 'Le champ "nom" est requis',
        color: "warning",
        position: "top",
        closeBtn: true,
      })
    }
  }
};

const mutations = {
  // OPEN_FORM_DISHE: (state) => {
  //   state.showFormDishe = true
  // },
  // CLOSE_FORM_DISHE: (state) => {
  //   state.showFormDishe = false
  // },

  DELETE_DISHE: (state, payload) => {
    let i = 0
    const retrieveIndexOfDishe = () => {
      state.dishes.map((dishe) => {
        if (payload === dishe.name) {
          i = state.dishes.indexOf(dishe)
        }
      })
    }
    retrieveIndexOfDishe()
    state.dishes.splice(i, 1);
    LocalStorage.set("store", state.dishes)
  },

  ADD_DISHE: (state, payload) => {
    const lastDish = state.dishes[state.dishes.length - 1] || 1
    const newDishId = lastDish.id + 1 || 1
    payload.id = newDishId
    state.dishes.push(payload)
    LocalStorage.set("store", state.dishes)
  },

  UPDATE_DISHE: (state, payload) => {
    const index = state.dishes.findIndex(dishe => dishe.id === payload.id);
    // console.log(payload.id)
    // console.log(index)
    for (const dishe of state.dishes) {
      if (dishe.id === payload.id) {
        dishe.name = payload.name;
        dishe.description = payload.description;
        dishe.note = payload.note;
        dishe.image = payload.image;
        break;
      }
    }
    LocalStorage.set("store", state.dishes)
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}