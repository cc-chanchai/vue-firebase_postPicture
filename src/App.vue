<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-btn to="/" text>
          <span class="mr-2">Home</span>
          <v-icon>mdi-open-in-new</v-icon>
        </v-btn>

        <v-btn to="/signUp" text>
          <span class="mr-2">Sign Up</span>
          <v-icon>mdi-open-in-new</v-icon>
        </v-btn>

        <v-btn to="/signIn" text>
          <span class="mr-2">Sign In</span>
          <v-icon>mdi-open-in-new</v-icon>
        </v-btn>

        <v-btn to="/post" text>
          <span class="mr-2">Post</span>
          <v-icon>mdi-open-in-new</v-icon>
        </v-btn>

        <v-btn to="/about" text>
          <span class="mr-2">About</span>
          <v-icon>mdi-open-in-new</v-icon>
        </v-btn>
      </div>
    </v-app-bar>
    <About />
    <v-content class="container">
        <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    //
  })
};
</script>
