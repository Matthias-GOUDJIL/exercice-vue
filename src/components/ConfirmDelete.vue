<template>

    <q-card class="form-card">
      <q-card-section>
        <div class="text-h6 heading">{{ action }} Plat</div>
      </q-card-section>

      <q-card-section>
        <div class="row q-mb-md">
          <p>Êtes-vous sûr de vouloir supprimer cet élément ?</p>
        </div>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn label="Annuler" color="grey" v-close-popup />
        <q-btn
          label="Confirmer"
          color="primary"
          @click="deleteDishe(id)"
          v-close-popup
        />
      </q-card-actions>
    </q-card>

</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["action", "id"],

  methods: {
    ...mapActions("tasks", ["deleteDishe"]),
  }
};
</script>

<style></style>
