<template>
  <div>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="4">
          <v-card class="elevation-3">
            <v-toolbar outlined src="https://picsum.photos/1920/1080?random">
              <v-toolbar-title class="white--text">
                <v-icon large color="white" class="mx-3">portrait</v-icon>SIGN
                IN
              </v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <form @submit.prevent="userSignIn">
                <v-layout column>
                  <v-flex>
                    <v-alert color="error" dismissible v-model="alert">{{
                      error
                    }}</v-alert>
                  </v-flex>
                  <v-flex>
                    <v-text-field
                      flat
                      outlined
                      name="email"
                      placeholder="Email"
                      id="email"
                      type="email"
                      v-model="email"
                      required
                    ></v-text-field>
                  </v-flex>
                  <v-flex>
                    <v-text-field
                      flat
                      outlined
                      name="password"
                      placeholder="Password"
                      id="password"
                      type="password"
                      v-model="password"
                      required
                    ></v-text-field>
                  </v-flex>
                  <v-flex class="text-xs-center">
                    <v-btn rounded outlined type="submit" :disabled="loading"
                      >Sign In</v-btn
                    >
                  </v-flex>
                </v-layout>
              </form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      alert: false
    };
  },
  computed: {
    error() {
      return this.$store.getters.getError;
    },
    loading() {
      return this.$store.getters.getLoading;
    }
  },
  watch: {
    error(value) {
      if (value) {
        this.alert = true;
      }
    },
    alert(value) {
      if (!value) {
        this.$store.dispatch("setError", false);
      }
    }
  },
  methods: {
    userSignIn() {
      this.$store.dispatch("userSignIn", {
        email: this.email,
        password: this.password
      });
    }
  }
};
</script>
