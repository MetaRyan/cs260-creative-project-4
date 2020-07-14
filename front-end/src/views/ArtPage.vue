<template>
  <div class="art-page">
    <v-container fluid>
      <v-row>
        <v-col
          align="center">
          <h1>{{ image.name }}</h1>
        </v-col>
      </v-row>
      <v-row
        align="center"
        justify="center">
        <v-col
          xs="12"
          sm="8"
          md="8"
          lg="6"
          xl="6"
          v-if="image.src.slice(-4) === '.mp4'">
          <vue-core-video-player 
            :src="'/videos/' + image.src"
            :autoplay="false"/>
        </v-col>
          <v-col
            xs="12"
            sm="8"
            md="8"
            lg="6"
            xl="4"
            v-else>
            <a 
              :href="'/images/'+image.src"
              :target="'_blank'">
              <v-img 
                :src="'/images/'+image.src"
                contain/>
            </a>
          </v-col>
      </v-row>
      <v-row>
        <v-col 
          align="center">
          <h3>Created {{ image.date }}</h3>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import VueCoreVideoPlayer from 'vue-core-video-player';
import Vue from 'vue'

Vue.use(VueCoreVideoPlayer);

export default {
  name: 'ArtPage',
  components: {
  },
  props: {
    id: Number
  },
  computed: {
    image() {
      return this.$root.$data.art.find(x => x.id === this.id);
    }
  }
}
</script>