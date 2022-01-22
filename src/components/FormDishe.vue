<template>
  <q-card class="form-card">
    <q-card-section>
      <div class="text-h6 heading">{{ action }} Plat</div>
    </q-card-section>

    <q-card-section>
      <div class="row q-mb-md">
        <q-input filled v-model="dishe.name" label="Nom (Burger)" class="col" />
      </div>

      <div class="row q-mb-md">
        <q-input
          filled
          v-model="dishe.description"
          label="Description"
          type="textarea"
          class="col"
        />
      </div>

      <div class="row q-mb-md">
        <q-input
          filled
          v-model="dishe.image"
          label="URL de l'image"
          class="col"
        />
        <q-img
          :src="dishe.image ? dishe.image : 'statics/image-placeholder.png'"
          class="q-ml-sm"
          contain
        />
      </div>

      <div class="q-mb-md">
        <div class="row">
          <p class="q-mb-none">Note:</p>
        </div>
        <div class="row">
          <q-rating v-model="dishe.note" size="2em" color="orange" />
        </div>
      </div>
    </q-card-section>

    <q-card-actions align="right">
      <q-btn label="Annuler" color="grey" v-close-popup />
      <q-btn label="Sauver" color="primary" @click="handleSubmit" />
    </q-card-actions>
  </q-card>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  props: ["action", "disheData"],
  data() {
    return {
      dishe: {
        id: this.disheData.id,
        name: this.disheData.name,
        description: this.disheData.description,
        note: this.disheData.note,
        image: this.disheData.image
      }
    };
  },

  // computed: {
  //   ...mapState({ closeFormDishe: "tasks/closeFormDish" })
  // },

  methods: {
    ...mapActions("tasks", ["addDishe", "updateDishe"]),
    // ...mapMutations("tasks", {
    //   closeFormDishe: "CLOSE_FORM_DISHE"
    // }),

    handleSubmit() {
      if(this.action == "ajouter"){
        this.addDishe(this.dishe)
      }else{
        this.updateDishe(this.dishe);
      }
    }
  }
};
</script>

<style>
.form-card {
  min-width: 400px;
}
.form-card .heading {
  text-transform: capitalize;
}
.form-card .q-card-section {
  width: 100%;
}
.thumbnail {
  max-width: 50px;
  max-height: 50px;
}
.form-card .q-img {
  height: 56px;
  width: 56px;
  border-radius: 10px;
}
.form-card .q-img__image {
  background-size: cover !important;
}
.form-card .q-rating__icon {
  opacity: 0.2;
}
.form-card .q-rating__icon--active {
  opacity: 1;
}
</style>
