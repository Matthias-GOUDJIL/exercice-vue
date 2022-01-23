import * as types from './mutations-types'

export const mutations = {
    [types.DELETE_DISHE]: (state, payload) => {
      let i = 0
      const retrieveIndexOfDishe = () => {
        state.dishes.map((dishe) => {
          if (payload === dishe.id) {
            i = state.dishes.indexOf(dishe)
          }
        })
      }
      retrieveIndexOfDishe()
      state.dishes.splice(i, 1);
    },
  
    [types.ADD_DISHE]: (state, payload) => {
      const lastDish = state.dishes[state.dishes.length - 1] || 1
      const newDishId = lastDish.id + 1 || 1
      payload.id = newDishId
      payload.description === "" ? payload.description = "Aucune description fournie" : "";
      payload.image === "" ? payload.image = "/statics/image-placeholder.png" : "";
      state.dishes.push(payload)
    },
  
    [types.UPDATE_DISHE]: (state, payload) => {
      for (const dishe of state.dishes) {
        if (dishe.id === payload.id) {
          dishe.name = payload.name;
          payload.description === "" ? dishe.description = "Aucune description fournie" : dishe.description = payload.description;
          dishe.note = payload.note;
          dishe.image = payload.image;
          break;
        }
      }
    },
  };