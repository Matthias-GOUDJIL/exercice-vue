import { LocalStorage } from "quasar";

import { getters } from "./getters";
import { mutations } from "./mutations";
import { actions } from "./actions";

export const state = {
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
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  }