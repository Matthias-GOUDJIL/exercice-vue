import { LocalStorage } from "quasar";

const state = {
  dishes: LocalStorage.getItem("store") || [
    {
      id: 1,
      image: "https://i.imgur.com/0umadnY.jpg",
      nom: "Burger",
      description:
        "Un hamburger est un sandwich composé d'une ou plusieurs tranches de viande hachée, généralement du bœuf, placées dans un petit pain ou une brioche.",
      note: 4
    },
    {
      id: 2,
      image: "https://i.imgur.com/b9zDbyb.jpg",
      nom: "Pizza",
      description:
        "La pizza est un plat savoureux d'origine italienne, consistant en une base généralement ronde et aplatie de pâte levée à base de blé.",
      note: 5
    },
    {
      id: 3,
      image: "https://i.imgur.com/RbKjUjB.jpg",
      nom: "Petits choux",
      description:
        "Le chou de Bruxelles est une variété de chou, plante herbacée de la famille des Brassicaceae. C’est vraiement pas bon...",
      note: 1
    },
    {
      id: 4,
      image: "https://i.imgur.com/xAuhNVg.jpg",
      nom: "BBQ Ribs",
      description:
        "Les BBQ ribs ou barbecue ribs sont des grands classiques très appréciés partout dans le monde.",
      note: 5
    }
  ],
};

const getters = {
  getDishes: state => {
    if (!LocalStorage.getItem("store")) {
      LocalStorage.set("store", state.dishes);
    }
    return state.dishes;
  }
};

const actions = {
  //     async fetchUsers({commit}){
  //       const response = await axios.get("http://localhost:3000/users");
  //       commit("setUsers", response.data)
  //     },

  //     async addUsers({commit}, user){
  //       const response = await axios.post("http://localhost:3000/users", user);
  //       commit("addNewUser", response.data)
  //     },
};

const mutations = {
  DELETE_DISHE: (state, payload) => {
    const i = state.dishes.map(dishe => dishe.id).indexOf(payload);
    state.dishes.splice(i, 1);
    LocalStorage.set("store", state.dishes)
  },

};

export default {
  namespaced: true,
  state,
  getters,
  // actions,
  mutations
}