<template>
  <v-app>
    <v-app-bar
      fixed
      app
      color="success"
      dark
      shrink-on-scroll
      prominent
      :src="srcPic"
      scroll-target="#scrolling"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>Vue.js with Firebase</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn class="ma-1" outlined @click="userSignOut" v-if="isAuthenticated"
        ><v-icon>exit_to_app</v-icon>Sign Out</v-btn
      >
      <v-btn
        class="ma-1"
        outlined
        v-for="(item, index) in toolbarItems"
        :key="index"
        :to="item.link"
      >
        <v-icon>{{ item.icon }}</v-icon>
        {{ item.title }}
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-sheet id="scrolling" class="overflow-y-auto" max-height="700">
        <v-container fluid style="height: 1000px;">
          <router-view></router-view>
        </v-container>
      </v-sheet>
    </v-main>
    <v-footer class="py-3">
      <span class="ml-auto overline">GitHub : cc-chanchai &copy;2020</span>
    </v-footer>
  </v-app>
</template>
<script>
export default {
  computed: {
    srcPic() {
      return this.$store.getters.getSrcPic;
    },
    isAuthenticated() {
      return (
        this.$store.getters.getUser !== null &&
        this.$store.getters.getUser !== undefined
      );
    },
    toolbarItems() {
      return this.isAuthenticated
        ? []
        : [
            {
              title: "Home",
              link: "/",
              icon: "home"
            },
            {
              title: "Sign Up",
              link: "/signup",
              icon: "supervised_user_circle"
            },
            {
              title: "Sign In",
              link: "/signin",
              icon: "portrait"
            }
          ];
    }
  },
  methods: {
    userSignOut() {
      this.$store.dispatch("userSignOut");
    }
  }
};
</script>
