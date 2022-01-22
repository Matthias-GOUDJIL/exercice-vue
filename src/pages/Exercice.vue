<template>
  <q-page class="q-pa-lg">
    <div class="row q-gutter-lg">
      <dishe v-for="dishe in dishes" :key="dishe.id" :dishe="dishe" />

      <add-button @click="showFormDishe = true" />
      
      <q-dialog v-model="showFormDishe">
        <form-dishe :disheData="this.dishe" action="ajouter" />
      </q-dialog>
    </div>
  </q-page>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";

export default {
  data() {
    return {
      showFormDishe: false,
      dishe: {
        id: "",
        name: "",
        description: "",
        note: 1,
        image: ""
      }
    };
  },

  // methods: {
  //      ...mapMutations("tasks", {
  //     openFormDishe: "OPEN_FORM_DISHE"
  //   }),
  // },

  computed: {
    ...mapGetters("tasks", { dishes: "getDishes" })
  },

  components: {
    dishe: require("components/Dishe.vue").default,
    "add-button": require("components/AddButton.vue").default,
    "form-dishe": require("components/FormDishe.vue").default
  }
};
</script>
