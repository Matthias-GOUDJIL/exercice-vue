<template>
  <q-card class="form-card">
    <q-card-section>
      <div class="text-h6 heading">{{ action }} Plat</div>
    </q-card-section>

    <q-card-section>
      <div class="row q-mb-md">
        <q-input
          filled
          v-model="dishe.name"
          :placeholder="errors.name.required"
          label="Nom (Burger)"
          class="col"
        />
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
      <q-btn
        label="Sauver"
        color="primary"
        @click="checkForm"
        v-close-popup="close"
      />
    </q-card-actions>
  </q-card>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["action", "disheData"],
  data() {
    return {
      close: true,
      notifyConfig: {
        type: "warning",
        position: "top",
        color: "orange",
        textColor: "white",
        icon: "announcement",
      },
      errors: {
        name: "",
        description: ""
      },
      dishe: {
        id: this.disheData.id,
        name: this.disheData.name,
        description: this.disheData.description,
        note: this.disheData.note,
        image: this.disheData.image
      }
    };
  },

  methods: {
    ...mapActions("tasks", ["addDishe", "updateDishe"]),

    checkForm() {
      this.close = true;
      if (
        this.dishe.name.length === 0 ||
        this.dishe.name.length > 20 ||
        this.dishe.description.length > 135
      ) {
        if (this.dishe.name.length === 0) {
          this.errors.name = "le nom est obligatoire";
          this.close = false;
          this.$q.notify({
            message: this.errors.name,
            ...this.notifyConfig
          });
        }
        if (this.dishe.name.length > 20) {
          this.errors.name = "le nom ne doit pas dépasser 20 caractères";
          this.close = false;
          this.$q.notify({
            message: this.errors.name,
            ...this.notifyConfig
          });
        }
        if (this.dishe.description.length > 135) {
          this.errors.description =
            "la description ne doit pas dépasser 135 caractères";
          this.close = false;
          this.$q.notify({
            message: this.errors.description,
            ...this.notifyConfig
          });
        }
      } else {
        this.handleSubmit();
      }
    },

    handleSubmit() {
      this.action === "ajouter"
        ? this.addDishe(this.dishe)
        : this.updateDishe(this.dishe);
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
