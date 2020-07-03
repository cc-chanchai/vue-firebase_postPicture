<template>
  <div>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="4">
          <v-card class="elevation-3">
            <v-toolbar outlined :src="this.$store.getters.getSrcPic">
              <v-toolbar-title class="white--text">
                <v-icon large color="white" class="mx-3"
                  >supervised_user_circle</v-icon
                >SIGN UP
              </v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <form @submit.prevent="userSignUp">
                <v-layout column>
                  <v-flex>
                    <v-alert error dismissible v-model="alert">{{
                      error
                    }}</v-alert>
                  </v-flex>
                  <v-flex>
                    <v-text-field
                      flat
                      outlined
                      name="email"
                      label="Email"
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
                      label="Password"
                      id="password"
                      type="password"
                      v-model="password"
                      required
                    ></v-text-field>
                  </v-flex>
                  <v-flex>
                    <v-text-field
                      flat
                      outlined
                      name="confirmPassword"
                      label="Confirm Password"
                      id="confirmPassword"
                      type="password"
                      v-model="passwordConfirm"
                      :rules="[comparePasswords]"
                    ></v-text-field>
                  </v-flex>
                  <v-flex class="text-xs-center" mt-5>
                    <v-btn
                      rounded
                      outlined
                      primary
                      type="submit"
                      :disabled="loading"
                      >Sign Up</v-btn
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
      passwordConfirm: "",
      alert: false
    };
  },
  computed: {
    comparePasswords() {
      return this.password === this.passwordConfirm
        ? true
        : "Password and confirm password don't match";
    },
    error() {
      return this.$store.getters.getError;
    },
    loading() {
      return this.$store.getters.getLoading;
    }
  },
  methods: {
    userSignUp() {
      if (this.comparePasswords !== true) {
        return;
      }
      this.$store.dispatch("userSignUp", {
        email: this.email,
        password: this.password
      });
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
        this.$store.dispatch("setError", null);
      }
    }
  }
};
</script>
