<template>
  <v-app id="app">
    

    <v-app-bar
      app
      clipped-left
      color=#0A7064
      dense
      dark
    >
      <v-toolbar-title class="mr-12 align-center">
        <span id="title">Christy Graves</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-row
        style="max-width: 650px"
        class="text-right"
        justify="end"
      >
        <v-btn
          to="/"
          large
          text
        >
          <span class="white--text">
            Work
          </span>
        </v-btn>
        <v-btn
          to="/about"
          large
          text
        >
          <span class="white--text">
            About
          </span>
        </v-btn>
      </v-row>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <router-view/>
      </v-container>
    </v-main>
    <v-footer
      color=#0A7064
      app
    >
      <v-spacer/>
      <span class="white--text footer-text">Find this site's GitHub repository <a href="https://github.com/MetaRyan/cs260-creative-project-3">here</a></span>
      <v-spacer/>
    </v-footer>
  </v-app>
</template>

<script>


export default {
  name: 'App',
  props: {
    source: String,
  },
  components: {

  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Raleway&display=swap");
  .footer-text a {
    color: #17FFE4;
    text-decoration: none;
  }
  #app {
    background: #E7FFF8;
  }
  .v-application {
   font-family: 'Raleway', sans-serif !important;
 }
 #title {
   font-family: 'Raleway', sans-serif !important;
 }
</style>
