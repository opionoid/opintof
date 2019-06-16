<template lang="pug">
  v-container
    v-layout(row wrap)
      v-flex(xs3 v-for="job in job_list")
        router-link(to="/coc_character")
          .tmp(@click="apply_job_abilities(job.abilities)") {{ job.abilities }}
</template>

<script>
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      job_list: [
        {
          name: "探偵",
          icon: "",
          abilities: [1, 20, 30, 32, 33, 42, 45, 49]
        }
      ]
    };
  },
  methods: {
    ...mapMutations("CoC", ["apply_job_abilities"])
  }
};
</script>
