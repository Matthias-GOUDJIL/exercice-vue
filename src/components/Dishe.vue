<template>
  <q-card class="card">
    <q-img :src="dishe.image" basic contain>
      <div class="absolute-bottom text-h6">{{ dishe.name }}</div>
    </q-img>

    <q-card-section>
      <q-rating
        :value="dishe.note"
        size="2em"
        color="orange"
        readonly
        class="q-mt-sm"
      />
    </q-card-section>

    <q-card-section :class="{ italic: isEmptyDescription }">{{
      dishe.description
    }}</q-card-section>

    <q-card-actions class="absolute-bottom" align="right">
      <q-btn @click="showModifyFormDishe = true" icon="edit" color="blue" flat
        >Modifier</q-btn
      >
      <q-btn @click="showConfirmDelete = true" icon="delete" color="red" flat
        >Supprimer</q-btn
      >
    </q-card-actions>

    <q-dialog v-model="showModifyFormDishe">
      <form-dishe :disheData="dishe" action="modifier" />
    </q-dialog>

    <q-dialog v-model="showConfirmDelete">
      <confirm-delete action="supprimer" :id="dishe.id" />
    </q-dialog>
  </q-card>
</template>

<script>
export default {
  props: ["dishe"],
  data() {
    return {
      showModifyFormDishe: false,
      showConfirmDelete: false,
      isEmptyDescription: false
    };
  },

  mounted() {
    this.dishe.description === "Aucune description fournie" ? this.isEmptyDescription = true : "";
  },
  updated() {
    this.dishe.description === "Aucune description fournie" ? this.isEmptyDescription = true : "";
  },

  components: {
    "form-dishe": require("components/FormDishe.vue").default,
    "confirm-delete": require("components/ConfirmDelete.vue").default
  }
};
</script>

<style>
.italic {
  font-style: italic;
}
.card {
  min-height: 400px;
  max-width: 250px;
  width: 250px;
  transition: background 0.3s;
}
.card-clickable {
  cursor: pointer;
}
.card-clickable:hover {
  background: #bdbdbd !important;
}
.card .q-img {
  max-height: 180px;
}
.card .q-img__image {
  background-size: cover !important;
}
.card .q-rating__icon {
  opacity: 0.2;
}
.card .q-rating__icon--active {
  opacity: 1;
}
</style>
