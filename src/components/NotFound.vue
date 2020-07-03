<template>
  <v-card class="mx-auto" max-width="700">
    <v-img :src="srcPic" height="200px"></v-img>

    <v-card-title>404 : NOT FOUND</v-card-title>

    <v-card-subtitle>URL NOT THIS SITE</v-card-subtitle>

    <v-card-actions>
      <v-btn color="purple" outlined rounded to="/">Go TO HOME</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  computed: {
    srcPic() {
      return this.$store.getters.getSrcPic;
    }
  }
};
</script>
