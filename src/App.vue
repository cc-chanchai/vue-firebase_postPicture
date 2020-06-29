<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-btn flat @click="userSignOut" v-if="isAuthenticated">
          Sign Out
        </v-btn>
        <v-btn flat v-for="(item, i) in toolbarItems" :key="item.i" :to="item.link">
          {{ item.title }}
        </v-btn>
      </div>
    </v-app-bar>

    <v-content>
      <v-spacer></v-spacer>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [
        {
          icon: "bubble_chart",
          title: "Inspire"
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false
    };
  },
  computed: {
    appName() {
      return this.$store.getters.appTitle;
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
              title: "Sign Up",
              link: "/signup"
            },
            {
              title: "Sign In",
              link: "/signin"
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
